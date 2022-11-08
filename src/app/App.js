import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => userId !== user._id));
  };

  const handleToogleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
    console.log(id);
  };
  return (
    <div>
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToogleBookMark}
      />
    </div>
  );
};

export default App;
