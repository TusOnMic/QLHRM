import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  evaluationDate: Date,
  score: Number,
  comments: String,
});

const PerformanceEvaluation = mongoose.model('PerformanceEvaluation', performanceSchema);
export default PerformanceEvaluation;
