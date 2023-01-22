import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_FIRST_TIME } from "../storage/storage.config";
import { ActivityIndicator } from "react-native";

const Routes = (): JSX.Element => {
  const [isUserFirstTime, setIsUserFirtTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserFirstTime = async () => {
      setIsLoading(true);

      await AsyncStorage.getItem(USER_FIRST_TIME)
        .then((res) => {
          setIsUserFirtTime(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error getting USER_FIRST_TIME from storage: ", error);
          setIsLoading(false);
        });
    };

    getUserFirstTime();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="small" color="black" />;
  }

  return (
    <NavigationContainer>
      <StackRoutes initialRoute={isUserFirstTime ? "Home" : "Welcome"} />
    </NavigationContainer>
  );
};

export default Routes;
