import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import LoaderContext from "../context/LoaderContext";
import QuoteContext from "../context/QuoteContext";
import RandomQuoteContext from "../context/RandomQuoteContext";
import { Loader } from "./Loader";

const QuoteContainer = styled.section`
  margin: 0 auto;
  width: 600px;
`;
const QuoteSection = styled.section`
  padding: 0 0 0 5rem;
  border-left: solid 8px var(--yellow);
  line-height: 42.3px;
  ${({ module }) =>
    module === "quotes" &&
    css`
      margin: 5rem 0 10rem 0;
    `}
`;
const InitialMessage = styled.section`
  margin: 0 auto;
  text-align: center;
  font-family: var(--paragraph);
  font-size: 20px;
  margin-bottom: 4rem;
  color: var(--gray);
`;
const QuoteText = styled.blockquote`
  font-family: var(--paragraph);
  color: var(--black);
  font-weight: 500;
  font-size: 36px;
`;

const api = "https://api.quotable.io";

export const Quote = ({ module, selectedAuthor }) => {
  // useContext to control when the users clicks the random button
  const { randomQuote, setRandomQuote } = useContext(RandomQuoteContext);
  // useContext to show or hide a loader while a quote is searched.
  const { loader, setLoader } = useContext(LoaderContext);
  // useContext to save the random quote
  const { quote, setQuote } = useContext(QuoteContext);
  // useState to save the quotes of an specific author
  const [authorsQuote, setAuthorsQuote] = useState([]);

  const getRandomQuote = async () => {
    try {
      setLoader(true);
      const request = await fetch(`${api}/random`);
      const quote = await request.json();
      setQuote({
        content: quote.content,
        author: quote.author,
        genre: quote.tags[0],
      });
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAuthorQuotes = async (selectedAuthor) => {
    try {
      const request = await fetch(
        `${api}/search/quotes?query=${selectedAuthor}&fields=author&limit=5`
      );
      const data = await request.json();
      setAuthorsQuote(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (randomQuote && module === "home") {
      getRandomQuote();
    } else {
      getAuthorQuotes(selectedAuthor);
    }
    return () => {
      setRandomQuote(false);
    };
  }, [randomQuote]);

  return (
    <>
      {module === "home" ? (
        <QuoteContainer>
          {loader && (
            <Loader>
              <div className="lds-dual-ring"></div>Searching new quote...
            </Loader>
          )}
          {quote.content === "" && (
            <InitialMessage>
              Click the "random" button to search an awesome quote
            </InitialMessage>
          )}
          {quote.content !== "" && !loader && (
            <>
              <QuoteSection>
                <QuoteText>"{quote.content}"</QuoteText>
              </QuoteSection>
            </>
          )}
        </QuoteContainer>
      ) : (
        <>
          {authorsQuote.map((quote, index) => (
            <QuoteContainer key={index}>
              <QuoteSection module={module}>
                <QuoteText>"{quote.content}"</QuoteText>
              </QuoteSection>
            </QuoteContainer>
          ))}
        </>
      )}
    </>
  );
};
