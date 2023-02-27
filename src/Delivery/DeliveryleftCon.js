import React, { useState } from 'react'
import "../Css/DeliveryleftCon.css";
import { Fade } from "react-awesome-reveal";
import Deliverydata from "../json/Deliverydata.json"
import Modal from 'react-bootstrap/Modal';

const MainleftCon = ({setNumbers, setGenders, setWeights}) => {

    
    const leftBtnck =(e) =>{
            setNumbers(e.target.innerText)
            let nums = e.target.innerText
            Deliverydata.map((item,idx)=>{
                if(item.names === nums){
                    setWeights(Deliverydata[idx].weight)
                    setGenders(Deliverydata[idx].gender)
                }
            })
            
        }
    const [lg2Show, setLg2Show] = useState(false);
    const [number, setNumber] = useState('')
    const [deliverydata,setDeliverydata] = useState('')
    const [counter, setCounter] = useState('')
    const [birthdays, setBirthdays]= useState('')
    const [persents, setPersents] = useState('')
    const [deldate, setDeldate] = useState('')
    const [deliveryinfo, setDeliveryinfo] = useState({
        num: "",
        delivery : "",
        count : "",
        birthday : "",
        persent : "",
        deliverydate : "" 
    })

    const createDelivery = () =>{
        if(Deliverydata.num)
       Deliverydata.push({})
       
    }
    const DeliveryInfo = (e) => {
       console.log(e.target.value[0])
    }
  

  return (
    <>
    <Fade direction={"left"}>
    <div className='deliveryleftcontainer'>
    <button className='createcow' onClick={() => setLg2Show(true)}>분만등록</button>
        <Modal
        size="lg"
        show={lg2Show}
        onHide={() => setLg2Show(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            분만등록
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='createcowInfo'>
                <tbody>
                    <tr>
                        <td>개체번호</td>
                        <td><input type='text' onChange={DeliveryInfo} value={number} className='infoinput' name='num' placeholder='개체번호을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>임신여부</td>
                        <td>
                            <select name='delivery' onChange={DeliveryInfo}>
                                <option value='breedinggroup_breeding'>예</option>
                                <option value='breedinggroup_eat'>아니요</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>산차횟수</td>
                        <td><input type='text' onChange={DeliveryInfo} value={counter} className='infoinput' name='count' placeholder='산차횟수을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type='date' onChange={DeliveryInfo} value={birthdays} className='inputdate' name='birthday' placeholder='생년월일을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>수태율</td>
                        <td><input type='text' onChange={DeliveryInfo} value={persents} className='infoinput' name='persent' placeholder='수태율을 입력하세요'/></td>
                    </tr>
                    <tr>
                        <td>수정일</td>
                        <td><input type='date' onChange={DeliveryInfo} value={deldate} className='inputdate' name='deliverydate' placeholder='수정일을 입력하세요'/></td>
                    </tr>
                   
                    <tr>
                        <td>
                            <button type='submit' onClick={createDelivery} className='createsubmit'>등록</button>
                        </td>    
                    </tr>
                </tbody>
            </table>
        </Modal.Body>
      </Modal>
    <button className='renamecow'>분만정보수정</button>
        {
            Deliverydata.map((item,idx)=>{
                return <button onClick={leftBtnck} id="num" className='deliveryleftbtns' key={idx}>
                        {
                            item.num
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