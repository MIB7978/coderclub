import React from 'react'
import { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Cards from '../../../../components/shared/Cards/Cards'
import { TextInput } from '../../../../components/shared/Textinput/TextInput'
import style from "../stepphoneemail.module.css"


export const Email = () => {
  const [email, setEmail] = useState('')
  
  return (
    <Cards title="Enter Email id" icon="email">
      <div className={style.inputwrapper}>

        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <Button text="Next" icon="foreward_arrow" />
      <p className={style.bottompara}>
        By wririntg you are agree to our privacy policy
      </p>


    </Cards>
  )
}
