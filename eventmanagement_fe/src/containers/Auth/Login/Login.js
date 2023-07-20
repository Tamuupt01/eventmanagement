import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="login template d-flex justify-content-center align-items-center  vh-100 "
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-check"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary color-black">Sign in</button>
          </div>
          <p className="text-end mt-2 ">
            Forgot <a href="@">Password?</a>
            <Link to="/Signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <div className="">
        <img
          src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.15752-9/357302822_795770188913676_164336318044511700_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2-5CZoffWeAAX9Vz6kV&_nc_ht=scontent-nrt1-2.xx&oh=03_AdQKfzEOARlIOKUV6wm6hhfuRc7o07oQsPLa0RoVl3qtAQ&oe=64CE7A4F"
          class="img-fluid float-end "
          style={{
            width: "265px",
            height: "284px",

            objectFit: "cover",
          }}
          alt="Team quickly"
        />
      </div>
    </div>
  );
}

export default Login;
