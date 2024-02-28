import React from 'react'
function Button( {text, color} ){

    let cName = "button";
    if(color === "blue")
        cName += " button_"+color;

    return(
        <div className={cName}>
            <p>{text}</p>
            <i></i>
        </div>
    )
}

export default Button;