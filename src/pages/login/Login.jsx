import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";

export const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const usernameOrEmail = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!usernameOrEmail || !password) {
      alert("Please enter both username or email address and password.");
    } else {
      alert("Logging in...");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <span>Username or email address *</span>
            <input type="text" name="username" required />
            <span>Password *</span>
            <input type="password" name="password" required />
            <button className="button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
