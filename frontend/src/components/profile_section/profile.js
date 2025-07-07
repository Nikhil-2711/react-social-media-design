import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <img
          src="../assets/profile_new.png"
          alt="profile"
          className="profile-photo"
        />
        <div className="profile-text">
          <h4 className="profile-name">User Name</h4>
          <p className="profile-friends">0 friends</p>
        </div>
      </div>
      <hr />
      <div className="profile-info ">
        <img
          src="../assets/user_designation.png"
          alt="profile"
          className="profile-designation"
        />
        <div className="profile-text">
          <p className="user-designation">User designation</p>
        </div>
      </div>
      <div className="profile-info mt-2">
        <img
          src="../assets/user_location.png"
          alt="profile"
          className="profile-designation"
        />
        <div className="profile-text">
          <p className="user-designation">User Location</p>
        </div>
      </div>
      <hr/>
      <div className='profile-info'>
        <div className='row'>
            <div className='col-md-6'>
                <img src='../assets/logo1.png' alt='logo1' className='logos'/>
            </div>
            <div className='col-md-6'>
                <img src='../assets/logo2.png' alt='logo2' className='logos'/>
            </div>
            <div className='col-md-12  justify-content-center mt-2 align-items-center'>
                    <img src='../assets/logo3.png' alt='logo3' className='logos'/>
            </div>
        </div>
       
      </div>
    </div>
  );
}
export default Profile;