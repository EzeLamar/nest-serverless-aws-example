import { Injectable, NotFoundException } from '@nestjs/common';

export type Task = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
};

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: 1,
      name: 'Draft documentation',
      description: 'Create the initial draft for the project README.',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Implement /tasks API',
      description: 'Expose a REST endpoint that returns all tasks.',
      isCompleted: true,
    },
    {
      id: 3,
      name: 'Write unit tests',
      description: 'Add coverage for the tasks service and controller.',
      isCompleted: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(body: { name: string; description: string }): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      name: body.name,
      description: body.description,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(
    id: number,
    body: { name: string; description: string; isCompleted: boolean },
  ): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    task.name = body.name;
    task.description = body.description;
    task.isCompleted = body.isCompleted;
    return task;
  }

  deleteTask(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    this.tasks.splice(this.tasks.indexOf(task), 1);
    return task;
  }
}
