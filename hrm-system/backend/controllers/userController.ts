// backend/controllers/userController.ts
import { Request, Response } from 'express';

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    // Giả sử bạn lấy thông tin người dùng từ cơ sở dữ liệu
    const userProfile = {
      fullName: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      phone: '0123456789',
      position: 'Nhân viên',
    };
    
    // Trả về thông tin người dùng
    res.json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
