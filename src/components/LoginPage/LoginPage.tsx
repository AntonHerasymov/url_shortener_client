import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginType } from "../../types/login";
import { Login } from "../../api/post";

const loginInit: LoginType = {
  id: 0,
  login: '',
  password: '',
}

export const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    if(!login.length || !password.length) {
      setError("Input Login and Password");
      return;
    }

    loginInit.login = login;
    loginInit.password = password;

    try{
      const response = await Login(loginInit);

      console.log(response);

      if(response.status === 404 || response.status === 400) {
        setError(response.data.message);
        return;
      }

      

     // window.location.href = "#/";

    } catch (error){
      console.log(error);
    }

    setError("");
  }

  return (
    <div className="main">
      <div className="main__auth">
        <form action="" className="main__form form">
          <h2 className="form__header">Login</h2> 
          <span className="form__error">{error}</span>

          <div className="form__pair">
            <label className="form__label" htmlFor="Name">Name:</label>
            <input 
              className="form__input"
              type="text" 
              name="name"
              id="nameInput"
              value={login}
              onChange={(event) => setLogin(event.target.value)} 
            />
          </div>

          <div className="form__pair">
            <label className="form__label" htmlFor="Password">Password:</label>
            <input 
              className="form__input"
              type="password" 
              name="password" 
              id="passwordInput"
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
            />
          </div>

          <input 
            type="button" 
            className="form__button" 
            value="Send"
            onClick={handleLogin}
          />

          <span className="form__link">Not a member yet? <Link to="../register">Register now!</Link></span>
        </form>

      </div>
    </div>
  );
}