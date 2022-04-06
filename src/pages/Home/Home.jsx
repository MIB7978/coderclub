import React from 'react'
import style from './Home.module.css'
import { Link, useHistory } from "react-router-dom"
import Cards from '../../components/shared/Cards/Cards'
import Button from '../../components/shared/Button/Button'

function Home() {
  const linksignin ={
    color:"#0077FF",
    textDecoration:"none",
    cursor:"pointer",
    marginLeft:"10px"
  }
  const history = useHistory()
  const register = ()=>{
      history.push("/register")
      // console.log("passed")
  }
  return (
    <div className={style.cardwrapper}>
      <Cards title="Welcome to podcast!" icon="hand_sign">

        <p className={style.text}>
          Lorem Ipsum is simply dummy text of the printing
          industry. Lorem Ipsum has been the industry's sta
          ever
        </p>
          
          <div >
        <Button onClick = {register} text="get username" icon="foreward_arrow"/>
          </div>

        
        <div className={style.signin}>
          <span className={style.spantext}>have an invite text</span>
          <Link to="/login" style={linksignin}>
          sign in
         </Link>
          </div>
        
      </Cards>



    </div>
  )
}

export default Home