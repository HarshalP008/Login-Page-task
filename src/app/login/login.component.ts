import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myLoginForm: FormGroup | any;
  empDetails: any;

  constructor(private fbLogin: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myLoginForm = this.fbLogin.group({
      userName: this.fbLogin.control('', [Validators.required, Validators.minLength(5)]),
      password: this.fbLogin.control('', [Validators.required, Validators.minLength(5)]),
    })
  }
  submit() {
    let loggedInUser = this.myLoginForm.value;
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    this.empDetails= JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    console.log(this.empDetails.password,this.empDetails);
    if (this.empDetails.userName === 'admin' && this.empDetails.password === "admin") {
      this.router.navigate(['home'])
      } else {
        alert('wrong Username or password');
      }
    }
  }
