import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
  background-color: ${theme.colors.dark400};
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
`;

const PaddingHorizontal = styled.View`
  padding: 0 16px;
`

const ContainerSummaryTemperature = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.Image`
  width: 119px;
  height: 119px;
`;

export default {
  Container,
  ScrollView,
  PaddingHorizontal,
  ContainerSummaryTemperature,
  Image
};