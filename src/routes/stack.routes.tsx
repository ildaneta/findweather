import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Next5Days from "../screens/Next5Days";
import { IForecastData } from "../utils/search.interface";
import { IForecastDay } from "../utils/forecast5days.interface";
import TabRoutes from "./tab.routes";

export type IStackRoutes = {
  Welcome: undefined;
  TabRoutes: undefined;
  Home: undefined;
  Search: undefined;
  Next5Days: {
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
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="Home" component={Home} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Search" component={Search} />
      <Screen name="Next5Days" component={Next5Days} />
    </Navigator>
  );
};

export default StackRoutes;
