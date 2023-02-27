import React, {useState} from 'react'
import "../Css/maincenterCon.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import { Fade } from "react-awesome-reveal";

 
import MyResponsiveRadar from './MyResponsiveRadar';

const MaincenterCon = ({numbers, genders, weights}) => {

    const settings = {
        customPaging: function(i) {
          return (
            <a className='ck'>
              <img src={`assets/cow${i + 1}.jpg`} className='imgck'/>
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      let col = [
          {
              imgs : "assets/cow1.jpg"
            },{
                imgs : "assets/cow2.jpg"
            },{
                imgs : "assets/cow3.JPG"
            },{
                imgs : "assets/cow4.jpg"
            }]
           
    const [lg2Show, setLg2Show] = useState(false);
    const [longShow, setLongShow] = useState(false);

  return (
    <>
    <Fade direction={"top"} duration={800}>
    <div className='centercontainer'>
        <button className='numberBtn'>개체번호 : {numbers}</button>
        
        
            <Slider  {...settings}>
           
                {
                    col.map((item,idx)=>
                    <a >
                        <img src={item.imgs}  key={idx} className="silderimg"/>
                    </a>    
                    )
                }
            
            </Slider>
        <div className='bottomDiv'>
            몸무게 : {weights}
        </div>
        <div className='rightTopdiv'>
            성별 : {genders}
        </div>
        <div className='rightmiddlediv'>
            gg
        </div>
        <div className='rightbottomdiv'>
            ss
        </div>
        <MyResponsiveRadar/>
    </div>
    </Fade>
    </>
  )
}

export default MaincenterCon