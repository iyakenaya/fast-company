import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ user, onDelete, onClick, ...rest }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((qual) => {
          return (
            <Qualitie key={qual._id} color={qual.color} name={qual.name} />
          );
        })}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <BookMark
          bookmark={user.bookmark}
          userId={user._id}
          onClick={onClick}
        />
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default User;
