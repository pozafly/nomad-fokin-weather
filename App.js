import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      
      // Send to API and get weather!
      console.log(latitude, longitude)
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