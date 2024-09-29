import { Request, Response } from 'express';
import Employee from '../models/Employee'; // Giả sử bạn có model Employee

// Lấy danh sách nhân viên
export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find(); // Tìm tất cả nhân viên
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy danh sách nhân viên', error });
    }
};

// Tạo nhân viên mới
export const createEmployee = async (req: Request, res: Response) => {
    const { name, position, department } = req.body; // Giả sử bạn có các trường này

    const newEmployee = new Employee({
        name,
        position,
        department,
    });

    try {
        const savedEmployee = await newEmployee.save(); // Lưu nhân viên mới vào cơ sở dữ liệu
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'Không thể tạo nhân viên', error });
    }
};

// Xóa nhân viên
export const deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Nhân viên không tồn tại' });
        }
        res.status(200).json({ message: 'Nhân viên đã bị xóa' });
    } catch (error) {
        res.status(500).json({ message: 'Không thể xóa nhân viên', error });
    }
};

// Cập nhật thông tin nhân viên
export const updateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Nhân viên không tồn tại' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'Không thể cập nhật nhân viên', error });
    }
};
