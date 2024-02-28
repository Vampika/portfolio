import React from 'react'
function SmallTitle({text, span}){
    return (
            <h2 className="small-title">{text} <span>{span}</span></h2>        
    )
}

export default SmallTitle;