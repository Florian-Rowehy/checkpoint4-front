import React from "react";
import { NavLink } from "react-router-dom";
import authAPI from "../Service/authAPI";

const Navbar = (props) => {

  const logoutClickHandler=()=>{authAPI.logout()};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">TheBalooCompany</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/women">Women</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/men">Men</NavLink>
          </li>
          <li className="nav-ite">
            <NavLink className="nav-link" to="/kids">Kids</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-danger" onClick={logoutClickHandler}>Logout</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
