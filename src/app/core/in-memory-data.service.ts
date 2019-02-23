import { User } from "./models/user.model";

export class InMemoryDataService {
  createDb(): { users: User[] } {
    const users = [
      { id: 1, name: "Jesse Sanders", role: "Admin" },
      { id: 2, name: "Steve Witman", role: "Standard" },
      { id: 3, name: "Brian Love", role: "Standard" }
    ];

    return { users };
  }
}
