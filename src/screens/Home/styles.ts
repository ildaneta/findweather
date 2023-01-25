import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;


const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
`;

const ContainerEmptyState = styled.View`
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
`;

const LocationIconContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start
`;

const LocationTextContainer = styled.View``;

const LocationCityCountryContainer = styled.View`
  flex-direction: row;
`;

const ImageContainer = styled.View`
  align-items: center;
`;

const TodayAnd7NextDaysContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Next5DaysContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6
}))`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

const Separator = styled.View`
  margin-right: 10px;
`;

const ContainerTemperature = styled.View`
  flex-direction: row;
  align-self: center;
`;


export default {
  Container,
  ContainerEmptyState,
  ScrollView,
  LocationIconContainer,
  LocationTextContainer,
  LocationCityCountryContainer,
  ImageContainer,
  TodayAnd7NextDaysContainer,
  Next5DaysContainer,
  Separator,
  ContainerTemperature
};