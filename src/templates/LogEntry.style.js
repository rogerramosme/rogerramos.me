import styled from 'styled-components'

export const Wrapper = styled.article`
    max-width: 70rem;
    margin: 0 auto;
`

export const TagWrapper = styled.div`
    display: block;
    margin-bottom: 2rem;
`

export const Tag = styled.small`
    color: #ff0047;
    font-size: 1.2rem;
    line-height: 1.5;

    & + &:before {
        content: ', '
    }
`

export const Title = styled.h1`
    margin: 0 auto 0.5rem auto;
    line-height: 1.2;
    font-size: 4rem;
    font-weight: 700;
    color: #303030;
`

export const Date = styled.time`
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 4rem;
    display: block;
`

export const LogBody = styled.div`
    font-size: 1.6rem;
    line-height: 1.5;
    color: #303030;
`

export const GoBack = styled.a`
    display: block;
    font-size: 1.5rem;
`