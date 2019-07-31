import styled from 'styled-components'

export default styled.q`
  display: block;
  font-size: 2rem;
  line-height: 2.5rem;
  font-style: italic;
  color: ${props => props.theme.general.clean};
  text-align: center;
  padding: 8rem 2rem 3rem;

  &::before {
    font-size: 6rem;
    font-weight: 700;
  }

  &::after {
    content: ''
  }
`
