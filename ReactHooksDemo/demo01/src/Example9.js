import React, { useRef, useState,useEffect } from 'react';

function Example9() { 
    const inputEl = useRef(null)
    const onButtonClick = ()=> {
        inputEl.current.value = "hello, JSC"
        console.log('inputEl');
    }

    const [text, setText] = useState('jsc')
    const textRef = useRef()
    useEffect(()=> {
        textRef.current = text
        console.log("textRef.current:", textRef.current);
        
    })
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文子</button>

            <br/>
            <input value={text} onChange={(e)=> {setText(e.target.value)}}/>
        </div>
    )
}

export default Example9

