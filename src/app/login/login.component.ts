import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  response = "";
  constructor(private apiService: ApiService, private router: Router) { }
  @Input() username: string;
  onSelect() {
    this.response = this.apiService.login(this.username);
    this.router.navigate([this.response])
    console.log(this.response);
  }
  ngOnInit(): void {
  }

}
