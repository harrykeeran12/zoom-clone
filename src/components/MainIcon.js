import '../App.css';

function MainIcon({ name, icon }){
  const stylesorange = {
    backgroundColor: '#f26d21',
    width: 60,
    height: 60,
    borderRadius: 20
  }
  const stylesblue = {
    backgroundColor: '#0e72ed',
    width: 60,
    height: 60,
    borderRadius: 20
  }
  const rectangleStyle = {
    width: 25,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 10,
    borderRadius: 5,
    padding: 5
  }
  const iconChange = {
    color: '#0e72ed'
  }
  
  return(
    <div className="MainIcon-container">
      <div className="MainIcon-border" style={name === 'New Meeting' ? stylesorange : stylesblue}>
        <div className="MainIcon-rectangle" style={(name === 'Join' || name === 'Share screen') ? rectangleStyle : null}>
        <i className={icon} style= {(name === 'Join' || name === 'Share screen')? iconChange : null}></i>
        </div>
      </div>
      <p className="MainIcon-text">{name}</p>
    </div>

  )
}
export default MainIcon