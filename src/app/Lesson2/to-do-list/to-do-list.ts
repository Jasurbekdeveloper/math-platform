import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  template: `
    <h1>To-Do List</h1>
    <p>This is the To-Do List component.</p>
    <div>
      <input type="text" placeholder="task qo'shish" [(ngModel)]="task" />
      <button (click)="addTask()">Qo'shish</button>
      <select [(ngModel)]="taskStatus" (change)="filterTasks()">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
     
    </div>

    <div>
        <table>
          <thead>
            <tr>
              <th>T/r</th>
              <th>Task nomi</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (task of tasks; track task.id; let i = $index) {
              <tr>
                <td>{{ i + 1 }}</td>
                <td>{{ task.name }}</td>
                <td [style.color]="task.taskStatus === 'completed' ? 'green' : 'blue'">{{ task.taskStatus }}</td>
                <td><button (click)="changeTaskStatus(task.id)">O'zgartirish</button></td>
              </tr>
            }@empty {
                <p>Not found students</p>
            }
          </tbody>
    </table>
    </div>
  `,
  // templateUrl: './to-do-list.html',
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

