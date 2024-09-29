import express from 'express';
import { getUserProfile } from '../controllers/userController';

const router = express.Router();

// Đảm bảo bạn đã xuất khẩu getUserProfile
router.get('/profile', getUserProfile);

export default router;
