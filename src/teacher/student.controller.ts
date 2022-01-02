import { Body, Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
    @Get()
    getStudentsByTeacherId(
        @Param('teacherId') teacherId: string
    ){
        return `Get students from the teacher with ${teacherId}`
    }

    @Put('/:studentId')
    updateTeacherStudents(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
    ){
        return `Update Student with ${studentId} of teacher with ${teacherId}`
    }
}