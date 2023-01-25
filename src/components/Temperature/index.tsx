import React from "react";
import theme from "../../theme";
import Text from "../Text";

import Styled from "./styles";

interface ITemperature {
  minTemp: number;
  maxTemp: number;
  minTempFontSize: number;
  maxTempFontSize: number;
  roundSize?: number;
}

const Temperature = ({
  minTemp,
  maxTemp,
  minTempFontSize,
  maxTempFontSize,
  roundSize,
}: ITemperature): JSX.Element => {
  return (
    <Styled.TemperatureContainer>
      <Styled.MaxTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={maxTempFontSize}
          color={theme.colors.white}
        >
          {Math.floor(maxTemp)}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={roundSize ? roundSize : theme.fontSize.lg30}
          color={theme.colors.white}
          style={{
            paddingTop: roundSize ? 0 : 8,
          }}
        >
          º
        </Text>
      </Styled.MaxTemperatureContainer>

      <Styled.MinTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={minTempFontSize}
          color={theme.colors.gray100}
        >
          {""} / {""} {Math.floor(minTemp)}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={roundSize ? roundSize : theme.fontSize.md20}
          color={theme.colors.gray100}
          style={{ paddingBottom: roundSize ? 10 : 24 }}
        >
          º
        </Text>
      </Styled.MinTemperatureContainer>
    </Styled.TemperatureContainer>
  );
};

export default Temperature;
