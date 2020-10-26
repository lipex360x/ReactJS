import React from 'react';
import { Link } from 'gatsby';

import * as S from './styles';

interface Props {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  numPages: number;
  prevPage: string;
  nextPage: string;
}

const Pagination: React.FC<Props> = ({
  isFirst, isLast, currentPage, numPages, prevPage, nextPage
}) => {
  return (
    <S.Container>
      {! isFirst && <Link to={prevPage}>← Pagina Anterior</Link> }
      <p>{currentPage} de {numPages}</p>
      {! isLast && <Link to={nextPage}>Próxima página →</Link> }
    </S.Container>
  )
};

export default Pagination;
