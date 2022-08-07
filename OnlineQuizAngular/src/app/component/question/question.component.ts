import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { Question } from 'src/app/common/question';
import { User } from 'src/app/common/user';
import { Scorecard } from 'src/app/common/scorecard';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  scoreCard : Scorecard;
  questionsAttempted : number = 0;
  marksScored : number = 0;
  correctAnswers : number = 0;
  questions : Question[]
  submitted : boolean = false;
  constructor(private route : Router, private service : OnlineQuizService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions(){
    const quizId = this.activeRoute.snapshot.paramMap.get("quizId");
    this.service.getQuestionsForQuiz(quizId).subscribe(data=>{
      this.questions = data;
      this.questions.forEach((question)=>{
        question['givenAnswer'] = '';
      });
      console.log(this.questions);
    });
  }
  submitQuiz(){
    this.submitted = true;
    const quizId = this.activeRoute.snapshot.paramMap.get("quizId");
    const userId = this.activeRoute.snapshot.paramMap.get("userId");
    this.questions.forEach((q)=>{
      if(q.givenAnswer == q.answer){
        this.correctAnswers++;
        let marks = 100/this.questions.length
        this.marksScored += marks;

      }
      if(q.givenAnswer!=''){
        this.questionsAttempted++;
      }
    });
    this.scoreCard = new Scorecard(0,quizId,userId,this.marksScored);
    console.log(this.scoreCard)
    this.service.saveScore(this.scoreCard).subscribe(data=>{
      alert("Scores saved");
    })

  }
}
