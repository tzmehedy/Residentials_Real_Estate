import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const {updateProfileInfo,user} = useContext(AuthContext)
    const handelUpdateProfileInfo = (e) =>{
        e.preventDefault()

        const newProfileName = e.target.name.value
        const newPhotoURL = e.target.photoURL.value

        console.log(newPhoneNo)

        updateProfileInfo(newProfileName, newPhotoURL)
        .then(()=>{
            toast("Successfully updated")
        })
        .catch((error)=>{
            toast(error.message)
        })



    }
    return (
      <div>
        <NavBar></NavBar>
        <div className="mt-10 flex justify-center items-center">
          <Form onSubmit={handelUpdateProfileInfo} className="space-y-10">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                defaultValue={user.displayName}
                name="name"
                type="text"
                className="border-2 border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="photoURL">Photo URL: </label>
              <input
                defaultValue={user.photoURL}
                name="photoURL"
                type="text"
                className="border-2 border-gray-600"
              />
            </div>

            <button className="btn bg-yellow-400">Save Changes</button>
          </Form>
        </div>
      </div>
    );
};

export default EditProfile;