import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  lgForm:logU = new logU()
  // email:any="";
  // password:any="";
  constructor(private router:Router){

  }
name:string="";
  login(form:any){
    // console.log("form value",form.value)

    if(form.value.email == "sonawanegs95@gmail.com" && form.value.password == "Gaurav123"){
    
      this.router.navigate(['welcome']);
      console.log(form.value)
      this.name="Gaurav";
    }else{
      this.router.navigate(['login']);
      alert("Invalid Credentials");
    }
  }
  }

export class logU{
  email!:string;
  password!:string
}
