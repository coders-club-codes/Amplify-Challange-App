import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const postWidth = width * 0.45;
const postHeight = postWidth / 1.77777778;

export const Image = styled.Image`
  width: ${postWidth}px;
  height: ${postHeight}px;
  margin-bottom: 5px;
  border-radius: 4px;
`;
