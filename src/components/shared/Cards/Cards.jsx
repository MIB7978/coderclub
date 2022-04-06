import React from 'react'
import style from './Cards.module.css'

function Cards(props) {
    const {title,icon,children} = props
  return (
    <div className={style.card}>
    <div className={style.headingwraper}>
      <img src={`/image/${icon}.png`} alt="hand" />
      <h1 className={style.heading}>{title}</h1>
    </div>

    {children}
  </div>
  )
}

export default Cards