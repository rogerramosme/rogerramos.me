import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ImageContainer } from './ProfileImage.style'

const ProfileImage = () => (
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
        <ImageContainer>
            <Img
              style={{ marginBottom: "2.4rem", borderRadius: "50%", maxWidth: "30rem" }}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
        </ImageContainer>
    )}
  />
);
export default ProfileImage;
