import styled from 'styled-components';
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
`
export const Header = styled.h1`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;
export const Main = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
  transition: background, color 0.5s;

  body#grid & {
    grid-template-areas:
    "posts"
    "pagination";
  }

  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`
