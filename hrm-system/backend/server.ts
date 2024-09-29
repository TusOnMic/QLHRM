import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db';
import employeeRoutes from './routes/employee';
import leaveRoutes from './routes/leave';
import payrollRoutes from './routes/payroll';
import performanceRoutes from './routes/performance';

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/payrolls', payrollRoutes);
app.use('/api/performance', performanceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
