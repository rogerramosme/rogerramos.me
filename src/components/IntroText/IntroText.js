import React from 'react';
import { Wrapper, Paragraph, Link, ScrollDownButton } from './IntroText.style';

const IntroText = () => (
  <Wrapper>
    <Paragraph>
      Here you can find my thoughts, ideas and Development Journal.
    </Paragraph>
    <Paragraph>
      Inspired by{' '}
      <Link href="https://github.com/raphaelfabeni/log">
        Rafael Fabeni‘s Log
      </Link>
      , I‘ve created this Website to document every cool stuff I‘m learning on
      my development day‘s.
    </Paragraph>
    <Paragraph>Feel free to see what I‘m doing below =)</Paragraph>
    <ScrollDownButton href="#main-quote">
      Scroll down
    </ScrollDownButton>
  </Wrapper>
);

export default IntroText;
