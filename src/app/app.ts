import { Component, signal } from '@angular/core';
import { IncrementButton } from './Lesson1/increment_button/my-button';
import { MathOperations } from './Lesson1/math-operations/math-operations';
import { StudentList } from './Lesson2/student-list/student-list';
import { LoginPage } from './Lesson2/login-page/login-page';
import { ToDoList } from './Lesson2/to-do-list/to-do-list';
import { StudentList as StudentNewList } from './Lesson3/components/student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [IncrementButton, MathOperations,StudentList,LoginPage,ToDoList,StudentNewList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('math-platform');
}
