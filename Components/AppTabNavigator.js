import * as React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "../Screens/HomeScreen";
import AlarmScreen from "../Screens/AlarmScreen";

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen:{screen:HomeScreen},
    AlarmScreen:{screen:AlarmScreen}
})
