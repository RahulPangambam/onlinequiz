import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudenthomeComponent } from './component/studenthome/studenthome.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { GradebookComponent } from './component/gradebook/gradebook.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { CategoryComponent } from './component/category/category.component';
import { QuestionComponent } from './component/question/question.component';
import { QuizListComponent } from './component/quiz-list/quiz-list.component';

const route : Routes = [
  {path : '', component : WelcomeComponent},
  {path : "login", component : LoginComponent},
  {path: "studentHome/:userId", component : StudenthomeComponent},
  {path : "adminHome", component : AdminhomeComponent},
  {path : "gradeBook/:userId", component : GradebookComponent},
  {path : "quiz/:userId", component : QuizComponent},
  {path : "category/:mainCategory/:userId", component : CategoryComponent},
  {path : "quizzes/:categoryId/:userId", component : QuizListComponent},
  {path : "question/:quizId/:userId", component : QuestionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    StudenthomeComponent,
    AdminhomeComponent,
    GradebookComponent,
    QuizComponent,
    CategoryComponent,
    QuizListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
