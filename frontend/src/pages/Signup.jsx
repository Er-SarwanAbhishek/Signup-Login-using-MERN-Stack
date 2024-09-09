import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { handleError } from "../utils";

const Signup = () => {
const [signupInfo, setSignupInfo] = useState({
     name: "",
     email: "",
     phone: "",
     password: "",
   });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSignupInfo({ ...signupInfo, [name]: value });
  //   console.log(signupInfo);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password } = signupInfo;
  //   if (!name || !email || !password) {
  //     return handleError("name, email, password is required");
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5002/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(signupInfo),
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (err) {
  //     handleError(err);
  //   }


  const handleChange =(e) =>{
    const {name, value} = e.target;
    setSignupInfo({...signupInfo, [name] : value})
    console.log(signupInfo)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup successfully!", signupInfo)
  }
  return (
    <div className="form_container">
      <div className="container">
        <h1>Signup</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-content">
            <label>Name</label>
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="enter your name"
             value={signupInfo.name}
             onChange={handleChange}
            />
          </div>
          <div className="form-content">
            <label>Email</label>
            <input
              type="email"
              name="email"
              autoFocus
              placeholder="enter your email"
              value={signupInfo.email}
             onChange={handleChange}
            />
          </div>
          <div className="form-content">
            <label>Phone NO.</label>
            <input
              type="text"
              name="phone"
              autoFocus
              placeholder="enter your phone number"
              value={signupInfo.phone}
             onChange={handleChange}
            />
          </div>
          <div className="form-content">
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoFocus
              placeholder="enter your password"
              value={signupInfo.password}
             onChange={handleChange}
            />
          </div>
          <button type="submit">Signup</button>
       
        </form>
        <p>
            already have an account?
            <Link to="/login">
            Login</Link>
          </p>
      </div>
    </div>
  );
};

export default Signup;
