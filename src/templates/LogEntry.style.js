import styled from 'styled-components';
import { Date as DateTag } from 'components/Text';

export const Wrapper = styled.article`
  max-width: 70rem;
  margin: 0 auto;
  padding-left: 4rem;
  padding-right: 4rem;
`;

export const TagWrapper = styled.div`
  display: block;
  margin-bottom: 2rem;
`;

export const Date = styled(DateTag)`
  margin-bottom: 4rem;
  display: block;
`;

export const LogBody = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.general.text};
`;

export const GoBack = styled.a`
  display: block;
  font-size: 1.5rem;
`;
