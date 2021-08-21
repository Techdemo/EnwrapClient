
import React, { useContext } from 'react'
import { PrimaryButton } from '../../modules/common/button'

const LoginPage = () => {
    const action = console.log("Ja")
 return (
    <div>
        <h1>Login Here</h1>
        <input type="email"></input>
        <input type="password"></input>
        <PrimaryButton  label="Log in" action={action} />
    </div>
  )
}

export default LoginPage