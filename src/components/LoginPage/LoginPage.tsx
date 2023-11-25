import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main">
      <div className="main__auth">
        <form action="" className="main__form form">
          <h2 className="form__header">Login</h2> 
          <span className="form__error">Error</span>

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

          <input type="submit" className="form__button" value="Send"/>

          <span className="form__link">Not a member yet? <Link to="../register">Register now!</Link></span>
        </form>

      </div>
    </div>
  );
}