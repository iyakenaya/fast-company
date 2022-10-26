import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ bookmark, userId, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick(userId)}>
      <i className={`bi bi-heart${bookmark ? "-fill" : ""}`}></i>
    </button>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BookMark;
