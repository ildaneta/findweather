import { Platform, StatusBar, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
`;

const ContainerInputButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ContainerInput = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.dark400};
  padding: 15px 8px;
  border-radius: 11px;
  width: 80%;
`;

const Input = styled.TextInput`
  font-family: ${theme.fontFamily.OverpassRegular};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs16}px;
  margin: 0 8px 0 8px;
  width: 80%
`;

const SearchButton = styled.TouchableOpacity<TouchableOpacityProps>`
  background-color: ${theme.colors.dark400};
  padding: 13px 9px;
  border-radius: 11px;
  width: 55px;
  align-items: center;
`;

export default {
  Container,
  ScrollView,
  ContainerInputButton,
  ContainerInput,
  Input,
  SearchButton
};