import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("http://localhost:4000/posts").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
        setName(resp[0].name);
        setGender(resp[0].gender);
        setEmail(resp[0].email);
        setStatus(resp[0].status);
        setUserId(resp[0].id);
      });
    });
  }

  function selectUser(id) {
    let item = users[id - 1];
    setName(item.name);
    setEmail(item.email);
    setGender(item.gender);
    setUserId(item.id);
    setStatus(item.status);
  }

  function updateUser() {
    let item = { name, email, gender, status };
    console.warn("item", item);
    fetch(`http://localhost:4000/posts/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }

  return (
    <div className="App">
      <h1>ASSIGNMENT</h1>
      <table border="1" style={{ float: "left" }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Status</td>
            <td>update</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="update">
        <label>Name : </label>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value);}}/>{" "}
        <br />
        <br />
        <label>Gmail : </label>
        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value);}}/>{" "}
        <br />
        <br />
        <label>Gender : </label>
        <input type="text" value={gender} onChange={(e) => {setGender(e.target.value);}}/>{" "}
        <br />
        <br />
        <label>Status : </label>
        <input type="text" value={status} onChange={(e) => {setStatus(e.target.value);}}/>{" "}
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}
export default App;
