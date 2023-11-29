import { Router } from "express";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.route";
import { StudentRoutes } from "../modules/students/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";


const router=Router()
const moduleRoute = [
    {
        path: "/users",
        route:UserRoutes
    },
    {
        path: "/students",
        route:StudentRoutes
    },
    {
        path: "/academic-semesters",
        route:AcademicSemesterRoute
    },
    {
        path: "/academic-faculty",
        route:AcademicFacultyRoutes
    }
]
moduleRoute.forEach((route) => router.use(route.path, route.route))
export default router