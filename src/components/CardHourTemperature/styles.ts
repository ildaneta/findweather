import styled from 'styled-components/native';
import theme from '../../theme';

const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerCard = styled.View`
  align-items: center;
  border: 1.5px ${theme.colors.dark100} solid;
  border-radius: 20px;
  padding: 5px 14px;
  background-color: ${theme.colors.dark300};
`;

const Image = styled.Image`
  height: 40px; 
  width: 40px;
`;

export default {
  ContainerTemperature,
  ContainerCard,
  Image
};