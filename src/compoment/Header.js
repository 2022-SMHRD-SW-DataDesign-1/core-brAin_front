import React, { useEffect,useState } from 'react'
import $ from 'jquery';
import '../Css/Header.css';
import Log from '../imgs/log.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Css/Login.css';
import { useNavigate } from 'react-router-dom';
import logindata from '../json/logindata.json';

const Header = ({setLoginstate}) => {
    
    const [lgShow, setLgShow] = useState(false);
    if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleclassName('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

    function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeclassName('active');
				$(this).find('ul').toggleclassName('active');
			}
		});
	}

    useEffect(()=>{
        mobileNav();
    })
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    
    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);
    

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      logindata.map((item)=>{
      if(email === item.email && pw === item.pw) {
        alert('로그인에 성공했습니다.')
        setLoginstate(true);
        
      } else {
        alert("등록되지 않은 회원입니다.");
        setLoginstate(false);
        logindata.push({"email": email, "pw": pw})
        console.log(JSON.stringify(logindata))
      }
    })
    }
    const navigate = useNavigate()
    const goCreate = () => {
        navigate('/create')
    };

   

  return (
    <>
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="index.html" className="logo">
                        <img src={Log} id="logoimg"/>
                    </a>
                    <ul className="nav">
                        <li className="scroll-to-section"><Button onClick={() => setLgShow(true)}>로그인</Button></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
<Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            로그인창
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="page">
        <div className="titleWrap">
          이메일과 비밀번호를
          <br />
          입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            로그인
          </button>
          <button onClick={goCreate} className="bottomButton">회원가입</button>
        
        </div>
      </div>
        </Modal.Body>
      </Modal>
      </>
  )
}

export default Header