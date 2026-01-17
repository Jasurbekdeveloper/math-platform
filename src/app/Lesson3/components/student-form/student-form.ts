import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../Model/Student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnChanges {
  @Input() student?: Student;
  @Output() save = new EventEmitter<Student>();

  model: Student = this.initializeModel();
  validationError: string = '';

  private initializeModel(): Student {
    return { id: 0, name: '', subject: '', score: 0 };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['student']) {
      if (this.student) {
        this.model = { ...this.student };
      } else {
        this.resetForm();
      }
      this.validationError = '';
    }
  }

  resetForm() {
    this.model = this.initializeModel();
    this.validationError = '';
  }

  submit() {
    this.validationError = '';

    if (!this.model.name || this.model.name.trim().length === 0) {
      this.validationError = 'Ism maydon bo\'sh bo\'lishi mumkin emas';
      return;
    }

    if (!this.model.subject || this.model.subject.trim().length === 0) {
      this.validationError = 'Fan maydon bo\'sh bo\'lishi mumkin emas';
      return;
    }

    if (this.model.score < 0 || this.model.score > 100) {
      this.validationError = 'Baho 0 va 100 orasida bo\'lishi kerak';
      return;
    }

    this.save.emit(this.model);
    this.resetForm();
  }
}
