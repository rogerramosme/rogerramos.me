import styled from 'styled-components';

export const Tag = styled.small`
  color: ${({ theme }) => theme.general.active};
  font-size: 1.2rem;
  line-height: 1.5;

  & + &:before {
    content: ', ';
  }
`;

export const Date = styled.time`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const Title = styled.h1`
  margin: ${({ margin }) => (margin ? margin : '0 auto 1.5rem auto')};
  line-height: 1.2;
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.general.active};
`;
