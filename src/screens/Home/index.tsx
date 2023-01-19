import React from "react";
import { Image, TouchableOpacity } from "react-native";

import Text from "../../components/Text";
import Divider from "../../components/Divider";
import RainingPNG from "../../assets/raining.png";
import Temperature from "../../components/Temperature";
import WeatherDescription from "../../components/WeatherDescription";
import CardHourTemperature from "../../components/CardHourTemperature";

import theme from "../../theme";
import Styled from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudPNG from "../../assets/raining-cloud-miniature.png";
import ClimateChangePNG from "../../assets/climate-change.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";

type HomeScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const dataWeatherDescription = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    value: "24%",
    text: "Umidade",
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    value: "30km/h",
    text: "Veloc. Vento",
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    value: "76%",
    text: "Chuva",
  },
];

const dataCardHourTemperature = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    temperatureValue: 23,
    hour: "09:00",
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    temperatureValue: 18,
    hour: "13:00",
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: "17:00",
  },

  {
    id: 4,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: "23:00",
  },
];

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
            style={{ textDecorationLine: "underline" }}
          >
            Selecione aqui um local e {"\n"} encontre o clima em tempo real
          </Text>
        </TouchableOpacity>
      </Styled.ContainerEmptyState>
    </Styled.Container>
  );
};

const FullContent = () => (
  <>
    <Styled.Container>
      <Divider top={27} />

      <Styled.LocationIconContainer>
        <Ionicons name="location-sharp" size={22} color={theme.colors.white} />

        <Styled.LocationTextContainer>
          <Styled.LocationCityCountryContainer>
            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.sm18}
              color={theme.colors.white}
            >
              {""} A Coruña, {""}
            </Text>

            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.sm18}
              color={theme.colors.white}
            >
              Espanha
            </Text>
          </Styled.LocationCityCountryContainer>

          <Divider top={3} />

          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.xs16}
            color={theme.colors.gray100}
          >
            {""} Domingo, 01 Jan de 2023
          </Text>
        </Styled.LocationTextContainer>
      </Styled.LocationIconContainer>

      <Divider top={19} />

      <Styled.ImageContainer>
        <Image source={RainingPNG} />
      </Styled.ImageContainer>

      <Temperature
        maxTemp={23}
        minTemp={18}
        maxTempFontSize={theme.fontSize.giant76}
        minTempFontSize={theme.fontSize.xl40}
      />

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.md22}
        color={theme.colors.gray100}
      >
        Chuva Moderada
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

      <Styled.Next7DaysContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.xs16}
          color={theme.colors.gray100}
        >
          Próximos 7 dias
        </Text>

        <SimpleLineIcons
          name="arrow-right"
          size={11}
          color={theme.colors.gray100}
          style={{ marginLeft: 4 }}
        />
      </Styled.Next7DaysContainer>
    </Styled.TodayAnd7NextDaysContainer>

    <Divider top={15} />

    <CardHourTemperature data={dataCardHourTemperature} />

    <Divider bottom={15} />
  </>
);

const Home = ({ navigation }: Props): JSX.Element => {
  return (
    <Styled.ScrollView>
      <EmptyStateContent navigation={navigation} />
    </Styled.ScrollView>
  );
};

export default Home;
