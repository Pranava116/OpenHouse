import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "./pages/LoginPage";
import { LoginCred } from "./pages/LoginCred";
import { HomePage } from "./pages/HomePage";
import { AdminCred } from "./pages/AdminCred";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="AdminCred" component={AdminCred} />
        <Stack.Screen name="LoginCred" component={LoginCred} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
