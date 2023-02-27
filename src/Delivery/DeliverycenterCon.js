import React, { useState } from 'react'
import '../Css/Deliverycenter.css';
import Calendar from 'react-calendar';
import '../Css/DeliveryCalendar.css';
import 'react-calendar/dist/Calendar.css';
import moment, { locale } from "moment";



const DeliverycenterCon = () => {

    const [value, onChange] = useState(new Date());
  
  
    let datCk = moment(value).format("YYYY-MM-DD") 

  return (
    <div className='DeliverycenterContainer'>
       <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date}) => {
          if(datCk === moment(date).format("YYYY-MM-DD")){
            return(
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">1234-5678-9</div>
                </div>
              </>
            );
        }}}
      />
    </div>
  )
}

export default DeliverycenterCon