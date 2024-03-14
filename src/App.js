import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import {useState } from 'react';


function App() {
  const [alert,setAlert] = useState(null);
  const [mode,setMode]=useState({navbar:'#0052cc',body:"#80bfff",screen:"#66a3ff",text:"#8080ff",buttons:"#0052cc",indicator:"#0000ff"})
  const showAlert=(message,type)=>{
    setAlert({
      alert:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = (colorParam)=>{
    if (colorParam==="blue"){
      setMode({navbar:'#0052cc',body:"#80bfff",screen:"#66a3ff",text:"#8080ff",buttons:"#0052cc",indicator:"#0000ff"})
      showAlert("Blue mode has been Enabled!","success")
    }
    else{
      console.log("GREEN")
      setAlert(null)
    }
    
  }
  return (
    <>
      <div style={{color:mode==="dark"? "#ffffff":"#000000",backgroundColor:mode.body,height:'100vh'}}>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
        </div>
      </div>  
    </>
  );
}

export default App;
