import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, userLoginWithGoogle, userLoginWithGithub } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  const handelLogin = (e) => {
    e.preventDefault();

    setErrorMessage('')

    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        toast("Successfully Login")
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        setErrorMessage("Email & Password aren't valid")
      });

    e.target.email.value = "";
    e.target.password.value = "";
  };

  const handleGoogleLogin = () => {
    userLoginWithGoogle()
      .then((result) => {
        toast("Successfully Login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelGithubLogin = () => {
    userLoginWithGithub()
      .then((result) => {
        toast("Successfully Login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col font-bold">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#175151]">Please Login</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-5">
                <button className="btn bg-[#175151] hover:bg-[#218b8b] text-white font-bold">
                  Login
                </button>
              </div>
              <p className="text-red-700">{errorMessage}</p>
            </Form>
            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-[#175151] hover:bg-[#218b8b] px-12 text-white font-bold"
              >
                <FcGoogle></FcGoogle>
                Login with Google
              </button>
            </div>
            <div className="text-center mt-5">
              <button
                onClick={handelGithubLogin}
                className="btn bg-[#175151] hover:bg-[#218b8b] px-12 text-white font-bold"
              >
                <FaGithub></FaGithub>
                Login with Github
              </button>
            </div>
            <p className="p-4 mb-5">
              If you are not register, Please{" "}
              <Link
                to={"/register"}
                className="text-emerald-700 font-bold underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
