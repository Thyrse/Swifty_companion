import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "src/components/Homepage";
import ProfileScreen from "src/components/profile";
import SearchScreen from "src/components/searchpage";

const Stack = createStackNavigator();

export type Props = {
  token: any;
};

const NavigationStack: React.FC<Props> = ({ token }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} token={token} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
