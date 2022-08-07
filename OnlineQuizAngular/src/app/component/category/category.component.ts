import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { Category } from 'src/app/common/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[];
  constructor(private activeRoute: ActivatedRoute, private service : OnlineQuizService, private route : Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    const mainCategory = this.activeRoute.snapshot.paramMap.get("mainCategory");
    this.service.getCategoriesAccordingly(mainCategory).subscribe(data=>{
      this.categories=data;
    });
  }
  // goToQuestions(quizId : number){
  //   this.route.navigateByUrl("/questions/"+quizId);
  // }
  goToQuiz(categoryId : number){
    const userId = this.activeRoute.snapshot.paramMap.get("userId")
    this.route.navigateByUrl("/quizzes/"+categoryId+"/"+userId);
  }

}
