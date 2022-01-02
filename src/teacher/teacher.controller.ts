import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController{
    @Get()
    getTeachers(){
        return "Get teachers"
    }

    @Get('/:teacherId')
    getTeacher(
        @Param('teacherId') teacherId: string
    ){
        return `Get teacher with ${teacherId}`
    }
}