import LightRainPNG from "../assets/light-rain.png";
import LightRainMiddlePNG from "../assets/light-rain-middle.png";
import LightRainNightPNG from "../assets/light-rain-night.png";

import RainingPNG from "../assets/raining.png";
import RainingNightPNG from "../assets/raining-night.png";
import RainingMiddlePNG from "../assets/raining-middle.png";

import HeavyRainingPNG from "../assets/heavy-raining.png";
import HeavyRainingMiddlePNG from "../assets/heavy-raining-middle.png";
import HeavyRainingNightPNG from "../assets/heavy-raining-night.png";

import WaterdropPNG from "../assets/waterdrop.png";
import WaterdropMiddlePNG from "../assets/waterdrop-middle.png";
import WaterdropNightPNG from "../assets/waterdrop-night.png";

import RainingAndThunderPNG from "../assets/raining-and-thunder.png";

import HeavyRainingAndThunderPNG from "../assets/heavy-raining-and-thunder.png";
import HeavyRainingAndThunderMiddlePNG from "../assets/heavy-raining-and-thunder-middle.png";
import HeavyRainingAndThunderNightPNG from "../assets/heavy-raining-and-thunder-night.png";

import ThunderPNG from "../assets/thunder.png";
import ThunderMiddlePNG from "../assets/thunder-middle.png";
import ThunderNightPNG from "../assets/thunder-night.png";

import HailstonePNG from "../assets/hailstone.png";
import HailstoneMiddlePNG from "../assets/hailstone-middle.png";
import HailstoneNightPNG from "../assets/hailstone-night.png";

import CloudPNG from "../assets/cloud.png";

import SunPNG from "../assets/sun.png";

import NightPNG from "../assets/night.png";

import FogPNG from "../assets/fog.png";
import FogMiddlePNG from "../assets/fog-middle.png";
import FogNightPNG from "../assets/fog-night.png";

import IcyFogPNG from "../assets/icy-fog.png";
import IcyFogMiddlePNG from "../assets/icy-fog-middle.png";
import IcyFogNightPNG from "../assets/icy-fog-night.png";

import MidSnowFastWindsPNG from "../assets/mid-snow-fast-winds.png";

import FreezingHeavyRainingPNG from "../assets/freezing-heavy-raining.png";
import FreezingHeavyRainingMiddlePNG from "../assets/freezing-heavy-raining-middle.png";
import FreezingHeavyRainingNightPNG from "../assets/freezing-heavy-raining-night.png";

import FreezingLightRainPNG from "../assets/freezing-light-rain.png";
import FreezingLightRainMiddlePNG from "../assets/freezing-light-rain-middle.png";
import FreezingLightRainNightPNG from "../assets/freezing-light-rain-night.png";

import FreezingRainingPNG from "../assets/freezing-raining.png";
import FreezingRainingNightPNG from "../assets/freezing-raining-night.png";
import FreezingRainingMiddlePNG from "../assets/freezing-raining-middle.png";

import BlizzardPNG from "../assets/blizzard.png";
import BlizzardMiddlePNG from "../assets/blizzard-middle.png";
import BlizzardNightPNG from "../assets/blizzard-night.png";

import SnowingPNG from "../assets/snowing.png";
import SnowingMiddlePNG from "../assets/snowing-middle.png";
import SnowingNightPNG from "../assets/snowing-night.png";

import SnowLightRainPNG from "../assets/snow-light-rain.png";
import SnowLightRainMiddlePNG from "../assets/snow-light-rain-middle.png";
import SnowLightRainNightPNG from "../assets/snow-light-rain-night.png";

import SnowHeavyRainingPNG from "../assets/snow-heavy-raining.png";
import SnowHeavyRainingMiddlePNG from "../assets/snow-heavy-raining-middle.png";
import SnowHeavyRainingNightPNG from "../assets/snow-heavy-raining-night.png";

import SnowWithThunderPNG from "../assets/snow-with-thunder.png";

import SnowPNG from "../assets/snow.png";

import SandDustCloudPNG from "../assets/sand-dust-cloud.png";

import VolcanicAshCloud from "../assets/volcanic-ash-cloud.png";

import TornadoPNG from "../assets/tornado.png";

import SandDustWhirls from "../assets/sand-dust-whirls.png";

import Squalls from "../assets/squalls.png";

const currentHour = new Date().getHours();

const isMiddle =
  (currentHour >= 3 && currentHour < 6) ||
  (currentHour >= 16 && currentHour < 18);
const isMorning = currentHour >= 6 && currentHour <= 15;

export const forecastConditionsIcons = (weatherCondition: string) => {
  switch (weatherCondition) {
    case "Chuvisco":
    case "Chuva leve":
    case "Chuva fraca":
    case "Chuva e garoa":
    case "Chuvisco irregular":
    case "Chuva fraca irregular":
    case "Garoa de intensidade leve":
      if (isMorning) {
        LightRainPNG;
      } else if (isMiddle) {
        return LightRainMiddlePNG;
      } else {
        return LightRainNightPNG;
      }
    case "Chuva":
    case "Chuva de banho":
    case "Chuva moderada":
    case "Tempestade irregular":
    case "Períodos de chuva moderada":
    case "Possibilidade de chuva irregular":
      if (isMorning) {
        return RainingPNG;
      } else if (isMiddle) {
        return RainingMiddlePNG;
      } else {
        return RainingNightPNG;
      }
    case "Chuva forte":
    case "Chuva extrema":
    case "Chuva torrencial":
    case "Chuva muito forte":
    case "Chuva forte e garoa":
    case "Períodos de chuva forte":
    case "Chuva de forte intensidade":
    case "Garoa de forte intensidade":
      if (isMorning) {
        return HeavyRainingPNG;
      } else if (isMiddle) {
        return HeavyRainingMiddlePNG;
      } else {
        return HeavyRainingNightPNG;
      }
    case "Aguaceiros fracos":
    case "Aguaceiros moderados ou fortes":
    case "Chuva de chuva de intensidade leve":
      if (isMorning) {
        return WaterdropPNG;
      } else if (isMiddle) {
        return WaterdropMiddlePNG;
      } else {
        return WaterdropNightPNG;
      }
    case "Chuva fraca irregular com trovoada":
    case "Chuva torrencial":
    case "Leve tempestade":
    case "Trovoada com garoa":
    case "Trovoada com chuva leve":
    case "Trovoada com garoa leve":
    case "Trovoada com garoa forte":
      return RainingAndThunderPNG;
    case "Forte tempestade":
    case "Trovoada com chuva":
    case "Chuva moderada ou forte com trovoada":
    case "Trovoada com chuva forte":
      if (isMorning) {
        return HeavyRainingAndThunderPNG;
      } else if (isMiddle) {
        return HeavyRainingAndThunderMiddlePNG;
      } else {
        return HeavyRainingAndThunderNightPNG;
      }
    case "Trovoada":
    case "Possibilidade de trovoada":
      if (isMorning) {
        return ThunderPNG;
      } else if (isMiddle) {
        return ThunderMiddlePNG;
      } else {
        return ThunderNightPNG;
      }
    case "Granizo":
    case "Chuva de granizo":
    case "Aguaceiros fracos com granizo":
    case "Aguaceiros moderados ou fortes com granizo":
      if (isMorning) {
        return HailstonePNG;
      } else if (isMiddle) {
        return HailstoneMiddlePNG;
      } else {
        return HailstoneNightPNG;
      }
    case "Nublado":
    case "Encoberto":
    case "Poucas nuvens":
    case "Nuvens quebradas":
    case "Nuvens dispersas":
    case "Céu pouco nublado":
    case "Parcialmente nublado":
      return CloudPNG;
    case "Sol":
      return SunPNG;
    case "Céu limpo":
      if (isMorning) {
        return CloudPNG;
      } else if (isMiddle) {
        return CloudPNG;
      } else {
        return NightPNG;
      }
    case "Neblina":
    case "Nevoeiro":
    case "Névoa":
      if (isMorning) {
        return FogPNG;
      } else if (isMiddle) {
        return FogMiddlePNG;
      } else {
        return FogNightPNG;
      }
    case "Nevoeiro gelado":
      if (isMorning) {
        return IcyFogPNG;
      } else if (isMiddle) {
        return IcyFogMiddlePNG;
      } else {
        return IcyFogNightPNG;
      }
    case "Rajadas de vento com neve":
      return MidSnowFastWindsPNG;
    case "Chuva congelante":
    case "Chuva gelada moderada ou forte":
      if (isMorning) {
        return FreezingHeavyRainingPNG;
      } else if (isMiddle) {
        return FreezingHeavyRainingMiddlePNG;
      } else {
        return FreezingHeavyRainingNightPNG;
      }
    case "Chuvisco gelado":
    case "Chuva fraca e gelada":
      if (isMorning) {
        return FreezingLightRainPNG;
      } else if (isMiddle) {
        return FreezingLightRainMiddlePNG;
      } else {
        return FreezingLightRainNightPNG;
      }
    case "Chuvisco forte gelado":
    case "Possibilidade de chuvisco gelado irregular":
      if (isMorning) {
        return FreezingRainingPNG;
      } else if (isMiddle) {
        return FreezingRainingMiddlePNG;
      } else {
        return FreezingRainingNightPNG;
      }
    case "Nevasca":
    case "Chuva de neve":
      if (isMorning) {
        return BlizzardPNG;
      } else if (isMiddle) {
        return BlizzardMiddlePNG;
      } else {
        return BlizzardNightPNG;
      }
    case "Neve":
    case "Neve fraca":
    case "Queda de neve fraca":
    case "Queda de neve moderada":
    case "Queda de neve irregular e fraca":
    case "Possibilidade de neve irregular":
    case "Queda de neve moderada e irregular":
    case "Possibilidade de neve molhada irregular":
      if (isMorning) {
        return SnowingPNG;
      } else if (isMiddle) {
        return SnowingMiddlePNG;
      } else {
        return SnowingNightPNG;
      }
    case "Chuva fraca com neve":
    case "Chuva fraca e neve":
    case "Chuva de neve leve":
    case "Aguaceiros fracos com neve":
    case "Possibilidade de chuvisco gelado irregular":
      if (isMorning) {
        return SnowLightRainPNG;
      } else if (isMiddle) {
        return SnowLightRainMiddlePNG;
      } else {
        return SnowLightRainNightPNG;
      }
    case "Chuva e neve":
    case "Chuva forte de neve":
    case "Aguaceiros fracos com neve":
    case "Chuva forte ou moderada com neve":
    case "Aguaceiros moderados ou fortes com neve":
      if (isMorning) {
        return SnowHeavyRainingPNG;
      } else if (isMiddle) {
        return SnowHeavyRainingMiddlePNG;
      } else {
        return SnowHeavyRainingNightPNG;
      }
    case "Neve fraca irregular com trovoada":
    case "Neve moderada ou forte com trovoada":
      return SnowWithThunderPNG;
    case "Neve intensa":
    case "Neve pesada":
    case "Possibilidade de neve irregular":
    case "Possibilidade de neve molhada irregular":
      return SnowPNG;
    case "Pó":
    case "Areia":
      return SandDustCloudPNG;
    case "Cinza vulcanica":
      return VolcanicAshCloud;
    case "Tornado":
      return TornadoPNG;
    case "Confusão":
    case "Redemoinhos de areia/poeira":
      return SandDustWhirls;
    case "Rajadas":
      return Squalls;
    default:
      return CloudPNG;
  }
};
