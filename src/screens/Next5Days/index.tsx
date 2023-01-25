import React, { useCallback, useEffect, useState } from "react";
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
import { IForecastDay } from "../../utils/forecast5days.interface";
import { useFocusEffect } from "@react-navigation/native";

export type Next5DaysScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Next5Days"
>;

type Props = {
  navigation: Next5DaysScreenNavigationProp;
  route: {
    params: {
      forecast: {
        forecastday: Array<IForecastData>;
      };
      forecast5Days: Array<IForecastDay>;
    };
  };
};

const Next5Days = ({ navigation, route: { params } }: Props): JSX.Element => {
  const { forecast, forecast5Days } = params;

  const [filteredDaysForecast, setFilteredDaysForecast] = useState<
    Array<IForecastDay>
  >([]);

  const isAndroid = Platform.OS === "android";

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: `${forecast.forecastday[1].day.avghumidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: `${Math.floor(forecast.forecastday[1].day.maxwind_kph)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudMiniaturePNG,
      value: `${Math.floor(forecast.forecastday[1].day.daily_will_it_rain)}%`,
      text: "Chuva",
    },
  ];

  const filterForecastDays = () => {
    let filteredList = [];
    let previousDate = "";
    let maxTemp = -Infinity;
    let minTemp = Infinity;

    forecast5Days.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (date !== previousDate) {
        if (previousDate !== "") {
          filteredList[filteredList.length - 1].maxTemp = maxTemp;
          filteredList[filteredList.length - 1].minTemp = minTemp;
        }
        filteredList.push(item);
        maxTemp = -Infinity;
        minTemp = Infinity;
      }

      previousDate = date;
      maxTemp = Math.max(maxTemp, item.main.temp_max);
      minTemp = Math.min(minTemp, item.main.temp_min);
    });

    filteredList[filteredList.length - 1].maxTemp = maxTemp;
    filteredList[filteredList.length - 1].minTemp = minTemp;

    setFilteredDaysForecast(filteredList);
  };

  const firstLetterUpperCase = (description: string) => {
    return description.charAt(0).toLocaleUpperCase() + description.slice(1);
  };

  useFocusEffect(
    useCallback(() => {
      filterForecastDays();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={theme.colors.dark400} />
      <Styled.ScrollView showsVerticalScrollIndicator={false}>
        <>
          <Styled.Container>
            <Divider top={16} />

            <Styled.PaddingHorizontal>
              <HeaderNavigation
                onPress={() => navigation.goBack()}
                titlePage="Próximos 5 dias"
                icon={
                  <MaterialIcons
                    name="calendar-today"
                    size={18}
                    color="white"
                  />
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
                    style={{ textAlign: "left", width: 180 }}
                  >
                    {forecast.forecastday[1].day.condition.text}
                  </Text>
                </View>
              </Styled.ContainerSummaryTemperature>

              <Divider top={30} />

              <WeatherDescription data={dataWeatherDescription} />
            </Styled.PaddingHorizontal>

            <Divider bottom={36} />
          </Styled.Container>

          <Divider bottom={35} />

          <Styled.ContainerWeekTemperature>
            {filteredDaysForecast.map((item, index) => {
              const { description } = item.weather[0];
              if (index === 0) {
                return <React.Fragment key={index} />;
              }

              return (
                <WeekDayTemperature
                  key={index}
                  date={formatAPIDate(item.dt_txt)}
                  icon={item.weather[0].icon}
                  condition={firstLetterUpperCase(description)}
                  maxTemp={Math.floor(item.maxTemp)}
                  minTemp={Math.floor(item.minTemp)}
                />
              );
            })}
          </Styled.ContainerWeekTemperature>

          <Divider bottom={20} />
        </>
      </Styled.ScrollView>
    </>
  );
};

export default Next5Days;
