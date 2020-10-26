import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination';

import * as S from '../components/ListContainer/styles'

const BlogPost: React.FC = (props:any) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListContainer>
      {postList.map(({
        node: {
          id,
          timeToRead,
          fields: { slug },
          frontmatter: { background, category, date, description, title}
        }
      }) => (
        <PostItem
          key={id}
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </S.ListContainer>
    <Pagination
      isFirst={isFirst}
      isLast={isLast}
      currentPage={currentPage}
      numPages={numPages}
      prevPage={prevPage}
      nextPage={nextPage}
      />

    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            background
            category
            description
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogPost;
