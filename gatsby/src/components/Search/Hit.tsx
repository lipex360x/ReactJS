import React,{} from 'react';
import PostItem from '../PostItem';

interface Props {
  hit: {
    fields: {
      slug: string
    },
    title: string,
    background: string,
    date: string,
    description: string,
    category: string,
  }
}

const Hit: React.FC<Props> = ({ hit }) => {
  return (
    <PostItem
      slug={hit.fields.slug}
      background={hit.background}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
    />
  )
};

export default Hit;
