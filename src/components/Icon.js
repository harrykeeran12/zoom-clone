import '../App.css'

function Icon({ icon, name }){
  return(
    <div className="Icon-container">
      <i className = {icon}></i>
      <p className="Icon-text">{name}</p>
      </div>
    
  )
}

export default Icon;