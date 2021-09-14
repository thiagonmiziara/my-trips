import styled from 'styled-components'

export const Content = styled.section`
  max-width: var(--container);
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: var(--large);
  color: var(--highlight);
  margin-bottom: var(--large);
`
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`
