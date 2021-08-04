import styled from "styled-components";
import { IUser } from "../types";
import BarChart from "./BarChart";
import User from "./User";

const UserInfoWrapper = styled.div`
  width: 80%;
`;

const UsersInfo = ({ users }: { users: IUser[] }) => {
  return (
    <UserInfoWrapper>
      {users.length > 0 ? (
        <>
          {users.map((user) => {
            return <User key={user.id} userInfo={user} />;
          })}
          <BarChart users={users} />
        </>
      ) : null}
    </UserInfoWrapper>
  );
};

export default UsersInfo;
