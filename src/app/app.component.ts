import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  private hubspotURL = 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all';
  private clientId= 'e56c8b91-bd8f-4b5e-bde6-866415044b84';
  private httpOptions;
  constructor(private http: HttpClient){
    this.httpOptions = {
      headers: new HttpHeaders(
          {
              // 'Access-Control-Allow-Origin': '*',
              // "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-Trigger': 'CORS'
          }
      )
  }

  }

  ngOnInit(){
    this.http.get(`${this.hubspotURL}?count=100&hapikey=${this.clientId}&offset=0`)
    .subscribe((data) => {
      console.log(data);
    })
  }

}
