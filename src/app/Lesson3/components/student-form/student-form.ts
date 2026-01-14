import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  template: `
    <h3>Add Student</h3>

    <input placeholder="Name" [(ngModel)]="name" />
    <input type="number" placeholder="Score" [(ngModel)]="score" />
    <button (click)="submit()">Add</button>
  `,
  styleUrl: './student-form.css',
})
export class StudentForm {
  name = '';
  score!: number;

  @Output() addStudent = new EventEmitter<Student>();

  submit() {
    if (!this.name || !this.score) return;

    const newStudent: Student = {
      id: Date.now(),
      name: this.name,
      score: this.score,
      grade: this.score >= 90 ? 'A' : this.score >= 80 ? 'B' : this.score >= 70 ? 'C' : 'D',
    };

    this.addStudent.emit(newStudent);

    this.name = '';
    this.score = 0;
  }
}
