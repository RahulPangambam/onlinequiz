import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Scorecard } from 'src/app/common/scorecard';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  student : User = new User(0,"","","","","",0)
  scoreCards : Scorecard[]
  constructor(private activeRouter : ActivatedRoute, private service : OnlineQuizService) { }

  ngOnInit(): void {
    this.getScoreCardById();
  }
  getScoreCardById(){
    const studentId = this.activeRouter.snapshot.paramMap.get("userId");
    this.service.getScoreCardByUserId(studentId).subscribe(data=>{
      this.scoreCards = data
    });
  }
  getStudentName(studentId : number){
    this.service.getStudentById(studentId).subscribe(data=>{
      this.student=data;
    });
  }

}
