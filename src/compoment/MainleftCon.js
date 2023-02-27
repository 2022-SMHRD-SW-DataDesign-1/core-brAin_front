import React, { useState } from 'react'
import "../Css/mainleftCon.css";
import { Fade } from "react-awesome-reveal";
import cowdata from "../json/cowdata.json"
import Modal from 'react-bootstrap/Modal';

const MainleftCon = ({setNumbers, setGenders, setWeights}) => {

    
    const leftBtnck =(e) =>{
            setNumbers(e.target.innerText)
            let nums = e.target.innerText
            cowdata.map((item,idx)=>{
                if(item.names === nums){
                    setWeights(cowdata[idx].weight)
                    setGenders(cowdata[idx].gender)
                }
            })
            
        }
    const [lg2Show, setLg2Show] = useState(false);
    const [longShow, setLongShow] = useState(false);

  return (
    <>
    <Fade direction={"left"}>
    <div className='leftcontainer'>
    <button className='createcow' onClick={() => setLg2Show(true)}>개체등록</button>
        <Modal
        size="lg"
        show={lg2Show}
        onHide={() => setLg2Show(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            개체등록
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='createcowInfo'>
                <tbody>
                    <tr>
                        <td>개체번호</td>
                        <td><input type='text' className='infoinput' placeholder='개체번호 9자리를 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>사육군</td>
                        <td>
                            <select>
                                <option value='breedinggroup_breeding'>번식우</option>
                                <option value='breedinggroup_eat'>우육우</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>성별</td>
                        <td>
                        <select value='gender'>
                                <option value='man'>수</option>
                                <option value='woman'>암</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type='date' className='inputdate' placeholder='생년월일을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>축산구역</td>
                        <td><input type='text' className='infoinput' placeholder='축산구역을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>혈통</td>
                        <td><input type='text' className='infoinput' placeholder='혈통을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type='submit'  className='createsubmit'>등록</button>
                        </td>    
                    </tr>
                </tbody>
            </table>
        </Modal.Body>
      </Modal>
    <button className='renamecow'>개체정보수정</button>
        {
            cowdata.map((item,idx)=>{
                return <button onClick={leftBtnck} id="num" className='leftbtns' key={idx}>
                        {
                            item.names
                        }
                       
                    </button>  
                }
            )
        }
    </div>
    </Fade>
    </>
  )
}

export default MainleftCon