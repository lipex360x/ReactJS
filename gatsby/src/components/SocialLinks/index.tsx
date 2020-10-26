import React from 'react';

import links from './content'
import Icons from './icons'

import * as S from './styles';

const SocialLinks: React.FC = () => {
  return (
    <S.Container>
      <S.SocialList>

        {links.map( (link,i) => {
          const Icon = Icons[link.label];

          return (
            <S.SocialItem key={i}>
              <S.SocialLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer">
                  <S.IconBox>
                    <Icon />
                  </S.IconBox>
              </S.SocialLink>
            </S.SocialItem>
          )
        } )}

      </S.SocialList>
    </S.Container>
  )
};

export default SocialLinks;
