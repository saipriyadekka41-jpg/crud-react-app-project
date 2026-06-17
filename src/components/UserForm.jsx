import React, { useState, useEffect } from "react";

function UserForm({ addUser, editUser }) {
  const [user, setUser] = useState({
    uname: "",
    contact: "",
    aadhar: "",
    email: "",
    address: "",
    gender: "",
    blood: "",
  });

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);

    setUser({
      uname: "",
      contact: "",
      aadhar: "",
      email: "",
      address: "",
      gender: "",
      blood: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="uname"
        placeholder="User Name"
        value={user.uname}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={user.contact}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="aadhar"
        placeholder="Aadhar Number"
        value={user.aadhar}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={user.address}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={user.gender}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="blood"
        placeholder="Blood Group"
        value={user.blood}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;