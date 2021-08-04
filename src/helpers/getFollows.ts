const getFollows = async (url: string) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.length;
  } catch (error) {
    return error;
  }
};

export default getFollows;
