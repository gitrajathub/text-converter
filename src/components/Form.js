import React, {useState} from 'react';

function Form(props){

    const handleUppercaseClick = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowercaseClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const clearTextClick = ()=>{
        let clearText = "";
        setText(clearText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");;
    return(
        <>
        <div className="my-5 mx-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 className="my-3">{props.title}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" 
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            
            <div className='my-3'>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleUppercaseClick}>Convert to upper case</button>
                <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleLowercaseClick}>Convert to lower case</button>
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

