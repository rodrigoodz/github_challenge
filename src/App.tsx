import { useState } from "react";
import { IUser } from "./types";

import SearchInput from "./components/SearchInput";
import styled from "styled-components";
import Title from "./components/Title";
import UsersInfo from "./components/UsersInfo";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(83, 105, 118, 1) 0%,
    rgba(41, 46, 73, 1) 100%
  );
`;

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <Wrapper className="App">
      <Title text="Github Users List" />
      <SearchInput onUsersChange={(newUsers: IUser[]) => setUsers(newUsers)} />
      <UsersInfo users={users} />
    </Wrapper>
  );
};

export default App;
