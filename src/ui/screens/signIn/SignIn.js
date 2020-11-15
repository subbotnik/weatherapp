import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  _onSignIn = () => {
    this.props.signIn();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.signIn} onPress={this._onSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  signIn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    padding: 10,
  },
});

export default SignIn;