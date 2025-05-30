import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Optional
import { HomePage } from '../pages/HomePage';
import { AdminHome } from '../pages/AdminHome';

const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'AdminHome') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="AdminHome" component={AdminHome} />
      
    </Tab.Navigator>
  );
}
export {BottomTabs}