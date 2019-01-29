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
