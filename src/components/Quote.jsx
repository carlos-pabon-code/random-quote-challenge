import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LoaderContext from "../context/LoaderContext";
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
`;
const InitialMessage = styled.section`
  margin: 0 auto;
  text-align: center;
  font-family: var(--paragraph);
  font-size: 20px;
  margin-bottom: 4rem;
  color: var(--gray);
`;
const QuoteData = styled.section`
  margin: 10rem 0 0 5rem;
  transition: background 0.4s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  &:hover {
    background: var(--dark-gray);
  }
  &:hover #quote-author {
    color: var(--white);
  }
  &:hover #arrow-icon {
    color: var(--white);
  }
`;
const QuoteInfo = styled.article`
  background-color: transparent;
`;
const ArrowIcon = styled.div`
  svg {
    width: 1.4rem;
    color: var(--dark-gray);
  }
`;
const QuoteText = styled.blockquote`
  font-family: var(--paragraph);
  color: var(--black);
  font-weight: 500;
  font-size: 36px;
`;
const QuoteAuthor = styled.p`
  font-family: var(--paragraph);
  color: var(--gray);
  font-weight: 700;
  font-size: 24px;
  padding: 0.5rem 0;
`;
const QuoteGenre = styled.p`
  font-family: var(--paragraph);
  color: var(--light-gray);
  font-weight: 500;
  font-size: 14px;
`;

export const Quote = () => {
  // useContext to control when the users clicks the random button
  const { randomQuote, setRandomQuote } = useContext(RandomQuoteContext);
  // useContext to show or hide a loader while a quote is searched.
  const { loader, setLoader } = useContext(LoaderContext);
  // useState to save the random quote generater after the users clicked
  const [quote, setQuote] = useState({ content: "", author: "", genre: "" });

  const getRandomQuote = async () => {
    try {
      setLoader(true);
      const request = await fetch("https://api.quotable.io/random");
      const quote = await request.json();
      setQuote({
        content: quote.content,
        author: quote.author,
        genre: quote.tags[0],
      });
      setLoader(false);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (randomQuote) {
      getRandomQuote();
    }
    return () => {
      setRandomQuote(false);
    };
  }, [randomQuote]);

  return (
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
          <QuoteData>
            <QuoteInfo>
              <QuoteAuthor id="quote-author">{quote.author}</QuoteAuthor>
              <QuoteGenre>{quote.genre}</QuoteGenre>
            </QuoteInfo>
            <ArrowIcon>
              <svg
                id="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ArrowIcon>
          </QuoteData>
        </>
      )}
    </QuoteContainer>
  );
};
