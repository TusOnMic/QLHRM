import { Request, Response } from 'express';
import Payroll from '../models/payroll'; // Giả sử bạn đã tạo model Payroll

// Tạo bảng lương mới
export const createPayroll = async (req: Request, res: Response) => {
    const { employeeId, salary, month, year } = req.body; // Giả sử bạn có các trường này

    const newPayroll = new Payroll({
        employeeId,
        salary,
        month,
        year,
    });

    try {
        const savedPayroll = await newPayroll.save(); // Lưu bảng lương vào cơ sở dữ liệu
        res.status(201).json(savedPayroll);
    } catch (error) {
        res.status(500).json({ message: 'Không thể tạo bảng lương', error });
    }
};

// Lấy danh sách bảng lương
export const getPayrolls = async (req: Request, res: Response) => {
    try {
        const payrolls = await Payroll.find(); // Tìm tất cả bảng lương
        res.status(200).json(payrolls);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy danh sách bảng lương', error });
    }
};

// Xóa bảng lương
export const deletePayroll = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedPayroll = await Payroll.findByIdAndDelete(id);
        if (!deletedPayroll) {
            return res.status(404).json({ message: 'Bảng lương không tồn tại' });
        }
        res.status(200).json({ message: 'Bảng lương đã bị xóa' });
    } catch (error) {
        res.status(500).json({ message: 'Không thể xóa bảng lương', error });
    }
};

// Cập nhật bảng lương
export const updatePayroll = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedPayroll = await Payroll.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedPayroll) {
            return res.status(404).json({ message: 'Bảng lương không tồn tại' });
        }
        res.status(200).json(updatedPayroll);
    } catch (error) {
        res.status(500).json({ message: 'Không thể cập nhật bảng lương', error });
    }
};
