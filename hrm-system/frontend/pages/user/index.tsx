// pages/user/index.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import '../../styles/global.css';

interface UserProfile {
  fullName: string;
  email: string;
  position: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get<UserProfile>('http://localhost:5000/api/user/profile');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>User Profile</h1>
        {userData ? (
          <div>
            <p><strong>Full Name:</strong> {userData.fullName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Position:</strong> {userData.position}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
