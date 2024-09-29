import React from 'react';
import Link from 'next/link';
import '../styles/global.css'; // Đảm bảo rằng đường dẫn này đúng với vị trí của global.css

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link href="/admin">Admin Dashboard</Link>
        </li>
        <li>
          <Link href="/user">User Profile</Link>
        </li>
        <li>
          <Link href="/leave-request">Leave Request</Link>
        </li>
        <li>
          <Link href="/payroll">Payroll Management</Link>
        </li>
        <li>
          <Link href="/performance">Performance Evaluation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
