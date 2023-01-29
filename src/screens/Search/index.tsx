import React, { useCallback, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FindWeatherAPI } from "../../services/findweather-api";

import { Ionicons } from "@expo/vector-icons";

import Divider from "../../components/Divider";
import HeaderNavigation from "../../components/HeaderNavigation";

import theme from "../../theme";
import Styled from "./styles";
import CardResult, { ICardResult } from "../../components/CardResult";
import Text from "../../components/Text";

import NotFoundDestinationPNG from "../../assets/not-found-destination.png";
import { ISearchData } from "../../utils/search.interface";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { CITY_NAME, COUNTRY_CODE } from "../../storage/storage.config";
import { useFocusEffect } from "@react-navigation/native";

type SearchScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Search"
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const ErrorContent = () => (
  <View style={{ alignItems: "center" }}>
    <Image source={NotFoundDestinationPNG} />

    <Divider top={40} />

    <Text
      fontFamily={theme.fontFamily.OverpassSemiBold}
      fontSize={theme.fontSize.xs16}
      color={theme.colors.gray100}
    >
      OPS!
    </Text>

    <Divider top={18} />

    <Text
      fontFamily={theme.fontFamily.OverpassSemiBold}
      fontSize={theme.fontSize.xs16}
      color={theme.colors.gray100}
    >
      Não foi possível encontrar o local desejado!
    </Text>
  </View>
);

const Search = ({ navigation }: Props): JSX.Element => {
  const { API_KEY_OPENCAGEDATA } = process.env;

  const [isError, setIsError] = useState(false);
  const [textTyped, setTextTyped] = useState("");
  const [response, setResponse] = useState<ISearchData>(null);
  const [dataCard, setDataCard] = useState({} as ICardResult);

  const [isLoading, setIsLoading] = useState(false);

  const handleCallAPI = async () => {
    FindWeatherAPI.getForecast(textTyped)
      .then(async (res) => {
        setIsLoading(true);
        setTextTyped("");
        setResponse(res.data);

        const { location, current } = res.data;

        await AsyncStorage.setItem(CITY_NAME, location.name);

        fetch(
          `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY_OPENCAGEDATA}&q=${location.country}`
        )
          .then((response) => response.json())
          .then(
            async (data) =>
              await AsyncStorage.setItem(
                COUNTRY_CODE,
                data.results[0].components.country_code
              )
          )
          .catch((error) =>
            console.log("Error calling open cage data API: ", error)
          );

        setDataCard({
          location: {
            name: location.name,
            region: location.region,
            country: location.country,
          },
          current: {
            temp_c: current.temp_c,
          },
          condition: {
            text: current.condition.text,
            icon: current.condition.icon,
          },
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error to get api data: ", error);

        setIsError(true);
        setTextTyped("");
        setIsLoading(false);
      });
  };

  const handleNavigateHome = () => {
    navigation.navigate("Home");
  };

  useFocusEffect(
    useCallback(() => {
      setResponse(null);
    }, [])
  );

  return (
    <>
      <Styled.ScrollView>
        <Styled.Container>
          <Divider top={16} />

          <HeaderNavigation titlePage="Busca" onPress={handleNavigateHome} />

          <Divider top={48} />

          <Styled.ContainerInputButton>
            <Styled.ContainerInput>
              <Ionicons
                name="search-outline"
                size={24}
                color={theme.colors.white}
              />

              <Styled.Input
                placeholder="Digite o nome de uma cidade"
                placeholderTextColor={theme.colors.gray200}
                value={textTyped}
                autoCapitalize="sentences"
                onChangeText={(text) => {
                  setTextTyped(text);
                  setIsError(false);
                  setResponse(null);
                }}
                onSubmitEditing={handleCallAPI}
              />
            </Styled.ContainerInput>

            <Styled.SearchButton onPress={handleCallAPI}>
              <Ionicons
                name="md-location-sharp"
                size={30}
                color={theme.colors.white}
              />
            </Styled.SearchButton>
          </Styled.ContainerInputButton>

          {isLoading && (
            <>
              <Divider top={40} />
              <ActivityIndicator size="small" color={theme.colors.white} />
            </>
          )}

          <Divider top={42} />

          {isError && <ErrorContent />}
          {response && !isError && !isLoading && (
            <CardResult data={dataCard} onPress={handleNavigateHome} />
          )}
        </Styled.Container>
      </Styled.ScrollView>
    </>
  );
};

export default Search;
