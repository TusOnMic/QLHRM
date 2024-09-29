import mongoose from 'mongoose';

const leaveRequestSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  startDate: Date,
  endDate: Date,
  reason: String,
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
});

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);
export default LeaveRequest;
