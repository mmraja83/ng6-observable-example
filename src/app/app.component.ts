import { Component, OnInit } from '@angular/core';
import { helloService } from './hello.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [helloService]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  user:string;

  constructor(
    private helloservice: helloService) { }

  ngOnInit() {
    this.getData();
  }

 
  getData(){
    // Calling the service method using Subscribe 
    // so it will update this.user variable when the response is available from http request. 
    this.helloservice.getData().subscribe((response : any) => {
      // Assigning response to user varaible 
      // So you can display it in the html page. 
      this.user = JSON.stringify(response);
      console.log(this.user);
    }, error => {
      console.log(error);
    });
  }

}
