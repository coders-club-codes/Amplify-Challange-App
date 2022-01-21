import React from 'react';

import { PostContent, PostTitle } from './styles';
import { useRoute } from '@react-navigation/native';
import { GetPostQuery } from '../../API';

export default function Post() {
  const { params: post } = useRoute() as { params: GetPostQuery['getPost'] };

  return (
    <>
      <PostTitle>{post?.title}</PostTitle>

      <PostContent
        source={{
          html:
            `<meta name="viewport" content="width=device-width, initial-scale=1>"${post?.content}` ||
            '',
        }}
      />
    </>
  );
}
