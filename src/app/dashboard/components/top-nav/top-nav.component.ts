import { Component, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
  role: string = "Standard";
  @Output()
  roleChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onRoleChange() {
    this.roleChange.emit(this.role);
  }
}
