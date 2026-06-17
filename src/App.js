import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    if (editUser) {
      setUsers(
        users.map((u) =>
          u.id === editUser.id ? { ...user, id: editUser.id } : u
        )
      );
      setEditUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUserData = (user) => {
    setEditUser(user);
  };

  return (
    <div className="container">
      <h1>Flask-SQLite CRUD Application</h1>

      <UserForm addUser={addUser} editUser={editUser} />

      <UserTable
        users={users}
        deleteUser={deleteUser}
        editUserData={editUserData}
      />
    </div>
  );
}

export default App;