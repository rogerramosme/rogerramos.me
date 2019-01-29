import styled from 'styled-components';

export const Wrapper = styled.article`
  padding: 4rem 0;
`;

export const Log = styled.article`
  padding: 0 2rem;
  max-width: 70rem;
  margin: 4rem auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 1;
  margin: 1rem 0;
`;

export const Link = styled.a`
  color: black;

  &:hover {
    color: ${({ theme }) => theme.general.active};
    text-decoration: none;
  }
`;
