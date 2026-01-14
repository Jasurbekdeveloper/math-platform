import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-crud',
  imports: [],
  // templateUrl: './student-crud.html',
  // styleUrl: './student-crud.css',
  template: `
   <div style="border:1px solid #ccc; padding:10px; margin-bottom:5px display:flex; justify-content:space-between; align-items:center;">
      <p>{{ student.name }} ({{ student.score }} ball) - Grade: {{ student.grade }}</p>
      <button (click)="delete()">Delete</button>
    </div>
  `
})
export class StudentCRUD {
  @Input() student!: Student;
  @Output() deleteStudent = new EventEmitter<number>();

  delete() {
    this.deleteStudent.emit(this.student.id);
  }
}
