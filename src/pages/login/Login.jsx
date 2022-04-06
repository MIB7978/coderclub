import React, { useState } from 'react'
import StepOtp from '../steps/stepotp/StepOtp'
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'


function Login() {
    const steps = {
        1:StepPhoneEmail,
        2:StepOtp
       
    }
    const [step, setStep] = useState(1)
    const Step = steps[step]
    const onNext = ()=>{
        setStep(step+1)
    }
  return (
    <div>
       <Step onNext = {onNext}/>
    </div>
  )
}

export default Login