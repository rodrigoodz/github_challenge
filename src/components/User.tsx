import { IUser } from "../types";

const User = ({ userInfo }: { userInfo: IUser }) => {
  const { id, login, avatar_url, followers, following } = userInfo;
  return (
    <div style={{ border: "1px solid red" }}>
      <img style={{ width: "50px" }} src={avatar_url} alt={`${login}_img`} />
      <p>{id}</p>
      <p>{login}</p>
      <p>{followers}</p>
      <p>{following}</p>
    </div>
  );
};

export default User;
