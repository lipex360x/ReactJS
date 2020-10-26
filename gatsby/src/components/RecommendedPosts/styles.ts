import styled from "styled-components"
import { Link } from 'gatsby'
import media from "styled-media-query"

export const Container = styled.section`
  border-bottom: 1px solid var(--texts);
  border-top: 1px solid var(--texts);
  background: #333;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #333;
  color: var(--texts);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: #000;
  }

  &.previous {
    border-right: 1px solid var(--texts);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
