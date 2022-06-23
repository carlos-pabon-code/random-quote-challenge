export const getAuthorQuotes = async (selectedAuthor) => {
  const api = "https://api.quotable.io";
  try {
    const request = await fetch(
      `${api}/search/quotes?query=${selectedAuthor}&fields=author&limit=5`
    );
    const data = await request.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
