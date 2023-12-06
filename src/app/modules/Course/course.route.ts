import express from 'express';
import { CourseController } from './course.controller';
import validateRequest from '../../middlewares/validationRequest';
import { courseValidation } from './course.validation';

const router = express.Router();
router.post('/create-course',validateRequest(courseValidation.createCourseValidationSchema),CourseController.createCourse)
router.get('/:id', CourseController.getSingleCourse);

// router.patch(
//   '/:id',
//   validateRequest(updateFacultyValidationSchema),
//   CourseController.updateFaculty,
// );

router.delete('/:id', CourseController.deleteCourse);

router.get('/', CourseController.getAllCourses);

export const CourseRoutes = router;
