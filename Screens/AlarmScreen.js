import * as React from "react";
import {Text,View,TouchableOpacity,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import{ Header} from "react-native-elements";
import * as Notifications from "expo-notifications";


export default class AlarmScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hour:null
        }
    }

    setAlarm=()=>{
        Notifications.scheduleNotificationAsync({
            content:{
                title: "Water Alarm",body:"You Need To Drink Water"
            },
            trigger:{
                
                hours:this.state.hour,
                repeats:true
            }
        })
    }

    render(){
        return(
            
            <View>

                <Header 
                backgroundColor="#FFAEBC"
                centerComponent={{text:"Alarm Screen",style:{fontWeight:"bold",fontSize:30,color:"black",height:50}}}

                />

           
           <Text>
               Add After How frequently you want the notifications you want the notification
           </Text>

            <TextInput
            placeholder="Set Alarm"
            style={styles.input}
            onChangeText={(text)=>{
                this.setState({hour:text})
            }}
            />

            <TouchableOpacity  style={styles.button} 
            onPress={()=>{
                this.setAlarm()
            }}
            >
                <Text style={styles.buttonText}>
                    Start Alarm
                </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.button} 
            onPress={()=>{
                this.stopAlarm()
            }}
            >
                <Text style={styles.buttonText}>
                    Stop Receivig Alarm
                </Text>
            </TouchableOpacity>
                
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
    button:{
        backgroundColor:"#FBE7C6",
        padding:20,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        borderWidth:2,
        marginTop:10,
        width:"50%",
        alignSelf:"center"

    },
  
    buttonText:{
        fontSize:20,
        fontWeight:"bold"
    }
    
})