import React from "react";

function UserTable({ users, deleteUser, editUserData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Aadhar</th>
          <th>Email</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Blood Group</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.uname}</td>
            <td>{user.contact}</td>
            <td>{user.aadhar}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.gender}</td>
            <td>{user.blood}</td>

            <td>
              <button onClick={() => editUserData(user)}>
                Edit
              </button>
            </td>

            <td>
              <button onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;