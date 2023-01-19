import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Divider from "../../components/Divider";
import HeaderNavigation from "../../components/HeaderNavigation";

import theme from "../../theme";
import Styled from "./styles";
import CardResult from "../../components/CardResult";

const Search = (): JSX.Element => {
  return (
    <Styled.ScrollView>
      <Styled.Container>
        <Divider top={16} />

        <HeaderNavigation
          titlePage="Busca"
          onPress={() => console.log("apertou")}
        />

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
            />
          </Styled.ContainerInput>

          <Styled.SearchButton>
            <Ionicons
              name="md-location-sharp"
              size={30}
              color={theme.colors.white}
            />
          </Styled.SearchButton>
        </Styled.ContainerInputButton>

        <Divider top={42} />
      </Styled.Container>
    </Styled.ScrollView>
  );
};

export default Search;
