import { Component, Output, EventEmitter } from '@angular/core';
import { StudentCRUD } from '../student-crud/student-crud';
import { FormsModule } from '@angular/forms';
import { StudentForm } from '../student-form/student-form';

@Component({
  selector: 'app-student-new-list',
  imports: [StudentCRUD, FormsModule, StudentForm],
  // templateUrl: './student-list.html',
  // styleUrl: './student-list.css',
  template: `
    <h2>Student List</h2>

    <!-- FORM -->
    <app-student-form (addStudent)="onAddStudent($event)"></app-student-form>

    <hr />

    <!-- LIST -->
      @for (student of students; track student.id) {
        <app-student-crud
          [student]="student"
          (deleteStudent)="onDeleteStudent($event)">
      </app-student-crud>
    } @empty {
      <h4>Studentlar mavjud emas</h4>
}
  `
})
export class StudentList {
   students: Student[] = [
    { id: 1, name: 'Ali', score: 85, grade: 'A' },
    { id: 2, name: 'Vali', score: 78, grade: 'B' },
  ];

  onAddStudent(student: Student) {
    this.students.push(student);
  }

   onDeleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
}
