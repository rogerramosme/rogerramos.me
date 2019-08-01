import styled from 'styled-components';
import DefaultProfileImage from 'components/ProfileImage'
import { Title as DefaultTitle } from 'components/Text'
import { breakpoints } from 'shared/media'

export const Wraper = styled.header`
  max-width: 96rem;
  margin: 0 auto;
  padding: 5rem 3rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Title = styled(DefaultTitle)`
  font-size: 3rem;
  line-height: 3.5rem;

  ${breakpoints.tablet`
    max-width: 64rem;
    font-size: 4rem;
    line-height: 5.5rem;
  `}

`

export const Subtitle = styled.h2`
  font-weight: 400;
  line-height: 1.5;
  font-size: 2rem;
  color: ${({ theme }) => theme.general.text};
  margin-bottom: 3rem;
`;

export const ProfileImage = styled(DefaultProfileImage)`
  margin-bottom: 4rem;
`

