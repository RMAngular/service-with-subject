import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {
  role: string = "Standard";
  @Output() roleChange = new EventEmitter<string>();

  onRoleChange() {
    this.roleChange.emit(this.role);
  }
}
