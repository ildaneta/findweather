import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Search from "../screens/Search";

export type IStackRoutes = {
  Welcome: undefined;
  Home: undefined;
  Search: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<IStackRoutes>();

const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default StackRoutes;
