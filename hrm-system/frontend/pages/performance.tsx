// pages/performance.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

interface PerformanceData {
  month: string;
  rating: number;
}

const Performance: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get<PerformanceData[]>('http://localhost:5000/api/performance');
        setPerformanceData(response.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Performance Evaluation</h1>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((performance) => (
              <tr key={performance.month}>
                <td>{performance.month}</td>
                <td>{performance.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
