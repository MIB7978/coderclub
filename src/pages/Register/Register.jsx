import React, { useState } from 'react'
import StepAvatar from '../steps/stepavtar/StepAvatar'
import StepName from '../steps/stepname/StepName'
import StepOtp from '../steps/stepotp/StepOtp'
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'
import StepUsername from '../steps/stepusername/StepUsername'



export default function Register() {
    const steps = {
        1:StepPhoneEmail,
        2:StepOtp,
        3:StepName,
        4:StepAvatar,
        5:StepUsername
    }
    const [step, setStep] = useState(1)
    const Step = steps[step]
    const onNext = ()=>{
        setStep(step+1)
    }
  return (
    <>
    <Step onNext = {onNext}/>
    </>
  )
}
