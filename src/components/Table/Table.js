import { useEffect, useReducer, useState } from "react";
import TableList from "./TableList";
import classes from "./Table.module.css";

const userREducer = (state, action) => {
  if (action.type === "NAME") {
    const nameList = action.users.sort((userA, userB) => {
      return userA.name > userB.name ? 1 : userA.name < userB.name ? -1 : 0;
    });
    return { sort: true, user: nameList };
  }
  if (action.type === "USERNAME") {
    const usernameList = action.users.sort((userA, userB) => {
      return userA.username > userB.username
        ? 1
        : userA.username < userB.username
        ? -1
        : 0;
    });
    return { sort: true, user: usernameList };
  }
};

const Table = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: new Headers(),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUsersList(data);
      });

    return () => {};
  }, []);

  const [userState, dispatchUser] = useReducer(userREducer, {
    sort: false,
    user: usersList,
  });

  const lastnameClickHandler = () => {
    dispatchUser({
      type: "NAME",
      users: usersList,
    });
  };
  const firstnameClickHandler = () => {
    dispatchUser({
      type: "USERNAME",
      users: usersList,
    });
  };

  return (
    <table className={classes.customers}>
      <colgroup span="4" className="columns"></colgroup>
      <thead>
        <tr>
          <th onClick={lastnameClickHandler}>Nom</th>
          <th onClick={firstnameClickHandler}>Prenom</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Entreprise</th>
        </tr>
      </thead>
      <tbody>
        <TableList users={usersList} />
      </tbody>
    </table>
  );
};

export default Table;
