import React from "react";
import Styled from "./styles";

export interface IText {
  children: React.ReactNode;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign?: "center" | "right" | "left";
}

const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  textAlign,
}: IText): JSX.Element => {
  return (
    <Styled.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </Styled.Text>
  );
};

export default Text;
