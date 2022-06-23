import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Quote } from "../components/Quote";
import { Footer } from "../components/Footer";
import { useContext, useEffect } from "react";
import QuoteContext from "../context/QuoteContext";

const QuotesContainer = styled.section``;
const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;
const QuotesSection = styled.section``;
const Author = styled.h2`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  font-family: var(--paragraph);
  font-weight: 700;
  font-size: 36px;
  color: var(--dark-gray);
  @media (min-width: 1024px) {
    text-align: left;
    width: 100%;
  }
`;

export const AuthorQuotes = () => {
  const { author } = useParams();
  // useContext to get the random quote
  const { quote } = useContext(QuoteContext);
  const selectedAuthor = quote.author;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QuotesContainer>
      <Header />
      <Main>
        <QuotesSection>
          <Author>{author}</Author>
          <Quote module="quotes" selectedAuthor={selectedAuthor} />
        </QuotesSection>
      </Main>
      <Footer />
    </QuotesContainer>
  );
};
