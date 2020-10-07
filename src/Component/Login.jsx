import React from 'react';

const Login = (props) => {

  const {email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
      } = props

  return (
    <section className="login">
      <div className="loginContainer">


        <label htmlFor="">Username</label>
        <input type="text" 
        autoFocus 
        required 
        value={email} onChange={e => setEmail(e.target.value)} />
        <p className="errorMsg">{emailError}</p>

        <label htmlFor="">Password</label>
        <input type="text" 
        autoFocus 
        required 
        value={password} onChange={e => setPassword(e.target.value)} />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>SignIn</button>
              <p>don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>SignUp</span> </p>
            </> 
          ): (
            <>
              <button onClick={handleSignUp}>SignUp</button>
              <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)} >Sign In</span> </p>
            </> 
          )}
        </div>
      </div>
    </section>
  )
}

export default Login;
