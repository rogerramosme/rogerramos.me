import styled from 'styled-components'

export const Link = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
  vertical-align: middle;
`

export const SvgBackground = styled.g`
  fill:transparent;
`

export const SvgIcon = styled.g`
  fill: ${props => props.theme.general.text};
`

export const SvgMask = styled.g`
 fill: none;
`

export const Svg = styled.svg`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  fill-rule: evenodd;

  &:hover {
    ${SvgIcon} {
      fill: ${props => props.theme.general.active}
    }
  }
`

