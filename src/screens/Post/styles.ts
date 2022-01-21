import styled from 'styled-components/native';
import WebView from 'react-native-webview';

export const PostTitle = styled.Text`
  font-size: 34px;
  font-weight: bold;
  margin-horizontal: 2.5%;
  margin-bottom: 5%;
`;

export const PostContent = styled(WebView)`
  background-color: transparent;
  margin-horizontal: 2.5%;
`;
