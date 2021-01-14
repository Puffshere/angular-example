import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";
  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }
  public login(username) {
    let rolemap = { admin: "./dashboard", mentor: "./mentor", mentee: "./mentee" };
    console.log(`in api service:  ${username}`);
    return rolemap[username] ? rolemap[username] : "./login";
  }
}
