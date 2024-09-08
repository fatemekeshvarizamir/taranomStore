import React, { useState, useRef } from 'react';
import Usericon from '../../assets/img/usericon.png';
import './UserProfile.css';
import { EditOutlined } from '@ant-design/icons';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    address: '',
    number: '',
    profileImage: Usericon,
  });

  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData(prevState => ({
          ...prevState,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = () => {
    fileInputRef.current.click(); // Trigger click event on file input
  };

  return (
    <div>
      <div className="profile-header">
        <h2>پروفایل</h2>
      </div>
      <div className="imagediv">
        <div className="divcenter">
          <img src={userData.profileImage} className="usericon" alt="Profile" />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <EditOutlined onClick={handleEditImage}/>
      </div>
      <div className="user-profile">
        <form onSubmit={handleSubmit} className='form'>
          <div className="form-row">
            <div className="form-group">
              <label>نام </label>
              <input type="text" name="name" value={userData.name} onChange={handleChange} disabled={!isEditing} placeholder='' />
            </div>
            <div className="form-group">
              <label>نام کاربری </label>
              <input type="text" name="username" value={userData.username} onChange={handleChange} disabled={!isEditing} placeholder='' />
            </div>
            <div className="form-group">
              <label>ایمیل </label>
              <input type="email" name="email" value={userData.email} onChange={handleChange} disabled={!isEditing} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>رمز عبور </label>
              <input type="password" name="password" value={userData.password} onChange={handleChange} disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label>شماره موبایل </label>
              <input type="text" name="number" value={userData.number} onChange={handleChange} disabled={!isEditing} className="numberinput" />
            </div>
            <div className="form-group">
              <label>آدرس </label>
              <input type="text" name="address" value={userData.address} onChange={handleChange} disabled={!isEditing} />
            </div>
          </div>
          <button type="button" onClick={toggleEditing} className='button1'>
            {isEditing ? 'ذخیره' : 'ویرایش'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
