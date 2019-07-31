import styled from 'styled-components'
import ScrollDownIcon from 'images/scroll-down-icon.svg'

export default styled.a`
  font-size: 1.5rem;
  color: #fff;
  display: inline-flex;
  flex-flow: column;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    width: 4.8rem;
    height: 4.8rem;
    background: url(${ScrollDownIcon});
    background-repeat: no-repeat;
    background-position: center center;

  }
`

