import React from 'react'
import style from './TextInput.module.css'

export const TextInput = (props) => {
  return (
    <div>
     <input className={style.input} type="text" {...props}/>
    </div>
  )
}
