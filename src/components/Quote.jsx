import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import LoaderContext from "../context/LoaderContext";
import QuoteContext from "../context/QuoteContext";
import RandomQuoteContext from "../context/RandomQuoteContext";
import { getAuthorQuotes } from "../helpers/getAuthorQuotes";
import { getRandomQuote } from "../helpers/getRandomQuote";
import { Loader } from "./Loader";

const QuoteContainer = styled.section`
  margin: 0 auto;
  width: 70%;
  @media (min-width: 1024px) {
    width: 600px;
  }
`;
const QuoteSection = styled.section`
  padding: 0 0 0 3rem;
  border-left: solid 8px var(--yellow);
  line-height: 1.6;
  ${({ module }) =>
    module === "quotes" &&
    css`
      margin: 5rem 0;
      @media (min-width: 1024px) {
        margin: 5rem 0 10rem 0;
      }
    `}
  @media (min-width: 1024px) {
    padding: 0 0 0 5rem;
  }
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
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const Quote = ({ module, selectedAuthor }) => {
  // useContext to control when the users clicks the random button
  const { randomQuote, setRandomQuote } = useContext(RandomQuoteContext);
  // useContext to show or hide a loader while a quote is searched.
  const { loader, setLoader } = useContext(LoaderContext);
  // useContext to save the random quote
  const { quote, setQuote } = useContext(QuoteContext);
  // useState to save the quotes of an specific author
  const [authorsQuote, setAuthorsQuote] = useState([]);

  useEffect(() => {
    if (randomQuote && module === "home") {
      setLoader(true);
      getRandomQuote().then((quote) => {
        setQuote({
          content: quote.content,
          author: quote.author,
          genre: quote.tags[0],
        });
        setLoader(false);
      });
    } else {
      getAuthorQuotes(selectedAuthor).then((quotes) => {
        setAuthorsQuote(quotes);
      });
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
