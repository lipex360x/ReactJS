import React from 'react';

import * as S from './styles';

interface Props {
  next?: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    }
  };
  previous?: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    }
  };
}

const RecommendedPosts: React.FC<Props> = ({next, previous}) => {
  return (
    <S.Container>
      {previous && <S.RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>}

      {next && <S.RecommendedLink to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>}
    </S.Container>
  )
};

export default RecommendedPosts;
