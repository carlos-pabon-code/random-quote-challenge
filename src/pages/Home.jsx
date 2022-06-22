import styled from "styled-components";
import { AuthorInfo } from "../components/AuthorInfo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Quote } from "../components/Quote";

const HomeContainer = styled.section``;
const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Main role="main">
        <Quote module="home" />
        <AuthorInfo />
      </Main>
      <Footer />
    </HomeContainer>
  );
};
