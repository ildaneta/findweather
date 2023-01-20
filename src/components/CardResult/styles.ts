import styled from 'styled-components/native';
import { TouchableOpacityProps } from "react-native";
import theme from '../../theme';

const ContainerButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75
}))<TouchableOpacityProps>`
  background-color: ${theme.colors.dark300};
  padding: 15px 12px;
  width: 65%;
  border-radius: 20px;
  border-color: ${theme.colors.dark100};
  border-width: 1.5px
`;

const ContainerTemperatureImage = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerTemperature = styled.View`
  flex-direction: row;
`;

const Image = styled.Image`
  height: 45px;
  width: 45px;
  align-self: flex-end;
`;

export default {
  ContainerButton,
  ContainerTemperatureImage,
  ContainerTemperature,
  Image
};