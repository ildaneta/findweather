import React from "react";
import { View, StatusBar, Platform } from "react-native";
import Divider from "../../components/Divider";
import HeaderNavigation from "../../components/HeaderNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudMiniaturePNG from "../../assets/raining-cloud-miniature.png";
import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import Styled from "./styles";
import WeatherDescription from "../../components/WeatherDescription";
import Temperature from "../../components/Temperature";
import Text from "../../components/Text";
import WeekDayTemperature from "../../components/WeekDayTemperature";
import { IStackRoutes } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IForecastData } from "../../utils/search.interface";
import { formatAPIDate } from "../../utils/formatDate";

export type Next7DaysScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Next7Days"
>;

type Props = {
  navigation: Next7DaysScreenNavigationProp;
  route: {
    params: {
      forecast: {
        forecastday: Array<IForecastData>;
      };
    };
  };
};

const Next7Days = ({ navigation, route: { params } }: Props): JSX.Element => {
  const { forecast } = params;

  const isAndroid = Platform.OS === "android";

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: `${forecast.forecastday[0].day.avghumidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: `${Math.floor(forecast.forecastday[0].day.maxwind_kph)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudMiniaturePNG,
      value: `${Math.floor(forecast.forecastday[0].day.daily_will_it_rain)}%`,
      text: "Chuva",
    },
  ];

  return (
    <>
      <StatusBar backgroundColor={theme.colors.dark400} />
      <Styled.ScrollView>
        <Styled.Container>
          <Divider top={16} />

          <Styled.PaddingHorizontal>
            <HeaderNavigation
              onPress={() => navigation.goBack()}
              titlePage="Próximos 7 dias"
              icon={
                <MaterialIcons name="calendar-today" size={18} color="white" />
              }
            />

            <Divider top={30} />

            <Styled.ContainerSummaryTemperature>
              <Styled.Image source={CloudAndThunderPNG} />

              <View>
                <Text
                  fontFamily={theme.fontFamily.OverpassRegular}
                  fontSize={theme.fontSize.md20}
                  color={theme.colors.gray100}
                  style={{ textAlign: "left" }}
                >
                  Amanhã
                </Text>

                <Divider top={isAndroid ? -10 : 10} />

                <Temperature
                  maxTemp={forecast.forecastday[0].day.maxtemp_c}
                  minTemp={forecast.forecastday[0].day.mintemp_c}
                  maxTempFontSize={theme.fontSize.giant76}
                  minTempFontSize={theme.fontSize.xxl33}
                />

                <Divider top={isAndroid ? -10 : 0} />

                <Text
                  fontFamily={theme.fontFamily.OverpassRegular}
                  fontSize={theme.fontSize.md20}
                  color={theme.colors.gray100}
                  style={{ textAlign: "left" }}
                >
                  {forecast.forecastday[0].day.condition.text}
                </Text>
              </View>
            </Styled.ContainerSummaryTemperature>

            <Divider top={30} />

            <WeatherDescription data={dataWeatherDescription} />
          </Styled.PaddingHorizontal>

          <Divider bottom={36} />
        </Styled.Container>

        <Divider bottom={35} />

        <Styled.PaddingHorizontal>
          {forecast.forecastday.map((item, index) => {
            return (
              <WeekDayTemperature
                key={index}
                date={formatAPIDate(item.date)}
                icon={item.day.condition.icon}
                condition={item.day.condition.text}
                minTemp={item.day.mintemp_c}
                maxTemp={item.day.maxtemp_c}
              />
            );
          })}
        </Styled.PaddingHorizontal>
      </Styled.ScrollView>
    </>
  );
};

export default Next7Days;
