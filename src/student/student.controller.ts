import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common"

@Controller('students')
export class StudentController {

    @Get()
    getStudents(){
        return "All students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ){
        return `Get student with ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body
    ){
        console.log(body)
        return `Create student with the following data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ){
        return `Update student with Id of ${studentId} with the data of ${JSON.stringify(body)}`
    }
}