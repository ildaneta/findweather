import React, { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";

import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import Styled from "./styles";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { USER_FIRST_TIME } from "../../storage/storage.config";
import { CommonActions } from "@react-navigation/native";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const LetterBold = () => (
  <Text
    fontFamily={theme.fontFamily.OverpassBold}
    fontSize={theme.fontSize.md22}
    color={theme.colors.gray100}
  >
    Weather
  </Text>
);

const Welcome = ({ navigation }: Props): JSX.Element => {
  const handleGoneThroughWelcome = async () => {
    await AsyncStorage.setItem(USER_FIRST_TIME, "no").catch((error) => {
      console.log("Error inserting USER_FIRST_TIME into storage: ", error);
    });
  };

  const handleNavigation = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "TabRoutes",
          },
        ],
      })
    );
  }, []);

  return (
    <Styled.Container>
      <Styled.ContainerImage>
        <Styled.Image source={CloudAndThunderPNG} />
      </Styled.ContainerImage>

      <Divider top={34} />

      <Styled.ContainerTextButton>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.xxl33}
          color={theme.colors.white}
          style={{ width: 300, textAlign: "center", alignSelf: "center" }}
        >
          Descubra o Clima na sua Cidade
        </Text>
        <Divider top={24} />
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
          style={{ textAlign: "center" }}
        >
          Com o Find
          <LetterBold /> nunca ficou t??o f??cil ter a previs??o do tempo na palma
          da sua m??o
        </Text>

        <Divider top={70} />

        <Button
          backgroundColor={theme.colors.dark300}
          borderColor={theme.colors.gray300}
          borderRadius={18}
          height={54}
          onPress={() => {
            handleNavigation();
            handleGoneThroughWelcome();
          }}
        >
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.md22}
            color={theme.colors.white}
            style={{ textAlign: "center" }}
          >
            Iniciar
          </Text>
        </Button>
      </Styled.ContainerTextButton>

      <Divider bottom={10} />
    </Styled.Container>
  );
};

export default Welcome;
