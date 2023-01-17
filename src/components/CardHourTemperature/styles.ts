import styled from 'styled-components/native';
import theme from '../../theme';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  
`;

const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerCard = styled.View`
  align-items: center;
  border: 1.5px ${theme.colors.dark100} solid;
  border-radius: 20px;
  padding: 8px 18px;
  background-color: ${theme.colors.dark300};
`;

export default {
  Container,
  ContainerTemperature,
  ContainerCard
};