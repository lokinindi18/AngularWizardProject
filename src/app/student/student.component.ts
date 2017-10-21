import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student-service';

@Component( {
    selector: 'student-list',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
} )

export class StudentComponent implements OnInit {
    students: Student[];
    selectedStudent: Student;
    constructor(private studentService : StudentService) { }

    ngOnInit() {
       this.studentService.getStudentsList().subscribe(responseData => this.students = responseData);
    }
    
    onStudentSelected(student: Student){
        this.selectedStudent = student;
    }

}
