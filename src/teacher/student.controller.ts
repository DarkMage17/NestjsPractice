import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController{
    @Get()
    getStudentsByTeacherId(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDto[]{
        return `Get students from the teacher with ${teacherId}`
    }

    @Put('/:studentId')
    updateTeacherStudents(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
    ): StudentResponseDto{
        return `Update Student with ${studentId} of teacher with ${teacherId}`
    }
}