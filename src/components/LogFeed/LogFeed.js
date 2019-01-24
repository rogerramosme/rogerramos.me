import React from "react";
import { Wrapper, Log, Date, Title, Link, Tag } from './LogFeed.style'
import { format } from 'date-fns';

const LogFeed = ({ logs }) => (
    <Wrapper>
        {logs && (logs.map(({node}, index) => {
        const { custom_url, title, date, tags } = node.frontmatter
        const path = custom_url ? custom_url : node.fields.slug
        return (
            <Log key={`log-${index}`}>
                <Date dateTime={date}>{format(date, 'MMMM DD, YYYY')}</Date>
                <Title><Link href={path}>{title}</Link></Title>
                {tags && tags.map(tag => <Tag>{tag}</Tag>)}
            </Log>
        )
        }))}
    </Wrapper>
);

export default LogFeed;
