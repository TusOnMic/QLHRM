// pages/leave-request.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

const LeaveRequest: React.FC = () => {
  const [leaveData, setLeaveData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leave-request', leaveData);
      alert('Leave request submitted successfully!');
    } catch (error) {
      console.error('Error submitting leave request:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Leave Request</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Start Date:</label>
            <input type="date" name="startDate" onChange={handleChange} required />
          </div>
          <div>
            <label>End Date:</label>
            <input type="date" name="endDate" onChange={handleChange} required />
          </div>
          <div>
            <label>Reason:</label>
            <textarea name="reason" onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequest;
