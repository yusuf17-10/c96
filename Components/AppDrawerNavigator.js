import * as React from "react";
import {createDrawerNavigator, CreateDrawerNavigator} from "react-navigation-drawer";
import HomeScreen from "../Screens/HomeScreen";
import CustomSideBarMenu from "./CustomSideBarMenu";

export const AppDrawerNavigator=createDrawerNavigator({
    HomeScreen:{screen:HomeScreen},
},

{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"HomeScreen"
}

)