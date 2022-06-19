import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const FooterText = styled.p`
  font-family: var(--footer);
  color: var(--light-gray);
`;

const BoldText = styled.span`
  font-family: var(--footer);
  font-weight: 700;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        created by <BoldText>carlos.pabon.code</BoldText> - devChallenges.io
      </FooterText>
    </FooterContainer>
  );
};
