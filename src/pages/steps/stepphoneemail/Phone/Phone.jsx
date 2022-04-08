import React from 'react'
import { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Cards from '../../../../components/shared/Cards/Cards'
import { TextInput } from '../../../../components/shared/Textinput/TextInput'
import style from "../stepphoneemail.module.css"

export const Phone = () => {
  const [phone, setPhone] = useState('')
  return (
   
    <Cards title="Enter Phone Number" icon="phone">
        <div className={style.inputwrapper}>

        <TextInput value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <Button text = "Next" icon = "foreward_arrow"/>
        <p className={style.bottompara}>
        By wririntg you are agree to our privacy policy
          </p>  
           
    
    </Cards>
  
  
  )
}
