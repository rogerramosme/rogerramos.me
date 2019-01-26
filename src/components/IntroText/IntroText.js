import React from 'react';
import { Wrapper, Paragraph, Title, Link } from './IntroText.style';

const IntroText = () => (
  <Wrapper>
    <Title>Hi, I`m Roger. Wellcome to my Journal</Title>
    <Paragraph>
      Inspired by{' '}
      <Link href="https://github.com/raphaelfabeni/log">
        Rafael Fabeni`s Log
      </Link>
      , I`ve created this Website to document every cool stuff I`m learning on
      my development day`s.
    </Paragraph>
    <Paragraph>Feel free to see what I`m doing below =)</Paragraph>
  </Wrapper>
);

export default IntroText;
