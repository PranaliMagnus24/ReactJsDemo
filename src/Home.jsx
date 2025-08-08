import { useState } from "react";
import AddUser from "./AddUserApi";

export default function Home() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false); // loader state
  const [showForm, setShowForm] = useState(false); // form toggle

  const getData = () => {
    setLoading(true); // start loader
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = Array.isArray(data) ? data : [data];
        setInfo(formattedData);
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false)); // stop loader
  };

  return (
    <>
      <h1>This is Home Page</h1>
      <h2>Display API data using JSON server</h2>

      <button onClick={getData} disabled={loading}>
        {loading ? "Loading..." : "Get Data"}
      </button>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Data"}
      </button>

      {/* Show AddUser form when showForm is true */}
      {showForm && <AddUser />}

      {/* Loader text */}
      {loading && <p style={{ color: "blue" }}>Please wait, loading data...</p>}

      {info.length > 0 && !loading && (
        <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {info.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.address?.street}</td>
                <td>{user.address?.city}</td>
                <td>{user.address?.state}</td>
                <td>{user.address?.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
