import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../Model/Student';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  @Input() student!: Student;

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Student>();

  expanded: boolean = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
