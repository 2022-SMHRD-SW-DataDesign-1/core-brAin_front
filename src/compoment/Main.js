import React, { useEffect, useRef, useState } from 'react'

import Header from './Header'
import { Fade } from "react-awesome-reveal";


import '../Css/Main.css';
import topbtn from '../imgs/topbutton.png';
import MainleftCon from './MainleftCon';
import MaincenterCon from './MaincenterCon';


import Deliverymain from '../Delivery/Deliverymain';



const Main = () => {
   
    const mainRef = useRef();

    const topClick = () =>{
      mainRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })};
  
    const Dots = ({setScrollListck}) => {
  
      const [color1, setColor1] = useState(false)
      const [color2, setColor2] = useState(false)
      const [color3, setColor3] = useState(false)

    const mainscrollClick =() =>{
      setColor1(true)
      btnController()
      setScrollListck(false)
    }
     const secondscrollClick =() =>{
      setColor2(true)
      setColor1(false)
      btnController()
      setScrollListck(true)
     
      };
     
     const tposcrollClick =() =>{
      setColor3(true)
      setColor1(false)
      btnController()
     
     };
     const btnController = () =>{
      if(color1 === true ){
        setColor2(false)
        setColor3(false)
       
      }
      else if (color2 === true){
        setColor1(false)
        setColor2(false)
        
      }
      else if(color3 === true){
        setColor1(false)
        setColor3(false)
        
      }
     }
     
      return (
        <div 
        className='rightbtns' >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: 0,
              height: "700px",
              bottom:"100px",
            }}
          
          >
            <div onClick={mainscrollClick}
              style={{backgroundColor : color1? 
                "green":"rgb(148, 250, 148)"}} 
                  className="scrollBtn main_btn">
                    메인
            </div>
            <div onClick={secondscrollClick} 
              style={{backgroundColor : color2? 
                "green":"rgb(148, 250, 148)"}} 
                  className="scrollBtn second_btn">
                    분만<br/>알림관리
            </div>
            <div onClick={tposcrollClick} 
              style={{backgroundColor : color3? 
                "green":"rgb(148, 250, 148)"}} 
                  className="scrollBtn third_btn">
                    경매
            </div>
          </div>
        </div>
      );
    };
    const [ numbers,setNumbers] = useState("0123-4567-8");
    const [ genders, setGenders] = useState("수");
    const [weights, setWeights] = useState(660);
    const [loginstate, setLoginstate] = useState(false);
    const [scrollListck, setScrollListck] = useState(false);
    return (
        <div >
            <Header setLoginstate={setLoginstate}/>
           {/*
                          loginstate?"":
                          
                        <p className='loginstateText'>
                          <img className='hereimg' src='assets/here.png'/>
                          로그인이 되어 있어야 사용가능합니다
                          <br/><br/><br/><br/>로그인을 해주십시오.
                        </p>
    */}
            <div className="outer"
              style={{ filter:loginstate? "":"blur(10px)",
                      WebkitFilter: loginstate?"":"blur(10px)",
  display: scrollListck?"none":""}}>
            <MainleftCon setNumbers={setNumbers} setGenders={setGenders} setWeights={setWeights}/>
            <MaincenterCon numbers={numbers} genders={genders} weights={weights}/>
                
            <Fade direction={"right"}>
              <Dots setScrollListck={setScrollListck}/>
            </Fade>
            </div>


            <div className='outer'
              style={{
                
                display: scrollListck?"":"none"
              }}>
                <Deliverymain/>
                <Fade direction={"right"}>
                  <Dots setScrollListck={setScrollListck}/>
                </Fade>
            </div>
           
                <button onClick={topClick}>
                    <img className='topBtn' src={topbtn} />
                </button>
          
        </div>
    );
  }
  

export default Main