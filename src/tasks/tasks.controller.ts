import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Task } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/')
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post('/')
  createTask(@Body() body: { name: string; description: string }): Task {
    return this.tasksService.createTask(body);
  }

  @Put('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() body: { name: string; description: string; isCompleted: boolean },
  ): Task {
    return this.tasksService.updateTask(Number(id), body);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Task {
    return this.tasksService.deleteTask(Number(id));
  }
}
