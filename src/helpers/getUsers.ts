import getFollows from "./getFollows";

const getUsers = async (username: string) => {
  try {
    const resp = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const { items } = await resp.json();

    const listOfUsers = await Promise.all(
      items.slice(0, 10).map(async (item: any) => {
        const { following, followers } = await getFollows(
          `https://api.github.com/users/${item.login}`
        );

        return {
          id: item.id,
          login: item.login,
          avatar_url: item.avatar_url,
          followers,
          following,
        };
      })
    );
    return listOfUsers;
  } catch (error) {
    return error;
  }
};

export default getUsers;
