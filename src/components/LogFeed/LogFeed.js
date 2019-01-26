import React from 'react';
import { array } from 'prop-types';
import { Wrapper, Log, Date, Title, Link, Tag } from './LogFeed.style';
import { format } from 'date-fns';

const LogFeed = ({ logs }) => (
  <Wrapper>
    {logs &&
      logs.map(({ node }, index) => {
        const { customUrl, title, date, tags } = node.frontmatter;
        const path = customUrl ? customUrl : node.fields.slug;
        return (
          <Log key={`log-${index}`}>
            <Date dateTime={date}>{format(date, 'MMMM DD, YYYY')}</Date>
            <Title>
              <Link href={path}>{title}</Link>
            </Title>
            {tags && tags.map(tag => <Tag key={`tag-${index}`}>{tag}</Tag>)}
          </Log>
        );
      })}
  </Wrapper>
);

LogFeed.propTypes = {
  logs: array
};

export default LogFeed;
