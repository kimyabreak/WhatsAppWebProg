import React, {useState} from "react";
export const Login = (props) => {
    const [number, setNumber] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefautl();
        console.log(email);
    }

    return(
        <div className="auto-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="number">Number</label>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder="+49 1234 567890" id="number" name="number"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}