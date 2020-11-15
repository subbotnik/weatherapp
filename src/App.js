import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { connect } from 'react-redux';
//import SplashScreen from 'react-native-splash-screen';
import { isSignedInSelector } from '~/modules/auth/selectors';

import RootNavigation, { NavigationService } from '~/navigation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  navigationRef = React.createRef();

  componentDidMount() {
    //SplashScreen.hide();
    NavigationService.setNavigation(
      this.navigationRef.current
    );
  }

  render() {
    return <RootNavigation ref={this.navigationRef} {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isSignedIn: isSignedInSelector(state),
  };
}

export default connect(mapStateToProps, () => ({}))(App);
