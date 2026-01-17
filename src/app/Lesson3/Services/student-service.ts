import { Injectable } from '@angular/core';
import { Student } from '../Model/Student';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Ali Valiyev', score: 95, subject: 'Matematika' },
    { id: 2, name: 'Gulnora Karimova', score: 87, subject: 'Fizika' },
    { id: 3, name: 'Sardor Rahimov', score: 78, subject: 'Matematika' },

  ];

  // Barcha talabalarni olish
  getAllStudents(): Student[] {
    return this.students;
  }

  // ID bo'yicha talaba topish
  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  // Yangi talaba qo'shish
  addStudent(student: Student): void {
    alert('student added');
    this.students.push(student);
  }

  // Talabani yangilash
  updateStudent(id: number, updatedStudent: Student): void {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
  }
  
  getStudentsBySubject(subject: string): Student[] {
    return this.students.filter(s => s.subject === subject);
  }

  getStudentsByScore(score: number): Student[] {
    return this.students.filter(s => s.score === score);
  }

  // O'rtacha ballni hisoblash
  getAverageScore(): number {
    if (this.students.length === 0) return 0;
    const total = this.students.reduce((sum, s) => sum + s.score, 0);
    return total / this.students.length;
  }

  // Eng yaxshi talaba
  getTopStudent(): Student | undefined {
    if (this.students.length === 0) return undefined;
    return this.students.reduce((top, current) =>
      current.score > top.score ? current : top
    );
  }
}
