import express from 'express';
import { StudentController } from './student.controler';
const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);
router.patch('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteSingleStudent);

export const StudentRoutes = router;
