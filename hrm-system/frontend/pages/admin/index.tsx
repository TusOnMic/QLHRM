// pages/admin/index.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import '../../styles/global.css';

interface AdminData {
  id: number;
  name: string;
}

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<AdminData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<AdminData[]>('http://localhost:5000/api/admin');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Giữ khoảng cách cho sidebar */}
        <h1>Admin Dashboard</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
