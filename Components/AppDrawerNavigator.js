import * as React from "react";
import {createDrawerNavigator, CreateDrawerNavigator} from "react-navigation-drawer";
import UpdateScreen from "../Screens/UpdateScreen";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";

export const AppDrawerNavigator=createDrawerNavigator({
    HomeScreen:{screen:AppTabNavigator},
    UpdateScreen:{screen:UpdateScreen},   
},

{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"HomeScreen"
}

)