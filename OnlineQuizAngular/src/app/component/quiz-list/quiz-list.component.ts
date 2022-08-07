import { Component, OnInit } from '@angular/core';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes : Quiz[]
  constructor(private service : OnlineQuizService, private activeRoute : ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.getQuizzes()
  }
  getQuizzes(){
    const categoryId = this.activeRoute.snapshot.paramMap.get("categoryId");
    console.log(categoryId);
    this.service.getQuizzesByCategory(categoryId).subscribe(data=>{
      this.quizzes = data;
      console.log(this.quizzes)
    });
  }
  goToQuestions(quizId : number){
    const userId = this.activeRoute.snapshot.paramMap.get("userId");
    console.log(userId);
    this.route.navigateByUrl("/question/"+quizId+"/"+userId);
  }
}
