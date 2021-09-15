import styled, { keyframes } from 'styled-components'

const placeholderShimmer = keyframes`
  from {
    background-position: -40rem 0;
  }
  to {
    background-position: 40rem 0;
  }
`

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`
export const Container = styled.section`
  max-width: var(--container);
  margin: 0 auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  color: var(--highlight);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    max-width: var(--container);
    height: 600px;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: ${placeholderShimmer} 1s linear infinite forwards;
  }
`
