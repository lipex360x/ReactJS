import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPost from '../components/RecommendedPosts'
import Comments from '../components/Comments'

import * as S from '../components/Post/styles'

const BlogPost: React.FC = ({ data, pageContext }:any) => {
  const post = data.markdownRemark
  const next = pageContext.previousPost;
  const prev = pageContext.nextPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />

      <S.PostHeader>
        <S.PostDate>
          • {post.timeToRead} min de leitura •
        </S.PostDate>

        <S.PostTitle>
          {post.frontmatter.title}
        </S.PostTitle>

        <S.PostDescription>
          {post.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>

      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>

      <RecommendedPost next={next} previous={prev}/>
      <Comments url={post.fields.slug} title={post.frontmatter.title}/>

    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost;
