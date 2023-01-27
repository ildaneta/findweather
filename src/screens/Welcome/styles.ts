import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const Container = styled.SafeAreaView`
  background-color: ${theme.colors.dark};
  padding: 0 16px;
  flex: 1
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const ContainerImage = styled.View`
  align-items: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export default {
  ScrollView,
  ContainerImage,
  Container,
  Image
};