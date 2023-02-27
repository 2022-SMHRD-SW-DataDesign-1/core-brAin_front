import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../Css/Create.css';
export default function Create() {

    const navigate = Navigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [phone, setPhone] = useState('');
   

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [phoneVaild, setPhoneVaild] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(emailValid && pwValid && phoneVaild) {
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
    const handlePhone = (e) =>{
        setPhone(e.target.value);
      if (phone.length === 10) {
        setPhoneVaild(true);
      } else {
        setPhoneVaild(false);
      }
    };
    
    const onClickConfirmButton = () => {
      if(emailValid === true && pwValid === true &&  phoneVaild === true) {
        alert('회원가입에 성공했습니다.')
        navigate('/login')
      } else {
        alert("회원 정보를 정확히 입력해주세요.");
        navigate('/create')
      }
      
    }

    return (
      <div className="page">
        <div className="titleWrap">
          회원정보를
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
          <div style={{ marginTop: "26px" }} className="inputTitle">
            핸드폰번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="핸드폰번호 입력해주세요"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div className="errorMessageWrap">
            {!phoneVaild && phone.length > 0 && (
              <div>핸드폰번호 11자리를 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            확인
          </button>
        </div>
      </div>
    );
}