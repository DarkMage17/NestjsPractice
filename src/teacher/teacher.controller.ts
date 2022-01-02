import { Controller, Get, Param, Put } from "@nestjs/common";
import { FindTeacherResponseDto } from "./dto/teacher.dto";

@Controller('teachers')
export class TeacherController{
    @Get()
    getTeachers(): FindTeacherResponseDto[]{
        return "Get teachers"
    }

    @Get('/:teacherId')
    getTeacher(
        @Param('teacherId') teacherId: string
    ): FindTeacherResponseDto{
        return `Get teacher with ${teacherId}`
    }
}