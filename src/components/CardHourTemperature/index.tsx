import React from "react";
import theme from "../../theme";
import Divider from "../Divider";
import Text from "../Text";

import Styled from "./styles";
interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: string;
  hour: string;
}
interface ICardHourTemperatureData {
  data: ICardHourTemperature[];
}

const CardHourTemperature = ({
  data,
}: ICardHourTemperatureData): JSX.Element => {
  return (
    <>
      {data.map((item) => (
        <Styled.ContainerCard key={item.id}>
          <Styled.ContainerTemperature>
            <Text
              fontFamily={theme.fontFamily.OverpassBold}
              fontSize={theme.fontSize.md22}
              color={theme.colors.white}
            >
              {item.temperatureValue}
            </Text>
            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.xxxs12}
              color={theme.colors.gray100}
              style={{ paddingBottom: 9 }}
            >
              º
            </Text>
          </Styled.ContainerTemperature>

          <Divider top={8} />

          <Styled.Image source={{ uri: `https:${item.icon}` }} />

          <Divider top={10} />

          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.xxs14}
            color={theme.colors.gray100}
          >
            {item.hour}
          </Text>
        </Styled.ContainerCard>
      ))}
    </>
  );
};

export default CardHourTemperature;
