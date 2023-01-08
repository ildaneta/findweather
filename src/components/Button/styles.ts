import styled from 'styled-components/native';
import { IButton } from '.';


const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<IButton>`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-color: ${({borderColor}) => borderColor};
  border-width: ${({borderColor}) => borderColor && 1}px;
  border-radius: ${({borderRadius}) => borderRadius}px;
  height: ${({height}) => height}px;
  justify-content: center; 
`;

export default {
  Button
};