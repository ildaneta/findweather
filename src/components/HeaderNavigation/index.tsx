import React from "react";
import { Platform, TouchableOpacityProps, View } from "react-native";
import Text from "../Text";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";

import Styled from "./styles";

interface IHeaderNavigation extends TouchableOpacityProps {
  titlePage: string;
  icon?: React.ReactNode;
}

const HeaderNavigation = ({
  titlePage,
  icon,
  ...rest
}: IHeaderNavigation): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.BackButton {...rest}>
        <AntDesign name="left" size={20} color={theme.colors.white} />
      </Styled.BackButton>

      {icon ? (
        <View
          style={{
            alignItems: Platform.OS === "android" ? "center" : "stretch",
            flexDirection: "row",
            marginLeft: "20%",
          }}
        >
          {icon}
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.sm18}
            color={theme.colors.white}
            style={{ marginLeft: 10 }}
          >
            {titlePage}
          </Text>

          <View />
        </View>
      ) : (
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.sm18}
          color={theme.colors.white}
          style={{ marginLeft: "30%" }}
        >
          {titlePage}
        </Text>
      )}
    </Styled.Container>
  );
};

export default HeaderNavigation;
