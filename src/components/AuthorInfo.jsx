import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import LoaderContext from "../context/LoaderContext";
const ArrowIcon = styled.div`
  svg {
    width: 1.4rem;
    color: var(--dark-gray);
  }
`;

const QuoteData = styled.section`
  width: 90%;
  margin: 4rem auto;
  transition: background 0.4s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem 3rem 3rem;
  &:hover {
    background: var(--dark-gray);
  }
  &:hover #quote-author {
    color: var(--white);
  }
  &:hover #arrow-icon {
    color: var(--white);
  }

  @media (min-width: 768px) {
    width: 600px;
    margin: 10rem auto;
  }
`;

const QuoteInfo = styled.article`
  background-color: transparent;
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

export const AuthorInfo = () => {
  // useContext to show or hide a loader while a quote is searched.
  const { loader } = useContext(LoaderContext);
  // useContext to get the random quote
  const { quote } = useContext(QuoteContext);
  return (
    <Link style={{ width: "100%" }} to={`/quotes/${quote.author}`}>
      {quote.content !== "" && !loader && (
        <>
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
    </Link>
  );
};
