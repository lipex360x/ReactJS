import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialItem = styled.li`

`
export const SocialLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover{
    color: var(--highlight);
  }
`
export const IconBox = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
