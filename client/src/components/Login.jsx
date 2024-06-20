import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "test",
    password: "test",
  });

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const register = async ()=>{

  }

  const login = async () => {
    try {
      const {data} = await axios("/api/auth/login", {
        method: "POST",
        data: credentials
      })
      console.log(data)
      localStorage.setItem("token", data.token) // store token locally
    } catch(e){
      console.log(e)
    }
  };

  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("token")
  };

  const requestData = async () => {
    try {
      const {data} = await axios("/api/auth/profile", {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }) 
      console.log(data)

    } catch(e){
      console.log(e)
    }
  };

  return (
    <div>
        <img src='src/assets/logo-inline-clear.svg' />
        <hr />
      <div>
        <input
          value={username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control mb-2"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
        />
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary" onClick={login}>
            Log in
          </button>
        </div>
        <div>
            <p>If you don't have an account, you can register below <br/></p>
            <button>
                Register
            </button>
        </div>
      </div>

      {data && (
        <div className="text-center p-4">
          <div className="alert">{data}</div>
        </div>
      )}
    </div>
  );
}


 