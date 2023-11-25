import { useState } from "react";
import { Register } from "../../api/post";
import { LoginType } from "../../types/login";

const registerInit: LoginType = {
  id: 0,
  login: '',
  password: '',
}


export const RegisterPage = () => {
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    if(login.length === 0 || password.length === 0) {
      setError("Input Login and Password");
      return;
    }

    registerInit.login = login
    registerInit.password = password

    try{
      const response = await Register(registerInit);

      if(response.status === 403) {
        setError("Login Allready Exist");
        return;
      }

      window.location.href = "#/login";

    } catch (error){
      console.log(error);
    }
  }

  return (
    <div className="main">
    <div className="main__auth">
      <form action="" className="main__form form">
        <h2 className="form__header">Register</h2>
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
          onClick={handleRegister}
        />
      </form>

    </div>
  </div>
  );
}