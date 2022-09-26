import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Associations</h1>
        <Link to="/">HOME</Link>
        <Link to="/new-message">New Message</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
