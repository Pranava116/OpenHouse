import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "./pages/LoginPage";
import { LoginCred } from "./pages/LoginCred";
import { HomePage } from "./pages/HomePage";
import { AdminHome } from "./pages/AdminHome";
import { AdminCred } from "./pages/AdminCred";
import { BottomTabs } from "./components/BottomTabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="LoginCred" component={LoginCred} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AdminCred" component={AdminCred} />
        
      </Stack.Navigator>
        <BottomTabs />
    </NavigationContainer>
  );
};
export default App;
