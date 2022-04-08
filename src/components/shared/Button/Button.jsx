import React from 'react'
import style from "./Button.module.css"

function Button(props) {
      
    const {text,icon , onClick} = props
     return (
    

        <button onClick={onClick} className={style.btn}>
         <span>{text}</span>
         <img src={`/image/${icon}.png`} alt='' className={style.arrow}/>
        </button>


  )
}

export default Button