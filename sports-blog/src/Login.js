import React from 'react';
import Authentication from './Authentication.css';
import image from "./images/bgwhite.jpg";

const Login = (props) => {
    const {
        uname,
        setUname,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;


    return (
        <section className='login' style={{backgroundImage: `url(${image})`}}>
            <div className='loginContainer'>
                <h1 className='authTitle'>sportsBlog</h1>
                {/* <label>Name</label>
                <input type="text" autoFocus required value={uname} onChange={e => setUname(e.target.value)} />
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type="password" required value={[password]} onChange={e => setPassword(e.target.value)} />
                <p className='errorMsg'>{passwordError}</p> */}
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <h1 className='authTitle' style={{color: 'white', textAlign:'center'}}>Login</h1>
                            <label>Email</label>
                            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <p className='errorMsg'>{emailError}</p>
                            <label>Password</label>
                            <input type="password" required value={[password]} onChange={e => setPassword(e.target.value)} />
                            <p className='errorMsg'>{passwordError}</p>
                            <div className='btnContainer'></div>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <h1 className='authTitle' style={{color: 'white', textAlign:'center'}}>Register</h1>
                            <label>Email</label>
                            <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <p className='errorMsg'>{emailError}</p>
                            <label>Password</label>
                            <input type="password" required value={[password]} onChange={e => setPassword(e.target.value)} />
                            <p className='errorMsg'>{passwordError}</p>
                            <div className='btnContainer'></div>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Login;