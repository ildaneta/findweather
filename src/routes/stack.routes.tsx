import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Next7Days from "../screens/Next7Days";
import { IForecastData } from "../utils/search.interface";
import { IForecastDay } from "../utils/forecast5days.interface";

export type IStackRoutes = {
  Welcome: undefined;
  Home: undefined;
  Search: undefined;
  Next7Days: {
    forecast: {
      forecastday: Array<IForecastData>;
    };
    forecast5Days: Array<IForecastDay>;
  };
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
      <Screen name="Next7Days" component={Next7Days} />
    </Navigator>
  );
};

export default StackRoutes;
