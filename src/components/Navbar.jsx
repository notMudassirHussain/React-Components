import React from "react";
import Notification from "./Notification";
import Message from "./Message";
import avatar from "../img/avatars/avatar.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <Notification />
          <Message />
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src={avatar}
                className="avatar img-fluid rounded me-1"
                alt="Charles Hall"
              />{" "}
              <span className="text-dark">Charles Hall</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="pages-profile.html">
                <i className="align-middle me-1" data-feather="user"></i> Profile
              </a>
              {}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
