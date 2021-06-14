import '../App.css'

import MainIcon from './MainIcon.js'
function Main() {
  return(
    <div className="Main">
      <div className="Main-icons">
        <div className="Icon-collection">
          <MainIcon name="New Meeting" icon="fas fa-video"></MainIcon>
          <MainIcon name="Join" icon="fas fa-plus"></MainIcon>
          <MainIcon name="Schedule" icon="far fa-calendar-alt"></MainIcon>
          <MainIcon name="Share screen" icon="fas fa-arrow-up"></MainIcon>
        </div>
      </div>
      <div className="Main-schedule"></div>
    </div>
  )
}

export default Main