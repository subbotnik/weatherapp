import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { loadWeather } from '~/modules/home/actions';
import { signOut } from '~/modules/auth/actions';
import {
  weatherSelector, 
  weatherSpinnerStateSelector,
  locationNameSelector,
  temperatureSelector,
  feelsLikeSelector,
  minTemperatureSelector,
  maxTemperatureSelector,
} from '~/modules/home/selectors';

export default connect(
  state => ({
    weather: weatherSelector(state),
    locationName: locationNameSelector(state),
    temperature: temperatureSelector(state),
    feelsLike: feelsLikeSelector(state),
    min: minTemperatureSelector(state),
    max: maxTemperatureSelector(state),
    spinnerState: weatherSpinnerStateSelector(state),
  }),
  dispatch => ({
    loadWeather: bindActionCreators(loadWeather.request, dispatch),
    signOut: bindActionCreators(signOut.request, dispatch),
  })
)(Home);
