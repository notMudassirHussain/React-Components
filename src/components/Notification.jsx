//import React from "react";

const Notification = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-icon dropdown-toggle"
        href="#"
        id="alertsDropdown"
        data-bs-toggle="dropdown"
      >
        <div className="position-relative">
          <i className="align-middle" data-feather="bell"></i>
          <span className="indicator">4</span>
        </div>
      </a>
      <div
        className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
        aria-labelledby="alertsDropdown"
      >
        <div className="dropdown-menu-header">4 New Notifications</div>
        <div className="list-group">
          {}
        </div>
        <div className="dropdown-menu-footer">
          <a href="#" className="text-muted">
            Show all notifications
          </a>
        </div>
      </div>
    </li>
  );
};

export default Notification;
