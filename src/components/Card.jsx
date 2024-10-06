import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, value, icon, change, description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-auto">
            <div className="stat text-primary">
              <i className={`align-middle ${icon}`}></i>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className={`text-${change.direction}`}>
            <i className="mdi mdi-arrow-bottom-right"></i> {change.value}%{" "}
          </span>
          <span className="text-muted">{description}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string,
    change: PropTypes.shape({
        direction: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }),
    description: PropTypes.string.isRequired,
};

export default Card;

