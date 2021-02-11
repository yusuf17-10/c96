import * as React from "react";
import {Text,View,TouchableOpacity,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import{ Header} from "react-native-elements"



export default class AlarmScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hour:null
        }
    }
    render(){
        return(
            
            <View>

                <Header 
                backgroundColor="#FFAEBC"
                centerComponent={{text:"Alarm Screen",style:{fontWeight:"bold",fontSize:30,color:"black",height:50}}}

                />

           

            <TextInput
            placeholder="Set Alarm"
            style={styles.input}
            onChangeText={(text)=>{
                this.setState({hour:text})
            }}
            />

        
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        padding:20,
        textAlign:"center",
        justifyContent:"center",
        borderRadius:10,
        borderWidth:2,
        marginTop:10
    },
})