import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconIonic from "react-native-vector-icons/Ionicons";


import Feed from "./screens/Feed";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Feed') {
                            iconName = focused
                                ? 'newspaper'
                                : 'newspaper-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <IconIonic name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false, tabBarBadge: 3 }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarBadge: 5 }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;