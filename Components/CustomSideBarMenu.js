import * as React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import {DrawerItems} from "react-navigation-drawer";
import firebase from "firebase";


export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.7,marginTop:20}}>
                    <DrawerItems  {...this.props}/>
                </View>

                <View style={{flex:0.2}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.props.navigation.navigate("SignUpLogin")
                        firebase.auth().signOut()
                    }}>
                        <Text style={styles.buttonText}>
                            LOGOUT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
  

    button:{
        backgroundColor:"aqua",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        borderWidth:2,
        marginTop:10

    },
  
    buttonText:{
        fontSize:20,
        fontWeight:"bold"
    }
    
})