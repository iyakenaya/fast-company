import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";

const UserPage = () => {
  const history = useHistory();
  const params = useParams();

  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(params.userId).then((data) => setUser(data));
  }, []);
  console.log(user);

  const handleSave = () => {
    history.replace("/users");
  };
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>{`Профессия: ${user.profession.name}`}</h2>
        <h6>
          <QualitiesList qualities={user.qualities} />
        </h6>
        <h6>{`completedMeetings: ${user.completedMeetings}`}</h6>
        <h1>{`Rate: ${user.rate}`}</h1>
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Все Пользователи
        </button>
      </>
    );
  }
  return <h1>{"Loading"}</h1>;
};

export default UserPage;
