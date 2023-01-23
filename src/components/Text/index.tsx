import React from "react";
import { TextProps } from "react-native";
import Styled from "./styles";

export interface IText extends TextProps {
  children: React.ReactNode;
  fontSize: number;
  fontFamily: string;
  color: string;
}

const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  ...rest
}: IText): JSX.Element => {
  return (
    <Styled.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
};

export default Text;
