import styled from 'styled-components/native';
import { TouchableOpacityProps } from "react-native"
import theme from '../../theme';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const BackButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: Number(0.70),
}))<TouchableOpacityProps>`
  padding: 12px;
  border-color: ${theme.colors.gray600};
  border-width: 1px;
  border-radius: 25px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export default {
  Container,
  BackButton
};