import React from "react"

const BookMark = ({ bookmark, userId, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick(userId)}>
      <i className={`bi bi-heart${bookmark ? "-fill" : ""}`}></i>
    </button>
  )
}

export default BookMark
