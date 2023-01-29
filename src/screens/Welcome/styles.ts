import styled from 'styled-components/native';
import theme from '../../theme';

const Container = styled.SafeAreaView`
  background-color: ${theme.colors.dark};
  flex: 1;
  justify-content: center;
`;

const ContainerImage = styled.View`
  align-items: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

const ContainerTextButton = styled.View`
  padding: 0 16px;
`;

export default {
  ContainerImage,
  Container,
  Image,
  ContainerTextButton
};