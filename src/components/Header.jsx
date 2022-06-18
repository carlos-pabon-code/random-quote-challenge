import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 2rem;
`;
const RandomButton = styled.button`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-family: var(--paragraph);
  color: var(--gray);
  font-weight: 500;
  font-size: 18px;
  svg {
    width: 1.3rem;
    transform: rotate(-40deg) scaleX(-1);
    margin-left: 0.4rem;
    color: var(--black);
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <RandomButton type="button">
        random
        <svg
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </RandomButton>
    </HeaderContainer>
  );
};
