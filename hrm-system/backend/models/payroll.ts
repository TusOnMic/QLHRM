import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  month: String,
  year: Number,
  salary: Number,
  bonus: Number,
});

const Payroll = mongoose.model('Payroll', payrollSchema);
export default Payroll;
