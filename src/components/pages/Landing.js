import RegisterForm from '../Forms/RegisterForm'
import LoginForm from '../Forms/LoginForm'
import { useState } from 'react'

const Landing = () => {
    const [hasAccount, setHasAccount] = useState(false)
    return (
        <div>
            <h1>Landing Page</h1>

            {hasAccount === false ? (
                <div>
                    <RegisterForm />
                    <p>
                        Already have an account?{''}
                        <span className='btn btn-primary' onClick={(() => setHasAccount(true))}>Login</span>{''}
                    </p>
                </div>
            ) : (
                <LoginForm />
            )}

           
        </div>



    )

}
export default Landing