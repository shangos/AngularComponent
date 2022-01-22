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
  constructor() {

    this.serverId = "10";
    this.serverStatus = "Online";
    this.allowBtn = false;

    setTimeout(() => {
      this.allowBtn = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() : void{
    this.serverStatus = "Server is created";
  }

}
