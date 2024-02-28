import React from 'react'

function TextLine({text, color})
{
    let cName = "textLine";
    if(color === "blue")
        cName += " textLine_"+color;

    return(
        <div className={cName}>
            <div className="textLine__toLeft">
                <p className="textLine__text">{text}</p>
                <p className="textLine__text">{text}</p>
            </div>            
        </div>
    )
}

export default TextLine;