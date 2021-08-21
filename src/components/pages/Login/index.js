import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PrimaryButton } from '../../modules/common/button'
import SecondaryButton from '../../modules/common/button/SecondaryButton'
import { Title, Flexbar, Form, InputSubmit, InputFields, NoAccount, LoginCard } from './styled'

const LoginPage = () => {
    const { handleSubmit, register } = useForm();
    // const { totalLogin } = useContext(AuthContext)
    // const onSubmit = data => totalLogin(data)
 
    return (
    <div>
        <LoginCard>
            <Flexbar>
            <Title>Log in met je gegevens</Title>
            <Form >
                <InputFields name="username" placeholder="E-mailadres" />
                <InputFields type="password" name="password" placeholder="Wachtwoord"  />
                <PrimaryButton type="submit" label="submit" action={useForm} />
            </Form>
            <NoAccount>Heb je nog geen account? klik <a href='#'>hier</a> voor meer informatie.</NoAccount>
            </Flexbar>
        </LoginCard>
    </div>
  )
}

export default LoginPage