const getFollows = async (url: string) => {
  try {
    const resp = await fetch(url);
    const { following, followers } = await resp.json();

    return { following, followers };
  } catch (error) {
    return error;
  }
};

export default getFollows;
