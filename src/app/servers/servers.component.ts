import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  // can be done in either ways
  // templateUrl: './servers.component.html',
  template: "<app-server></app-server><app-server></app-server>",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
