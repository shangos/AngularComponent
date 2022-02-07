import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId:String;
  serverStatus:String;
  allowBtn:Boolean;
  serverCreated:Boolean;
  inputText:String;

  constructor() {

    this.serverId = "10";
    this.serverStatus = "Online";
    this.allowBtn = false;
    this.serverCreated = false;

    setTimeout(() => {
      this.allowBtn = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() : void{
    this.serverCreated = true;
    this.serverStatus = "Server is created";
  }

  onChangeText(event : Event){
    this.inputText = (<HTMLInputElement>event.target).value;
    console.log(this.inputText);
  }

}
