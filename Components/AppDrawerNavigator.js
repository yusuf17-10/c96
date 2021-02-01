import * as React from "react";
import {createDrawerNavigator, CreateDrawerNavigator} from "react-navigation-drawer";
import AppTabNavigator from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";

export const AppDrawerNavigator=createDrawerNavigator({
    HomeScreen:{screen:AppTabNavigator},
    
},

{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"HomeScreen"
}

)