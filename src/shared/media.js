import { css } from 'styled-components'

export const sizes = {
  fullHd: 1200,
  desktop: 992,
  tablet: 768,
  phone: 375
}

// Iterate through the sizes and create a media template
export const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

