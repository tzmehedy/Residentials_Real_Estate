import React, { useContext, useState } from 'react';
import NavBar from '../Components/NavBar';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const [errorMessage, setErrorMessage] = useState()
    const [success, setSuccessMessage] = useState()

    const handelCreateUser = (e) =>{
        e.preventDefault()

        setErrorMessage('')
        setSuccessMessage('')

        const email = e.target.email.value
        const password = e.target.password.value

        if (!/[A-Z]/.test(password)){
          setErrorMessage("Password must have a upper case character")
          return
        }
        else if(!/[a-z]/.test(password)){
          setErrorMessage("Password must have a lower case character")
          return
        }
        else if(password.length < 6){
          setErrorMessage("Password should be at least 6 character")
          return 
        }
          createUser(email, password)
            .then((result) => {
              toast("Congratulation, You are successfully register")
            })
            .catch((error) => {
              console.log(error.message);
            });

        e.target.name.value =''
        e.target.photoUrl.value =''
        e.target.email.value = ''
        e.target.password.value = ''


    }


    return (
      <div>
        <div>
          <NavBar></NavBar>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col font-bold">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-[#175151]">
                  Please Register
                </h1>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <Form onSubmit={handelCreateUser} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                    <p className='text-red-700 font-bold'>{errorMessage}</p>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#175151] text-white font-bold">
                      Register
                    </button>
                  </div>
                </Form>
                <p className="p-4 mb-5">
                  Already have an account, Please{" "}
                  <Link to={'/login'} className="text-emerald-700 font-bold underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;