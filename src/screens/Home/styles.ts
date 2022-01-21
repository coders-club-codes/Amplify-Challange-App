import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const highlightPostWidth = width * 0.95;
const highlightPostHeight = highlightPostWidth / 1.77777778;

export const Container = styled.View`
  margin-top: 5%;
  justify-content: center;
`;

export const Post = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  margin-bottom: 5%;
`;

export const HighlightPost = styled.TouchableOpacity`
  margin-bottom: 4%;
`;

export const HighlightPostImage = styled.Image`
  width: ${highlightPostWidth}px;
  height: ${highlightPostHeight}px;
  margin-horizontal: 2.5%;
`;

export const BlogName = styled.Text`
  font-size: 34px;
  font-weight: bold;
  margin-horizontal: 2.5%;
  margin-bottom: 5%;
`;

export const HighlightPostTitle = styled.Text`
  margin-horizontal: 2.5%;
  font-size: 24px;
  font-weight: bold;
`;

export const PostTitle = styled.Text`
  width: 80%;
`;
