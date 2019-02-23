import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { User } from "../../../core/models/user.model";

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PermissionsComponent {
  @Input() users: User[];

  @Output() userClick = new EventEmitter<User>();

  onUserClick(user: User) {
    this.userClick.emit(user);
  }
}
