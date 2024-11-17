import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Certifique-se de criar este arquivo depois para estilizar a navbar.

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/education">Educação</Link>
        </li>
        <li>
          <Link to="/waste-management">Resíduos</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
