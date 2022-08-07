import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineQuizService } from 'src/app/service/online-quiz.service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User(0,"","","","","", 0)
  newUser : User = new User(0,"","","","","", 201);
  userName : string;
  password : string;
  constructor(private route : Router, private service : OnlineQuizService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.getUserByUserName(this.userName).subscribe(data=>{
      this.user = data;
      if(this.user.userName == this.userName && this.user.password == this.password){
        if(this.user.roleId == 201){
          this.route.navigateByUrl("/studentHome/"+this.user.id);  
        }else{
          this.route.navigateByUrl("/adminHome");
        }
      }else{
        alert("Check your credentials");
      }
    });
  }
  onRegSubmit(){
    console.log(this.newUser)
    this.service.saveUser(this.newUser).subscribe(data =>{
      alert("Sign up successful");
    });
  }
}
