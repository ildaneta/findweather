import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  SectionList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Text from "../../components/Text";
import Divider from "../../components/Divider";
import RainingPNG from "../../assets/raining.png";
import WeatherDescription from "../../components/WeatherDescription";
import CardHourTemperature from "../../components/CardHourTemperature";

import theme from "../../theme";
import Styled from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudMiniaturePNG from "../../assets/raining-cloud-miniature.png";

import ClimateChangePNG from "../../assets/climate-change.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { useFocusEffect } from "@react-navigation/native";
import {
  ICurrent,
  ILocation,
  ISearchData,
  IForecastData,
} from "../../utils/search.interface";
import {
  IForecast5Days,
  IForecastDay,
} from "../../utils/forecast5days.interface";
import { CITY_NAME } from "../../storage/storage.config";
import { FindWeatherAPI } from "../../services/findweather-api";
import { formatDate } from "../../utils/formatDate";
import { FindWeatherOpenWeatherAPI } from "../../services/findweather-api-openweather";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface IFullContentData {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: Array<IForecastData>;
  };
  date: string;
  navigation: HomeScreenNavigationProp;
  forecast5Days: Array<IForecastDay>;
}

const EmptyStateContent = ({ navigation }: Props) => {
  return (
    <Styled.Container>
      <Styled.ContainerEmptyState>
        <Divider top={60} />

        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.xxl33}
          color={theme.colors.white}
        >
          Find
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.xxl33}
            color={theme.colors.white}
          >
            Weather
          </Text>
        </Text>

        <Divider top={100} />

        <Image source={ClimateChangePNG} />

        <Divider top={100} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          activeOpacity={0.75}
        >
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.md22}
            color={theme.colors.gray100}
            style={{ textDecorationLine: "underline", textAlign: "center" }}
          >
            Selecione aqui um local e {"\n"} encontre o clima em tempo real
          </Text>
        </TouchableOpacity>
      </Styled.ContainerEmptyState>
    </Styled.Container>
  );
};

const FullContent = ({
  location,
  current,
  forecast,
  forecast5Days,
  date,
  navigation,
}: IFullContentData) => {
  const iOS = Platform.OS === "ios";
  const { humidity, wind_kph } = current;
  const { daily_will_it_rain } = forecast.forecastday[0].day;

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: `${humidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: `${Math.floor(wind_kph)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudMiniaturePNG,
      value: `${Math.floor(daily_will_it_rain)}%`,
      text: "Chuva",
    },
  ];

  return (
    <>
      <Styled.Container>
        <Divider top={27} />

        <Styled.LocationIconContainer>
          <Ionicons
            name="location-sharp"
            size={22}
            color={theme.colors.white}
          />

          <Styled.LocationTextContainer>
            <Styled.LocationCityCountryContainer>
              <Text
                fontFamily={theme.fontFamily.OverpassRegular}
                fontSize={theme.fontSize.sm18}
                color={theme.colors.white}
              >
                {""} {location.name}, {""}
              </Text>

              <Text
                fontFamily={theme.fontFamily.OverpassRegular}
                fontSize={theme.fontSize.sm18}
                color={theme.colors.white}
              >
                {location.country}
              </Text>
            </Styled.LocationCityCountryContainer>

            <Divider top={3} />

            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.xs16}
              color={theme.colors.gray100}
            >
              {""} {date}
            </Text>
          </Styled.LocationTextContainer>
        </Styled.LocationIconContainer>

        <Divider top={19} />

        <Styled.ImageContainer>
          <Image source={RainingPNG} />
        </Styled.ImageContainer>

        <Divider top={iOS ? 10 : -10} />

        <Styled.ContainerTemperature>
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.giant76}
            color={theme.colors.white}
          >
            {Math.round(current.temp_c)}
          </Text>
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.lg30}
            color={theme.colors.white}
            style={{
              alignSelf: "center",
              height: 80,
            }}
          >
            º
          </Text>
        </Styled.ContainerTemperature>

        <Divider top={iOS ? 0 : -10} />

        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
          style={{ textAlign: "center" }}
        >
          {current.condition.text}
        </Text>
      </Styled.Container>

      <Divider top={30} />

      <WeatherDescription data={dataWeatherDescription} />

      <Divider top={30} />

      <Styled.TodayAnd7NextDaysContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md20}
          color={theme.colors.white}
        >
          Hoje
        </Text>

        <Styled.Next5DaysContainer
          onPress={() =>
            navigation.navigate("Next5Days", {
              forecast: forecast,
              forecast5Days: forecast5Days,
            })
          }
        >
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.xs16}
            color={theme.colors.gray100}
          >
            Próximos 5 dias
          </Text>

          <SimpleLineIcons
            name="arrow-right"
            size={11}
            color={theme.colors.gray100}
            style={{ marginLeft: 4 }}
          />
        </Styled.Next5DaysContainer>
      </Styled.TodayAnd7NextDaysContainer>

      <Divider top={15} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forecast.forecastday[0].hour}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <Styled.Separator />}
        renderItem={({ item, index }) => {
          const dataCardHourTemperature = [
            {
              id: index,
              icon: item.condition.icon,
              temperatureValue: Math.round(item.temp_c),
              hour: item.time.substring(11, 16),
            },
          ];
          return (
            <CardHourTemperature data={dataCardHourTemperature} key={index} />
          );
        }}
      />

      <Divider bottom={15} />
    </>
  );
};

const Home = ({ navigation }: Props): JSX.Element => {
  const [city, setCity] = useState(null);
  const [response, setResponse] = useState<ISearchData>(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [forecast5Days, setForecast5Days] = useState<IForecast5Days>(null);

  const getDate = () => {
    setCurrentDate(formatDate());
  };

  const getCityName = useCallback(async () => {
    const storedCity = await AsyncStorage.getItem(CITY_NAME);

    setCity(storedCity);

    setIsLoading(false);
  }, []);

  const getAPIData = async () => {
    setIsLoading(true);

    await FindWeatherAPI.getForecast(city)
      .then((response) => {
        const data = response.data;

        setResponse(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("Error calling API: ", error));
  };

  const getForecast5Days = async () => {
    setIsLoading(true);

    await FindWeatherOpenWeatherAPI.getForecast(city)
      .then((res) => {
        const data: IForecast5Days = res.data;

        setForecast5Days(data);
      })
      .catch((error) =>
        console.log("Error calling 5 next days forecast API: ", error)
      );
  };

  useFocusEffect(
    useCallback(() => {
      getCityName();
    }, [])
  );

  useEffect(() => {
    if (city) {
      getAPIData();
      getDate();
      getForecast5Days();
    } else {
      setIsLoading(false);
      setResponse(null);
      setForecast5Days(null);
    }
  }, [city]);

  if (isLoading) {
    return (
      <Styled.ScrollView>
        <ActivityIndicator size="small" color={theme.colors.white} />
      </Styled.ScrollView>
    );
  }

  return (
    <SectionList
      style={{ backgroundColor: theme.colors.dark, paddingHorizontal: 16 }}
      sections={[
        {
          title: "",
          data: [
            response ? (
              <FullContent
                current={response.current}
                location={response.location}
                forecast={response.forecast}
                date={currentDate}
                forecast5Days={forecast5Days && forecast5Days.list}
                navigation={navigation}
              />
            ) : (
              <EmptyStateContent navigation={navigation} />
            ),
          ],
        },
      ]}
      renderItem={({ item }) => item}
      keyExtractor={(_, index) => String(index)}
    />
  );
};

export default Home;
