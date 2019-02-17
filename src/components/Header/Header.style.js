import styled from 'styled-components';

export const Wraper = styled.header`
  margin-bottom: 2.3rem;
`;

export const Content = styled.header`
  margin: 0 auto;
  max-width: 96rem;
  padding: 6.4rem 1.7rem 2.3rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.5;
  font-size: 2rem;
  color: ${({ theme }) => theme.general.text};
`;
