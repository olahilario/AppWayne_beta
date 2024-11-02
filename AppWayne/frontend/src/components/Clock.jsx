import { useState, useEffect } from 'react';



function Clock() {

  const [time, setTime] = useState(new Date());
  const [lapso, setLapso] = useState(1000);


  useEffect(()=> {
    let interval = setInterval(()=>{
      setTime(new Date())
    }, lapso)
    return ()=>{
      clearInterval(interval);
    }
  }, [time])

  function formatTime(){
    let hours = time.getHours();
    const date = time.getFullYear() + '/' + fixTwoDigits(time.getMonth() + 1) + '/' + fixTwoDigits(time.getDate());
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const indexDay = time.getDay()
    const week = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const day = week[indexDay];

    const meridiem = hours >=12 ? 'PM' : 'AM'
    hours = hours % 12 || 12

    return `${fixOneZero(hours)}:${fixOneZero(minutes)}:${fixOneZero(seconds)} ${meridiem}`
  }

  function formatTimeDay(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const indexDay = time.getDay()
    const week = ['domingo', 'degunda-feira', 'terça-Feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    const day = week[indexDay];

    const meridiem = hours >=12 ? 'PM' : 'AM'
    hours = hours % 12 || 12

    return `${day}`
  }

  function formatMonthDay(){
    const date = fixTwoDigits(time.getDate() + '/' + fixTwoDigits(time.getMonth() + 1) + '/'+ time.getFullYear())
    return `${date}`
  }

  function fixOneZero(number){
    return (number < 10 ? '0' : '') + number
  }

  function fixTwoDigits(num) {
    return num < 10 ? '0' + num : num;
}


return (
  <div>
    <p>{formatTime()}</p>
    <p>{formatTimeDay()}</p>
    <p>{formatMonthDay()}</p>


    
  </div>
)
}

export default Clock
