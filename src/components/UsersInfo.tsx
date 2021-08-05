import styled from "styled-components";
import { IUser } from "../types";
import BarChart from "./BarChart";
import User from "./User";
import { Fade } from "react-awesome-reveal";

const UserInfoWrapper = styled.div`
  width: 80%;
`;

const UsersInfo = ({ users }: { users: IUser[] }) => {
  return (
    <UserInfoWrapper>
      {users.length > 0 ? (
        <>
          <Fade cascade damping={0.1} triggerOnce>
            {users.map((user) => {
              return <User key={user.id} userInfo={user} />;
            })}
          </Fade>
          <Fade triggerOnce>
            <BarChart users={users} />
          </Fade>
        </>
      ) : null}
    </UserInfoWrapper>
  );
};

export default UsersInfo;
