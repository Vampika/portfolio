import React from 'react'
function Title({text, color}){

    let cName = "Title";
    if(color === "blue")
        cName += " Title_"+color;
    let tName = "Title__text"
    if(color === "blue")
        tName += " Title__text_"+color;

    return (
        <div className={cName}>
            <h1 className={tName}>{text}</h1>
        </div>
    )
}

export default Title;