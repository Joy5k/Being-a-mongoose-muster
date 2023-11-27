import { NextFunction, Request, Response } from 'express';
// import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const academicSemester = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
    //   const { password, student: StudentData } = req.body;
  
    //   const result = await UserService.createStudentInToDB(password, StudentData);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student created successfully',
        data:"",
      });
    } catch (error) {
      next(error);
    }
  };
  export const AcademicController = {
    academicSemester,
  };
  