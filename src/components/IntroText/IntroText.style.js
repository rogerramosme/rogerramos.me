import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem;
  background-color: #ff0047;

  @media (min-width: 700px) {
    padding: 5rem 0;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const Title = styled.h3`
  font-size: 3.2rem;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  max-width: 70rem;
  margin: 2rem auto;
`;
