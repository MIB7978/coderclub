import React, { useState } from 'react'
import StepOtp from '../steps/stepotp/StepOtp'
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'


   
   

function Authenticate() {

    const steps = {
        1:StepPhoneEmail,
        2:StepOtp
       
    }
    const [step, setStep] = useState(2)
    const Step = steps[step]
    const onNext = ()=>{
        setStep(step+1)
    }
  return (
     <Step onClick = {onNext}/>
  
  )
}

export default Authenticate