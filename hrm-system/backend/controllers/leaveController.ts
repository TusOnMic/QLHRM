import { Request, Response } from 'express';
import LeaveRequest from '../models/LeaveRequest'; // Giả sử bạn đã tạo model LeaveRequest

// Tạo yêu cầu nghỉ phép
export const createLeaveRequest = async (req: Request, res: Response) => {
    const { employeeId, leaveType, startDate, endDate } = req.body; // Giả sử bạn có các trường này

    const newLeaveRequest = new LeaveRequest({
        employeeId,
        leaveType,
        startDate,
        endDate,
    });

    try {
        const savedLeaveRequest = await newLeaveRequest.save(); // Lưu yêu cầu nghỉ phép vào cơ sở dữ liệu
        res.status(201).json(savedLeaveRequest);
    } catch (error) {
        res.status(500).json({ message: 'Không thể tạo yêu cầu nghỉ phép', error });
    }
};

// Lấy danh sách yêu cầu nghỉ phép
export const getLeaveRequests = async (req: Request, res: Response) => {
    try {
        const leaveRequests = await LeaveRequest.find(); // Tìm tất cả yêu cầu nghỉ phép
        res.status(200).json(leaveRequests);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy danh sách yêu cầu nghỉ phép', error });
    }
};

// Xóa yêu cầu nghỉ phép
export const deleteLeaveRequest = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedLeaveRequest = await LeaveRequest.findByIdAndDelete(id);
        if (!deletedLeaveRequest) {
            return res.status(404).json({ message: 'Yêu cầu nghỉ phép không tồn tại' });
        }
        res.status(200).json({ message: 'Yêu cầu nghỉ phép đã bị xóa' });
    } catch (error) {
        res.status(500).json({ message: 'Không thể xóa yêu cầu nghỉ phép', error });
    }
};

// Cập nhật yêu cầu nghỉ phép
export const updateLeaveRequest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedLeaveRequest = await LeaveRequest.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedLeaveRequest) {
            return res.status(404).json({ message: 'Yêu cầu nghỉ phép không tồn tại' });
        }
        res.status(200).json(updatedLeaveRequest);
    } catch (error) {
        res.status(500).json({ message: 'Không thể cập nhật yêu cầu nghỉ phép', error });
    }
};
