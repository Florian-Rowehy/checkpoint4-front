import React, {useState} from 'react';
import authAPI from '../Service/authAPI';

const LoginPage = (props) => {
    const [credentials, setCredentials] = useState({
        username:"",
        password:""
    })

    const [hasError, setHasError] = useState(false);

    const changeHandler = (event)=>{
        const {name, value} = event.currentTarget;
        if (name !== 'username' && name !== 'password') return;
        setCredentials({...credentials, [name]: value})
    }

    const formSubmitHandler = async (event)=>{
        event.preventDefault();
        try {
            await authAPI.login(credentials);
            setHasError(false);
        
        } catch(e) {
            console.log(e.response);
            setHasError(true);
        }

    }

    return (
        <>
            <h1>Login page</h1>
            <form className="container" onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" placeholder="username" className={"form-control "+(hasError && "is-invalid")}
                        name="username" id="username" 
                        onChange={changeHandler} 
                        value={credentials.username}
                    />
                    <p className="invalid-feedback">Bad credentials</p>
                </div>
                <p className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" placeholder="password" className={"form-control "+(hasError && "is-invalid")} 
                        name="password" id="password" 
                        onChange={changeHandler}
                        value={credentials.password}
                    />
                </p>
                <p className="form-group">
                    <button className="btn btn-success">Login</button>
                </p>
            </form>
        </>

    );
}

export default LoginPage;