import React from 'react';
import { string } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ImageContainer } from './ProfileImage.style';

const ProfileImage = props => {
  const { size, ...rest } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "profile-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <ImageContainer {...rest}>
          <Img
            style={{
              borderRadius: '50%',
              maxWidth: '30rem',
              width: size,
              height: size
            }}
            fluid={data.placeholderImage.childImageSharp.fluid}
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
