import { Component, OnInit } from '@angular/core';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service : OnlineQuizService, private route : Router, private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToAptitudeQuiz(){
    const mainCatgeory = "Aptitude";
    const userId = this.activeRouter.snapshot.paramMap.get("userId");
    this.route.navigateByUrl("/category/"+mainCatgeory+"/"+userId);
  }
  goToTechnicalQuiz(){
    const mainCatgeory = "Technical";
    const userId = this.activeRouter.snapshot.paramMap.get("userId");
    this.route.navigateByUrl("/category/"+mainCatgeory+"/"+userId);
  }
}
