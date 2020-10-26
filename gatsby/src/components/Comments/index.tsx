import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styles';

interface Props {
  url: string;
  title: string
}

const Comments: React.FC<Props> = ({ url, title }) => {

  const fullURL = `https://opcoesdenegocio.com.br${url}`
  return (
    <S.Container>
      <S.Header>Comentários</S.Header>
      <ReactDisqusComments
        shortname="opcoesdenegocio"
        identifier={fullURL}
        title={title}
        url={fullURL}
      />
    </S.Container>
  )
};

export default Comments;
