import React, { useState, useEffect } from 'react';
import { Home, SearchAlt2 as Search, UpArrow as Arrow, Grid } from "styled-icons/boxicons-solid";
import { LightBulb as Light } from "styled-icons/entypo";
import { ThList as List } from 'styled-icons/typicons'

import * as S from './styles';

const MenuBar: React.FC = () => {

  const[theme, setTheme] = useState(null);
  const[display, setDisplay] = useState(null);

  useEffect(() => {

    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);

  },[])

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  function handleTheme(){
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
  }

  function handleDisplay(){
    window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
  }

  return (
    <S.Container>
      <S.MenuGroup>
        <S.MenuLink to="/" title="Voltar para Home">
          <S.MenuItem><Home /></S.MenuItem>
        </S.MenuLink>

        <S.MenuLink to="/search" title="Pesquisar">
          <S.MenuItem><Search /></S.MenuItem>
        </S.MenuLink>
      </S.MenuGroup>

      <S.MenuGroup>

        <S.MenuItem
          title="Mudar o tema"
          className={theme || ""}
          onClick={() => { handleTheme() }}
        >
          <Light />
        </S.MenuItem>

        <S.MenuItem
          title="Mudar visualização"
          className={display || ""}
          onClick={() => { handleDisplay() }}
        >
          {isListMode ? <Grid /> : <List /> }

        </S.MenuItem>

        <S.MenuItem title="Ir para o Topo"><Arrow /></S.MenuItem>
      </S.MenuGroup>
    </S.Container>
  )
};

export default MenuBar;
