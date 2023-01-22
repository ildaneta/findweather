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

interface IStackParam {
  initialRoute: keyof IStackRoutes;
}

const StackRoutes = ({ initialRoute }: IStackParam): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default StackRoutes;
