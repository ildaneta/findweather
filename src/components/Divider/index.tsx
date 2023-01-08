import React from "react";

import Styled from "./styles";

export interface IDivider {
  top?: number;
  bottom?: number;
}

const Divider = ({ top, bottom }: IDivider): JSX.Element => {
  return <Styled.Container top={top} bottom={bottom} />;
};

export default Divider;
