import styled from 'styled-components';
import media from "styled-media-query"

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  padding: 1.5rem 3rem;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight)
    }
  };


  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}
`;
