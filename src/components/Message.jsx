//import React from "react";

const Message = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-icon dropdown-toggle"
        href="#"
        id="messagesDropdown"
        data-bs-toggle="dropdown"
      >
        <div className="position-relative">
          <i className="align-middle" data-feather="message-square"></i>
        </div>
      </a>
      <div
        className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
        aria-labelledby="messagesDropdown"
      >
        <div className="dropdown-menu-header">4 New Messages</div>
        <div className="list-group">
          {}
        </div>
        <div className="dropdown-menu-footer">
          <a href="#" className="text-muted">
            Show all messages
          </a>
        </div>
      </div>
    </li>
  );
};

export default Message;
