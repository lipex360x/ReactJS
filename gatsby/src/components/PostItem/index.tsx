import React from 'react';
import * as S from './styles';

interface IPostItem{
  slug: string;
  background?: string;
  category: string;
  date: string;
  timeToRead?: string;
  title: string;
  description: string;
}

const PostItem: React.FC<IPostItem> =({
  slug, background, category, date, timeToRead, title, description
}) => {

  return (
    <S.Container to={slug}>
      <S.PostSection>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>

        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura
          </S.PostItemDate>

          <S.PostItemTitle>
            {title}
          </S.PostItemTitle>

          <S.PostItemDescription>
            {description}
          </S.PostItemDescription>
        </S.PostItemInfo>

      </S.PostSection>
    </S.Container>
  )
};

export default PostItem;
