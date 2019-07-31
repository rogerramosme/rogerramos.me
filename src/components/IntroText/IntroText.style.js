import styled from 'styled-components';
import DefaultScrollDownButton from 'components/ScrollDownButton'

export const Wrapper = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.general.active};
  display: flex;
  flex-flow: column;
  align-items: center;

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

export const Paragraph = styled.p`
  color: white;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  max-width: 70rem;
  margin: 2rem 0;
`;

export const ScrollDownButton = styled(DefaultScrollDownButton)`
  margin-top: 3.4rem;
`
