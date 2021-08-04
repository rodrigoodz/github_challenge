import { useState } from "react";
import { IUser } from "./types";

import BarChart from "./components/BarChart";
import SearchInput from "./components/SearchInput";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <SearchInput onUsersChange={(newUsers: IUser[]) => setUsers(newUsers)} />
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return <User key={user.id} userInfo={user} />;
          })}
          <BarChart users={users} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
