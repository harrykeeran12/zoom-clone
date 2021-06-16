import '../App.css'
const random = (min = 0, max = 50) => {
    let num = Math.random() * (max - min) + min;

    return Math.round(num);
};
let number = random(1000000000000, 9999999999999);

function Meeting({ meetingName, meetingTime }){
  
  return(
    <div className="complete-meeting-container">
    <div className="Meeting-container">
      <div className="Meeting-name">{(meetingName).slice(0, 19) + "..."}</div>
      <i className="fas fa-ellipsis-h Meeting-icon"></i>
      <div className="Meeting-start">Start</div>
  </div>
  <div className="Meeting-time">{meetingTime}</div>
  <div className="Meeting-ID">Meeting ID: {number.toString().slice(0, 3) + " " +  number.toString().slice(3, 7) + " " + number.toString().slice(8, 12)}</div>
</div>
  )
}
export default Meeting