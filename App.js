import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
// env 참고 : https://velog.io/@thms200/ExpoReact-Native-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
import getEnvVars from './environment';
const { API_KEY } = getEnvVars();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  };

  const getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      
      // Send to API and get weather!
      getWeather(latitude, longitude);
      setIsLoading(false);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? <Loading /> : null;
}