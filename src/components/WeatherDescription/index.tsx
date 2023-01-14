import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import theme from "../../theme";

import Styled from "./styles";

interface IWeatherDescriptionData {
  id: number;
  icon: ImageSourcePropType;
  value: string;
  text: string;
}

interface IWeatherData {
  data: IWeatherDescriptionData[];
}

import Divider from "../Divider";
import Text from "../Text";

const WeatherDescription = ({ data }: IWeatherData) => {
  return (
    <Styled.Container>
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <Styled.ContainerItem>
              <Image source={item.icon} />
              <Divider top={6} />
              <Text
                fontFamily={theme.fontFamily.OverpassBold}
                fontSize={theme.fontSize.xs16}
                color={theme.colors.white}
              >
                {item.value}
              </Text>
              <Text
                fontFamily={theme.fontFamily.OverpassLight}
                fontSize={theme.fontSize.xxs14}
                color={theme.colors.gray400}
              >
                {item.text}
              </Text>
            </Styled.ContainerItem>

            {index !== data.length - 1 && <Styled.Divider />}
          </React.Fragment>
        );
      })}
    </Styled.Container>
  );
};

export default WeatherDescription;
