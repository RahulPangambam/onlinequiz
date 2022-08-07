import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private route : Router, private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToGradeBook(){
    const userId = this.activeRouter.snapshot.paramMap.get("userId");
    this.route.navigateByUrl("/gradeBook/"+userId);
  }
  goToQuiz(){
    const userId = this.activeRouter.snapshot.paramMap.get("userId");
    console.log(userId);
    this.route.navigateByUrl("/quiz/"+userId);
  }
}
