import React from "react"

import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <GlobalStyles />
      <Sidebar />
      <S.Main>{children}</S.Main>
      <MenuBar />
    </S.Container>

  )
}

export default Layout
