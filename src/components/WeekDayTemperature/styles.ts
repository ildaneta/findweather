import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContainerIconCondition = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

const Image = styled.Image`
  height: 50px; 
  width: 50px;
`;

const ContainerDate = styled.View`
  width: 110px;
`;

const ContainerTemperature = styled.View`
  width: 72px;
  align-items: center;
`;

export default {
  Container,
  ContainerIconCondition,
  Image,
  ContainerDate,
  ContainerTemperature
};