import React from "react";
import ProfileImage from "components/ProfileImage/";
import { Wrapper, Title } from './LogHeader.style';

const LogHeader = () => (
  <Wrapper>
      <ProfileImage size="4rem" />
      <Title href="/">rogerramos.me</Title>
  </Wrapper>
  
);

export default LogHeader;
