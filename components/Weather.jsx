import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#000000', '#FFAF7B'],
    title: '안개!',
    subTitle: "Just don't go outside.",
  },
  Thunderstorm: {
    iconName: 'weather-hurricane',
    gradient: ['#544a7d', '#ffd452'],
    title: '뇌우!',
    subTitle: 'Actually, outside of the house',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#3A1C71', '#D76D77', '#FFAF7B'],
    title: '이슬비!',
    subTitle: 'Is like rain, but gay~',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: '비!',
    subTitle: 'For more info look outside',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: '눈!',
    subTitle: 'Do you want to build a snowman? Fuck no.',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#3A1C71', '#D76D77', '#FFAF7B'],
    title: '대기!',
    subTitle: '...',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
    title: '깨끗!',
    subTitle: 'Go get your ass burnt',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: '구름!',
    subTitle: 'I know, fucking boring',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#3A1C71', '#D76D77', '#FFAF7B'],
    title: '안개!',
    subTitle: "It's like you have no glasses on.",
  },
  Dust: {
    iconName: 'weather-windy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '먼지!',
    subTitle: 'Thanks a lot China',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={96}
            name={weatherOptions[condition].iconName}
            color='white'
          />
          <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: '#fff',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: '600',
    color: 'white',
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});