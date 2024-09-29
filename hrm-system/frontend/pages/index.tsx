import React from 'react';
import Link from 'next/link';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the HRM System</h1>
      <nav>
        <Link href="/admin">
          <a>Admin Section</a>
        </Link>
        <Link href="/user">
          <a>User Section</a>
        </Link>
        <Link href="/leave-request">
          <a>Leave Request</a>
        </Link>
        <Link href="/payroll">
          <a>Payroll Management</a>
        </Link>
        <Link href="/performance">
          <a>Performance Evaluation</a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
