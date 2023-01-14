import styled from 'styled-components/native';

const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const MaxTemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MinTemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default {
  TemperatureContainer,
  MaxTemperatureContainer,
  MinTemperatureContainer
};