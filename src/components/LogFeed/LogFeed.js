import React from 'react';
import { array } from 'prop-types';
import { Wrapper, Log, Title, Link } from './LogFeed.style';
import { Date, Tag } from 'components/Text';
import { format } from 'date-fns';

const LogFeed = ({ logs }) => (
  <Wrapper>
    {logs &&
      logs.map(({ node }, index) => {
        const { customUrl, title, date, tags } = node.frontmatter;
        const path = customUrl ? customUrl : node.fields.slug;
        return (
          <Log key={`log-${date}`}>
            <Date dateTime={date}>{format(date, 'MMMM DD, YYYY')}</Date>
            <Title>
              <Link href={path}>{title}</Link>
            </Title>
            {tags && tags.map(tag => <Tag key={`tag-${date}-${tag}`}>{tag}</Tag>)}
          </Log>
        );
      })}
  </Wrapper>
);

LogFeed.propTypes = {
  logs: array
};

export default LogFeed;
