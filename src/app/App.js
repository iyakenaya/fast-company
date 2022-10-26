import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => userId !== user._id)
    setUsers(newUsers)
  }

  const handleToogleBookMark = (id) => {
    const toggleBookMark = users.map((item) => {
      if (item._id === id) {
        return { ...item, bookmark: !item.bookmark }
      }
      return item
    })
    setUsers(toggleBookMark)
  }

  return (
    <div>
      <SearchStatus users={users} />
      <Users
        users={users}
        onDelete={handleDelete}
        onClick={handleToogleBookMark}
      />
    </div>
  )
}

export default App
