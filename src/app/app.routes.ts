import { Routes } from '@angular/router';
import { Mundarija } from './Lesson1/Mundarija/Mundarija';
import { IncrementButton } from './Lesson1/increment_button/my-button';
import { StudentList } from './Lesson2/student-list/student-list';
import { MathOperations } from './Lesson1/math-operations/math-operations';
import { LoginPage } from './Lesson2/login-page/login-page';
import { ToDoList } from './Lesson2/to-do-list/to-do-list';
import { StudentList as StudentNewList } from './Lesson3/components/student-list/student-list';

export const routes: Routes = [
    { path: '', component: Mundarija },
    { path: 'counter', component: IncrementButton },
    { path: 'calculator', component: MathOperations },
    { path: 'login', component: LoginPage },
    { path: 'student-list', component: StudentList },
    { path: 'to-do-list', component: ToDoList},
    { path: 'student-new-list', component: StudentNewList },
];
