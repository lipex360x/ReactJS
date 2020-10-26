import React from 'react';

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as S from './styles';

const Sidebar: React.FC = () => {
  return (
    <S.Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.Container>
  )
};

export default Sidebar;
