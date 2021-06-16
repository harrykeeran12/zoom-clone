import '../App.css'
import { useState, useEffect } from 'react'
import Meeting from './Meeting'

function MainSchedule(){
  const [currentDate, setcurrentDate] = useState(new Date())
  const meetingList = [{meetingName: "Hareeshan's Maths Class", time: "17:00 - 17:30"}]
  useEffect(() => {
      const timer = setInterval(() => {
        setcurrentDate(new Date())
      }, 1000);
      return() => {
        clearInterval(timer)
      }
     
  
  }, [])

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timerHours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
  const timerMins = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
  let time = timerHours + ":" + timerMins
  let currentDay = currentDate.toLocaleDateString(undefined, options)
  


  return(
    <div className="schedule-container">
      <img src="https://source.unsplash.com/random/430x170" alt="generic"className="scheduleimage"></img>
      <div className="current-dateandtime">
      <div className="current-time">{time}</div>
      <div className="current-date">{currentDay}</div>
      </div>
      <div className="schedule-tasks-container">
        <Meeting meetingName={meetingList[0].meetingName} meetingTime={meetingList[0].time}></Meeting>
      </div>
    </div>
  )
}
export default MainSchedule