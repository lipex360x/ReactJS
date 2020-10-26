import React from 'react';

import links from './content'

import * as S from './styles';

const MenuLinks: React.FC = () => {
  return (
    <S.Container>
      <S.MenuList>
        {links.map( (link, i) => (
          <S.MenuItem key={i}>
            <S.MenuLink
              to={link.url}
              title={link.label}
              activeClassName="active"
            >
              {link.label}
            </S.MenuLink>
          </S.MenuItem>
        ) )}
      </S.MenuList>
    </S.Container>
  )
};

export default MenuLinks;
