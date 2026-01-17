import { Component, OnInit } from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentForm } from '../student-form/student-form';
import { Student } from '../../Model/Student';
import { StudentService } from '../../Services/student-service';

@Component({
  selector: 'app-student-new-list',
  standalone: true,
  imports: [StudentCard, FormsModule, StudentForm, CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: Student[] = [];
  allStudents: Student[] = [];
  selectedStudent: Student | undefined;
  score: number | null = null;
  subject: string = '';
  studentScores: number[] = [];
  studentSubjects: string[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.allStudents = this.studentService.getAllStudents();
    this.students = [...this.allStudents];
    this.studentScores = [...new Set(this.allStudents.map(s => s.score))].sort((a, b) => b - a);
    this.studentSubjects = [...new Set(this.allStudents.map(s => s.subject))].sort();
    this.resetFilters();
  }

  filterStudents() {
    this.students = this.allStudents;

    if (this.score) {
      console.log(this.students);
      this.students = this.studentService.getStudentsByScore(this.score);
    }

    if (this.subject) {
         this.students = this.studentService.getStudentsBySubject(this.subject);
    }
  }

  resetFilters() {
    this.score = null;
    this.subject = '';
    this.students = [...this.allStudents];
  }

  getAverageScore(): string {
    if (this.allStudents.length === 0) return '0';
    const total = this.allStudents.reduce((sum, s) => sum + s.score, 0);
    return (total / this.allStudents.length).toFixed(1);
  }

  getTopStudent(): string {
    if (this.allStudents.length === 0) return 'N/A';
    const top = this.allStudents.reduce((max, current) =>
      current.score > max.score ? current : max
    );
    return top.name;
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id);
    this.load();
  }

  onEdit(student: Student) {
    this.selectedStudent = student;
  }

  onSaveEdit(student: Student) {
    if (student.id) {
      this.studentService.updateStudent(student.id, student);
    } else {
      // Yangi talaba qo'shish
      student.id = Date.now();
      this.studentService.addStudent(student);
    }
    this.selectedStudent = undefined;
    this.load();
  }
}
