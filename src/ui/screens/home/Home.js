import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const CITIES = [
  {city: 'My location', id: 'My location'},
  {city: 'Kyiv', id: 'Kyiv'},
  {city: 'Warsaw', id: 'Warsaw'},
  {city: 'Berlin', id: 'Berlin'},
  {city: 'New York', id: 'New York'},
  {city: 'Los Angeles', id: 'Los Angeles'},
  {city: 'Vienna', id: 'Vienna'},
  {city: 'Lviv', id: 'Lviv'},
  {city: 'Kharkiv', id: 'Kharkiv'},
  {city: 'San Francisco', id: 'San Francisco'},
  {city: 'Boston', id: 'Boston'},
];

class Home extends Component {

  async componentDidMount() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Weather App Location Permissions',
          message: 'Weather App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted) {
        this._loadWeatherByPosition();
      }
    } else {
      this._loadWeatherByPosition();
    }
  }

  _loadWeatherByPosition = () => {
    Geolocation.getCurrentPosition(async (location) => {
      const { coords: { latitude, longitude } } = location;
      await this.props.loadWeather({ latitude, longitude });
    }, (error) => console.log(error),
    {
      enableHighAccuracy: false,
      timeout: 2000,
      maximumAge: 3600000,
    });
  }

  _showCityTemperature = async (city) => {
    switch (city) {
      case 'My location':
        await this._loadWeatherByPosition();
        break;
      default:
        await this.props.loadWeather({ city: encodeURI(city) });
        break;
    }
  }

  _signOut = () => {
    this.props.signOut();
  }

  render() {
    const {
      temperature,
      locationName,
      spinnerState,
      feelsLike,
      min,
      max,
    } =  this.props;
    return (
      <View style={styles.container}>
        <View style={styles.currentLocationWeather}>
          <Text style={styles.text}>
            {locationName}
          </Text>
          <View>
            <Text style={styles.text}>
              {`Temperature in ${locationName}: ${temperature} C`}
            </Text>
            <Text style={styles.text}>
              {`Feels like: ${feelsLike} C`}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {`Min: ${min} C`}
            </Text>
            <Text style={styles.text}>
              {`Max: ${max} C`}
            </Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CITIES}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => this._showCityTemperature(item.city)}>
                <Text style={styles.text}>{item.city}</Text>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={
            <TouchableOpacity
              style={styles.item}
              onPress={() => this._signOut()}>
              <Text style={styles.text}>Sign out</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
        />
        {
          spinnerState.loading ?
            <View style={styles.spinner}>
              <ActivityIndicator color={'#fff'} />
            </View> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    opacity: 0.3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  currentLocationWeather: {
    padding: 10,
    backgroundColor: '#ccc',
  },
  item: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
  },
  text: {
    color: '#333',
  },
});

export default Home;
