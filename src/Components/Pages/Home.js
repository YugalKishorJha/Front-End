import './Home.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
// [] this is dependency otherwise code run infinite time


  // take data from API
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    // console.log(result);
  };

  // delete Function used axios Function
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
    {/* used Bootstrap make table */}
      <div className="container">
      <div className="py-4">
        <h1 className="Home_page">Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {/* map function used because map store data key and value */}
            {users.map((user, index) => (
              <tr>
              {/* index + 1 > increase the index no like-1,2,3,4 */}
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
{/* this link go to the Edit page,view button goto User file to open, Delete button call to delete function */}
<Link class="btn btn-primary me-2" to={`/users/${user.id}`}> View </Link>
                              
<Link class="btn btn-outline-primary me-2"  to={`/users/edit/${user.id}`}>Edit</Link>          
                                  
<Link class="btn btn-danger"   onClick={() => deleteUser(user.id)}>Delete</Link>       
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Home

