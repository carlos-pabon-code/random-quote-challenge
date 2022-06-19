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
            <QuoteAuthor>{quote.author}</QuoteAuthor>
            <QuoteGenre>{quote.genre}</QuoteGenre>
          </QuoteData>
        </>
      )}
    </QuoteContainer>
  );
};
