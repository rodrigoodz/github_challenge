import { useState } from "react";
import SearchInput from "./components/SearchInput";
import User from "./components/User";
import { IUser } from "./types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <SearchInput onUsersChange={(newUsers: IUser[]) => setUsers(newUsers)} />
      {users.length > 0
        ? users.map((user) => {
            return <User key={user.id} userInfo={user} />;
          })
        : null}
    </div>
  );
};

export default App;
