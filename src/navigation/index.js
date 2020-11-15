import React, { forwardRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './utils/NavigationService';

import HomeScreen from '~/ui/screens/home';
import SignInScreen from '~/ui/screens/signIn';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

function RootStack({ isSignedIn }, ref) {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          isSignedIn ? 
            <Stack.Screen name="Main" component={MainStack} /> :
            <Stack.Screen name="Auth" component={AuthStack} /> 
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export { NavigationService };
export default forwardRef(RootStack);
