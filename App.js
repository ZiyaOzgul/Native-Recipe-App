import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/cookStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/App/HomePage";
import CategoryPage from "./src/App/CategoryPage";
import CookPage from "./src/App/CookPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="category" component={CategoryPage} />
          <Stack.Screen name="cookPage" component={CookPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
