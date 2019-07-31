import styled from 'styled-components';
import DefaultProfileImage from 'components/ProfileImage'

export const Wraper = styled.header`
  max-width: 96rem;
  margin: 0 auto;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

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

