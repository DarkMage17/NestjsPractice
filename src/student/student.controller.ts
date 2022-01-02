import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common"
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto"

@Controller('students')
export class StudentController {

    @Get()
    getStudents(): FindStudentResponseDto[]{
        return "All students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ): FindStudentResponseDto{
        return `Get student with ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto{
        console.log(body)
        return `Create student with the following data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto{
        return `Update student with Id of ${studentId} with the data of ${JSON.stringify(body)}`
    }
}