import { NavigationActions } from '@react-navigation/compat';
import { StackActions } from '@react-navigation/native';

const config = {};

function setNavigation(navigation) {
  if (navigation) {
    config.navigation = navigation;
  }
}

function dispatch(action) {
  if (config.navigation && action) {
    config.navigation.dispatch(action);
  }
}

function navigate(routeName, params) {
  if (config.navigation && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigation.dispatch(action);
  }
}

function replace(routeName, params) {
  if (config.navigation && routeName) {
    const action = StackActions.replace({ routeName, params });
    config.navigation.dispatch(action);
  }
}

function goBack() {
  if (config.navigation) {
    let action = NavigationActions.back({});
    config.navigation.dispatch(action);
  }
}

export default {
  dispatch,
  goBack,
  navigate,
  setNavigation,
  replace,
};
