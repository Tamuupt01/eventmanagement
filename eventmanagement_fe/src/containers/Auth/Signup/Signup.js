import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div
      className="signup template d-flex justify-content-center align-items-center 100-w vh-100  "
      style={{
        background: "#C0C0C0",
      }}
    >
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>
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

          <div className="d-grid">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p className="text-end mt-2 ">
            Already Registerd{" "}
            <Link to="/login" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="">
        <img
          src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.15752-9/357302822_795770188913676_164336318044511700_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2-5CZoffWeAAX9Vz6kV&_nc_ht=scontent-nrt1-2.xx&oh=03_AdQKfzEOARlIOKUV6wm6hhfuRc7o07oQsPLa0RoVl3qtAQ&oe=64CE7A4F"
          class="img-fluid float-end "
          style={{
            width: "262px",
            height: "362px",

            objectFit: "cover",
          }}
          alt="Team quickly"
        />
      </div>
    </div>
  );
}

export default Signup;
