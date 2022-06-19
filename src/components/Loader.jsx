import styled from "styled-components";

const LoaderContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: var(--paragraph);
  font-size: 20px;
  margin-bottom: 4rem;
  color: var(--gray);
`;

export const Loader = ({ children }) => {
  return <LoaderContainer>{children}</LoaderContainer>;
};
