import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const Container = styled.ScrollView.attrs<ScrollViewProps>(() => ({
  showsVerticalScrollIndicator: false
}))`
  flex: 1;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
`;

const ContainerImage = styled.View`
  align-items: center;
`;

export default {
  Container,
  ContainerImage
};