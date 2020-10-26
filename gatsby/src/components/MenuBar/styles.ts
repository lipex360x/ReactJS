import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 3.75rem;
  height: 100vh;
  padding: 0.8rem 0;
  right: 0;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);

  transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}

`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`;

export const MenuLink = styled(Link)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuItem = styled.span`
  display: block;
  cursor: pointer;

  position: relative;
  color: var(--texts);
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;

  transition: color 0.5s;

  &.light {
    color: #d4d400;

    &:hover{
      color: #e2e240;
    }
  }

  &:hover{
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
