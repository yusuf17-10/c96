import * as React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import {DrawerItems} from "react-navigation-drawer";
import firebase from "firebase";


export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}/>
                </View>

                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("SignUpLogin")
                        firebase.auth().signOut()
                    }}>
                        <Text>
                            LOGOUT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}