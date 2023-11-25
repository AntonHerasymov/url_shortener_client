import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="login" className="header__login">Login</Link>
    </header>
  );
}