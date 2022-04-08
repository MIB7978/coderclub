import React, { useState } from 'react'
import { Email } from './Email/Email'
import { Phone } from './Phone/Phone'
import style from './stepphoneemail.module.css'


function StepPhoneEmail() {
  const phoneEmail = {
    phone: Phone,
    email: Email

  }
  const [type, setType] = useState('phone')
  const Compnent = phoneEmail[type]
  const onNext = () => { }
  return (
    <>
      

      <div className={style.cardwrapper}>
        <div >
          <div className={style.btnwrapper}>
          <button className={`${style.btn} ${type === 'phone'?style.active:''}`} onClick={() => setType('phone')}>
            <img src="/image/phone_icon.png" alt="phone"/>
          </button>
          <button className={`${style.btn} ${type === 'email'?style.active:''}`} onClick={() => setType('email')}>
            <img src='/image/email.png' alt = "email"/>
          </button>

          </div>
          <Compnent onNext={onNext}/>
        </div>


      </div>
    </>


  )
}

export default StepPhoneEmail