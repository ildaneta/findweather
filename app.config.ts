import { version } from "./package.json"

module.exports = {
  expo: {
    name: "FindWeather",
    slug: "FindWeather",
    version: version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#1B1D22"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.FindWeather"
    },
    android: {
      package: "com.FindWeather"
    }
  }
}
