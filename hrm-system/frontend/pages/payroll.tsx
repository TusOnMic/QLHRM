// pages/payroll.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

interface PayrollData {
  month: string;
  amount: number;
}

const Payroll: React.FC = () => {
  const [payrollData, setPayrollData] = useState<PayrollData[]>([]);

  useEffect(() => {
    const fetchPayrollData = async () => {
      try {
        const response = await axios.get<PayrollData[]>('http://localhost:5000/api/payroll');
        setPayrollData(response.data);
      } catch (error) {
        console.error('Error fetching payroll data:', error);
      }
    };

    fetchPayrollData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Payroll Management</h1>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((payroll) => (
              <tr key={payroll.month}>
                <td>{payroll.month}</td>
                <td>{payroll.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
