import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"

const User = ({ user, onDelete, onClick, ...rest }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((qualitie) => {
          return (
            <Qualitie
              key={qualitie._id}
              color={qualitie.color}
              name={qualitie.name}
            />
          )
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
          className='btn btn-danger btn-sm m-2'
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default User
