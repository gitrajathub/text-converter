import React, {useState} from 'react';



function Form(props){

    
    function copyToClipboard() {
        navigator.clipboard.writeText(text);
        props.showAlert(": Copied to clipboard!", "success");
    }

    const handleUppercaseClick = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert(": Converted to upper case!", "success");
    }

    const handleLowercaseClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert(": Converted to lower case!", "success");
    }

    const clearTextClick = ()=>{
        let clearText = "";
        setText(clearText);
        props.showAlert(": Text cleared!", "success");
    }

    
    const handleSentenceCase = () => {
        let newText = "";
        let capitalizeNext = true;

        for (let i = 0; i < text.length; i++) {
            if (capitalizeNext && text[i].match(/[a-z]/i)) {
                newText += text[i].toUpperCase();
                capitalizeNext = false;
            } else {
                newText += text[i];
                if (text[i] === ".") {
                    capitalizeNext = true;
                }
            }
        }
        setText(newText);
        props.showAlert(": Converted to sentence case!", "success");
    }   



    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    

    return(
        <>
        <div className="my-5 mx-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 className="my-3">{props.title}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" 
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            
            <div className='my-3'>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleUppercaseClick}>Convert to upper case</button>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleLowercaseClick}>Convert to lower case</button>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleSentenceCase}>Convert to sentence case</button>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={copyToClipboard}>Copy text to clipboard</button> 
                <button type="button" className="btn btn-danger btn-sm mx-1" onClick={clearTextClick}>Clear text</button>
            </div>

            <div>
                <p className='my-3'>Number of words: {text.split(" ").length}</p> 
                <p>Number of characters: {text.length}</p>
                <p>Preview: <i>{text.length>0?text:"Enter text in the box above"}</i></p>
            </div>
        </div>
        </>
    );
}

export default Form;