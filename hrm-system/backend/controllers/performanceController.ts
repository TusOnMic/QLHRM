import { Request, Response } from 'express';
import Performance from '../models/performanceEvaluation'; // Giả sử bạn đã tạo model Performance

// Tạo đánh giá hiệu suất mới
export const createPerformanceEvaluation = async (req: Request, res: Response) => {
    const { employeeId, evaluationDate, score, comments } = req.body; // Giả sử bạn có các trường này

    const newEvaluation = new Performance({
        employeeId,
        evaluationDate,
        score,
        comments,
    });

    try {
        const savedEvaluation = await newEvaluation.save(); // Lưu đánh giá vào cơ sở dữ liệu
        res.status(201).json(savedEvaluation);
    } catch (error) {
        res.status(500).json({ message: 'Không thể tạo đánh giá hiệu suất', error });
    }
};

// Lấy danh sách đánh giá hiệu suất
export const getPerformanceEvaluations = async (req: Request, res: Response) => {
    try {
        const evaluations = await Performance.find(); // Giả sử bạn sử dụng Mongoose để tìm kiếm
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy danh sách đánh giá hiệu suất', error });
    }
};
