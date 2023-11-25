import { Link } from 'react-router-dom';

export const Header = () => {
  const jwtToken = localStorage.getItem("jwtToken");

  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  }

  return (
    <header className="header">
      {Boolean(jwtToken?.length) 
      ? ( <a 
          href='#' 
          onClick={handleLogOut} 
          className="header__login"
          >
            LogOut
         </a> )
      : <Link to="login" className="header__login">Login</Link>  
      }
    </header>
  );
}