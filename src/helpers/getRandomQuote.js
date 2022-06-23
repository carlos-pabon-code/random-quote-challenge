export const getRandomQuote = async () => {
  const api = "https://api.quotable.io";
  try {
    const request = await fetch(`${api}/random`);
    const quote = await request.json();
    return quote;
  } catch (error) {
    console.error(error);
  }
};
