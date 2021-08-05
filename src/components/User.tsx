import styled from "styled-components";
import { IUser } from "../types";

const UserWrapper = styled.div`
  display: flex;
  height: 5rem;
  padding: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(39, 116, 174, 1) 0%,
    rgba(0, 46, 93, 1) 35%,
    rgba(0, 46, 93, 1) 100%
  );
  margin: 0.5rem 0;
  border-radius: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-left: 1rem;
  border-radius: 0.5rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

const P = styled.p`
  color: #fff;
  font-family: "Karla", sans-serif;
`;

const InfoButton = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.1s ease-in;
  font-family: "Karla", sans-serif;

  &:hover {
    color: #7777778a;
  }
`;

const User = ({ userInfo }: { userInfo: IUser }) => {
  const { id, login, avatar_url, followers, following } = userInfo;

  return (
    <UserWrapper>
      <Image src={avatar_url} alt={`${login}_img`} />
      <Column>
        <P>
          {login} - {id}
        </P>
        <P></P>
        <P>Followers: {followers}</P>
        <P>Following: {following}</P>
      </Column>
      <Column>
        {/* //TODO agregar funcionalidad */}
        <InfoButton href={`https://github.com/${login}`} target="_blank  ">
          Visit Profile
        </InfoButton>
      </Column>
    </UserWrapper>
  );
};

export default User;
