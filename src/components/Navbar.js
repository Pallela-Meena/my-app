import React from 'react'




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor:props.mode.navbar}}>
        <a className={`navbar-brand `} href="/">TextUtils</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className={`nav-link`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="/">About</a>
            </li>
          </ul>
          {/*BLUE COLOR*/}
          <div className='form-check form-switch'>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefaultBlue" onClick={props.toggleMode("blue")} style={{backgroundColor:'#0000ff'}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefaultBlue">{`${props.mode.indicator==="#0000ff"? "Disable" : "Enable"} Blue Mode`}</label>
          </div>

          
         
        </div>
        
      </nav>
  )
}



