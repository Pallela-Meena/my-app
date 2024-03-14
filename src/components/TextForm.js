import React,{useState} from 'react'


export default function TextForm(props) {

  const onChangeTextArea = (event)=>{
    setText(event.target.value)
  }

  const onUpperText = ()=>{
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text Converted to UpperCase","success")
  }

  const onLowerText = ()=>{
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text Converted to LowerCase","success")
  }

  const [text,setText]=useState("")
  return (
    <>
        <h3>{props.heading}</h3>
        
        <textarea className={`form-control mb-3`} style={{backgroundColor:props.mode.screen}} rows="8" value={text} onChange={onChangeTextArea}></textarea>
        <button type="submit" className="btn p-2 mr-4" style={{backgroundColor:props.mode.buttons}} onClick={onUpperText}>Convert to Uppercase</button>
        <button type="submit" className="btn p-2 ml-4" style={{backgroundColor:props.mode.buttons}} onClick={onLowerText}>Convert to Lowercase</button>
        <h3 className="mt-5">Text Summary</h3>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
        <h3 className="mt-3">Preview</h3>
        <p>{text}</p>
    </>
    
    
  )
}
