import styled from 'styled-components';
import { breakpoints } from 'shared/media'

export const FooterWrapper = styled.footer`
  text-align: center;
  font-size: 2rem;
  padding: 2rem 4rem;
  line-height: 1.5;
`;

export const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 5.8rem;
`

export const SocialItem = styled.li`
  display: block;

  ${breakpoints.tablet`
    display: inline;

    & + &:before {
      content: '  •  '
    }
  `}
`
