import React, { useContext } from 'react';
import NavBar from '../Components/NavBar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
      <div>
        <NavBar></NavBar>

        <div className="container mx-auto flex justify-center items-center mt-10">
          <div className="grid grid-cols-4 ">
            <div className="col-span-1">
              <img
                className="rounded-full"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co.com/jZywt2j/0d64989794b1a4c9d89bff571d3d5842.jpg"
                }
                alt=""
              />
            </div>
            <div className="col-span-3 border-l-4 border-yellow-400 p-3 space-y-5">
              <p>
                Name: {user.displayName ? user.displayName : "No name added"}
              </p>
              <p>Email: {user.email ? user.email : "No Email added"}</p>
              <p>
                Photo URL: {user.photoURL ? user.photoURL : "No Photo added"}
              </p>
              <Link
                to={"/editProfile"}
                className="btn bg-yellow-400 text-[#175151] hover:bg-yellow-300 font-bold px-10"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;