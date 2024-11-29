import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AboutMe from "./pages/AboutMe";
import MyLanguages from "./pages/MyLanguages";
import NotFound from "./pages/NotFound";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Главная" component={MainTabs} />
        <Stack.Screen name="Не найдено" component={NotFound} />
        <Stack.Screen
          name="*"
          component={NotFound}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="О Себе" component={AboutMe} />
      <Tab.Screen name="Мои языки программирования" component={MyLanguages} />
    </Tab.Navigator>
  );
};

export default App;
