import React from 'react';
import { string } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ImageContainer } from './ProfileImage.style';

const ProfileImage = props => {
  const { size, ...rest } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          avatar: file(relativePath: { eq: "profile-image.jpg" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <ImageContainer {...rest}>
          <img
            src={data.avatar.childImageSharp.fixed.src}
            srcSet={data.avatar.childImageSharp.fixed.srcSet}
            style={{
              borderRadius: '100%',
              maxWidth: '30rem',
              width: size,
              height: size
            }}
          />
        </ImageContainer>
      )}
    />
  );
};

ProfileImage.propTypes = {
  size: string
};

ProfileImage.defaultProps = {
  size: 'auto'
};

export default ProfileImage;
