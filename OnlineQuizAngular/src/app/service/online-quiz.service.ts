import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../common/user';
import {Observable, map} from 'rxjs';
import { Quiz } from '../common/quiz';
import { Question } from '../common/question';
import { Category } from '../common/category';
import { Scorecard } from '../common/scorecard';

@Injectable({
  providedIn: 'root'
})
export class OnlineQuizService {

  private userUrl = "http://localhost:8080/api/user";
  private categoryUrl = "http://localhost:8080/api/category";
  private scoreCardUrl = "http://localhost:8080/api/scorecard";
  constructor(private httpClient : HttpClient) { }

  saveUser(user : User) : Observable<User>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content_type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<User>(this.userUrl, user, httpOptions);
  }
  getStudentById(userId : number) : Observable<User>{
    const userIdUrl = "http://localhost:8080/api/user/"+userId;
    return this.httpClient.get<User>(userIdUrl);
  }
  getScoreCardByUserId(userId : string) : Observable<Scorecard[]>{
    const userIdUrl = "http://localhost:8080/api/scorecard/search/findByUserId?userId="+userId;
    return this.httpClient.get<getScorecardResponse>(userIdUrl).pipe(map(response => response._embedded.scoreCards));
  }
  getUserByUserName(userName : string) : Observable<User>{
    const userNameUrl = "http://localhost:8080/api/user/search/findByUserName?userName="+userName;
    return this.httpClient.get<User>(userNameUrl);
  }
  getCategoriesAccordingly(mainCategory : string) : Observable<Category[]>{
    const catUrl = "http://localhost:8080/api/category/search/findByMainCategory?mainCategory="+mainCategory;
    return this.httpClient.get<getCategoryResponse>(catUrl).pipe(map(response => response._embedded.categories));
  }
  getQuizzesByCategory(categoryId : string) : Observable<Quiz[]>{
    const quizzesUrl = "http://localhost:8080/api/quiz/search/findByCategoryId?categoryId="+categoryId;
    return this.httpClient.get<getQuizResponse>(quizzesUrl).pipe(map(response => response._embedded.quizzes));
  }
  getQuestionsForQuiz(quizId : string) : Observable<Question[]>{
    const questionsUrl = "http://localhost:8080/api/question/search/findByQuizId?quizId="+quizId;
    return this.httpClient.get<getQuestionResponse>(questionsUrl).pipe(map(response => response._embedded.questions));
  }
  saveScore(scorecard : Scorecard) : Observable<Scorecard>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content_type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpClient.post<Scorecard>(this.scoreCardUrl, scorecard, httpOptions);
  }
}
interface getQuizResponse{
  _embedded : {
    quizzes : Quiz[]
  }
}
interface getQuestionResponse{
  _embedded : {
    questions : Question[]
  }
}
interface getCategoryResponse{
  _embedded : {
    categories : Category[]
  }
}
interface getScorecardResponse{
  _embedded : {
    scoreCards : Scorecard[]
  }
}
