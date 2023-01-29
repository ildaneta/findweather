import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "../screens/Home";
import { Platform, StyleSheet, View } from "react-native";
import theme from "../theme";
import Search from "../screens/Search";
import Text from "../components/Text";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: { ...styles.tabBar },
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? theme.colors.white : theme.colors.gray500}
              />
              <Text
                fontFamily={
                  focused
                    ? theme.fontFamily.OverpassRegular
                    : theme.fontFamily.OverpassLight
                }
                fontSize={theme.fontSize.sm18}
                color={focused ? theme.colors.white : theme.colors.gray500}
                style={{ marginLeft: 10 }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarItemStyle: {
            top: Platform.OS === "ios" ? 15 : 5,
          },
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="search1"
                size={24}
                color={focused ? theme.colors.white : theme.colors.gray500}
              />
              <Text
                fontFamily={
                  focused
                    ? theme.fontFamily.OverpassRegular
                    : theme.fontFamily.OverpassLight
                }
                fontSize={theme.fontSize.sm18}
                color={focused ? theme.colors.white : theme.colors.gray500}
                style={{ marginLeft: 10 }}
              >
                Buscar
              </Text>
            </View>
          ),
          tabBarItemStyle: {
            top: Platform.OS === "ios" ? 15 : 5,
          },
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.dark,
    height: 70,
  },
});

export default TabRoutes;
