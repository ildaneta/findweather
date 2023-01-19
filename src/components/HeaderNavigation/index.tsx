import React from "react";
import { TouchableOpacityProps } from "react-native";
import Text from "../Text";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";

import Styled from "./styles";

interface IHeaderNavigation extends TouchableOpacityProps {
  titlePage: string;
}

const HeaderNavigation = ({
  titlePage,
  ...rest
}: IHeaderNavigation): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BackButton {...rest}>
        <AntDesign name="left" size={20} color={theme.colors.white} />
      </Styled.BackButton>

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.sm18}
        color={theme.colors.white}
        style={{ marginLeft: "30%" }}
      >
        {titlePage}
      </Text>
    </Styled.Container>
  );
};

export default HeaderNavigation;
