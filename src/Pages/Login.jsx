import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {userLogin} = useContext(AuthContext)

  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    e.target.email.value = "";
    e.target.password.value = "";
  };
    return (
      <div>
        <NavBar></NavBar>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col font-bold">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-[#175151]">
                Please Login
              </h1>
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
                <div className="form-control mt-6">
                  <button className="btn bg-[#175151] text-white font-bold">
                    Login
                  </button>
                </div>
              </Form>
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