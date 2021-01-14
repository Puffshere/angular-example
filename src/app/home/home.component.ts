import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  response = "";
  constructor(private apiService: ApiService) { }
  @Input() username: string;
  onSelect() {
    this.response = this.apiService.login(this.username);
    if (this.response == "worked") {

    }
    console.log(this.response);
  }
  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    })
  }
}
