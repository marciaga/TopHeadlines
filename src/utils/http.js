export const get = async (url, opts = {}) => {
  try {
    const response = await fetch(url, opts);

    if (!response.ok) {
      throw new Error('Something went wrong fetching data.');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    // TODO - handle
  }
};
