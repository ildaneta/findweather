import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import Styled from "./styles";

export interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor: string;
  borderColor?: string;
  borderRadius: number;
  height: number;
}

const Button = ({
  backgroundColor,
  borderColor = "transparent",
  children,
  borderRadius,
  height,
  ...rest
}): JSX.Element => {
  return (
    <Styled.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
