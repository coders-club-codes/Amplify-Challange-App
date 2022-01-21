import { API, graphqlOperation, Storage } from 'aws-amplify';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { BLOG_ID } from '@env';

import {
  BlogName,
  Container,
  HighlightPost,
  HighlightPostImage,
  HighlightPostTitle,
  Post,
  PostTitle,
} from './styles';
import { getBlog } from '../../graphql/queries';
import { GetBlogQuery, GetPostQuery } from '../../API';
import { FlatList } from 'react-native';
import Thumbnail from '../../components/Thumbnail';

export default function Home() {
  const [blog, setBlog] = useState<GetBlogQuery['getBlog']>();
  const [firstPostThumbnailUrl, setFirstPostThumbnailUrl] =
    useState<string>('');

  const navigation = useNavigation();

  const [firstPost, ...posts] = useMemo(
    () => blog?.posts?.items || [],
    [blog?.posts?.items]
  );

  useEffect(() => {
    async function loadBlog() {
      const { data } = (await API.graphql(
        graphqlOperation(getBlog, { id: BLOG_ID })
      )) as GraphQLResult<GetBlogQuery>;

      setBlog(data?.getBlog);
    }

    loadBlog();
  }, []);

  useEffect(() => {
    async function loadThumbnailUrl() {
      if (firstPost?.thumbnailKey) {
        const thumbnail = await Storage.get(firstPost.thumbnailKey);
        setFirstPostThumbnailUrl(thumbnail);
      }
    }

    loadThumbnailUrl();
  }, [firstPost]);

  const goToPost = useCallback(
    (post) => {
      navigation.navigate('Post', post);
    },
    [navigation]
  );

  const renderPosts = useCallback(
    ({ item: post }) => {
      return (
        <Post onPress={() => goToPost(post)}>
          <Thumbnail thumbnailKey={post.thumbnailKey} />
          <PostTitle numberOfLines={2}>{post.title}</PostTitle>
        </Post>
      );
    },
    [goToPost]
  );

  function extractKey(post: GetPostQuery['getPost']) {
    return post!.id;
  }

  return (
    <Container>
      <BlogName>{blog?.name}</BlogName>

      <FlatList
        data={posts}
        renderItem={renderPosts}
        numColumns={2}
        keyExtractor={extractKey}
        ListHeaderComponent={
          <HighlightPost onPress={() => goToPost(firstPost)}>
            <HighlightPostImage source={{ uri: firstPostThumbnailUrl }} />
            <HighlightPostTitle numberOfLines={2}>
              {firstPost?.title}
            </HighlightPostTitle>
          </HighlightPost>
        }
      />
    </Container>
  );
}
