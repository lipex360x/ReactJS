import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

const Avatar: React.FC = () => {

  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <>
      <S.AvatarImg fluid={avatarImage.childImageSharp.fluid}/>
    </>
  )
};

export default Avatar;
