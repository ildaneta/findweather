import styled from 'styled-components/native';
import theme from '../../theme';

const Container = styled.View`
  border: 1px ${theme.colors.gray600} solid;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 18px;
  padding: 10px 20px;
`;

const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
`;

const Divider = styled.View`
  border-right-color: ${theme.colors.gray600};
  border-right-width: 1px;
  height: 80%;
  align-self: center;
`;

export default {
  Container,
  ContainerItem,
  Divider,
};