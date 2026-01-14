import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task: string = '';
  allTasks: Task[] = [
    { id: 1, name: 'Darsga tayyorlanish', taskStatus: 'completed' },
    { id: 2, name: 'Vazifalarni bajarish', taskStatus: 'pending' },
    { id: 3, name: 'Kitob o\'qish', taskStatus: 'pending' },
  ];

  taskStatus: TaskStatus = 'pending';
  tasks: Task[] = [...this.allTasks];

  addTask() {
   if (this.task.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name: this.task,
        taskStatus: 'pending',
      };

      this.allTasks.push(newTask);
      this.tasks = [...this.allTasks];
      this.task = '';
    }
  }
  filterTasks() {
    console.log(this.taskStatus);

    if (this.taskStatus === 'all') {
      this.tasks = [...this.allTasks];
    } else {
      this.tasks = this.allTasks.filter(
        t => t.taskStatus === this.taskStatus
      );
    }
  }
  
  changeTaskStatus(taskId: number) {
    const task = this.allTasks.find(t => t.id === taskId);
    if (task) {
      task.taskStatus = task.taskStatus === 'pending' ? 'completed' : 'pending';
    }
    this.tasks = [...this.allTasks];
  }
}
interface Task {
  id : number;
  name: string;
  taskStatus: TaskStatus;
}
type TaskStatus = 'completed' | 'pending' | 'all';

