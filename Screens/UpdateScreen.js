import * as React from "react";
import {Text,View,TouchableOpacity,TextInput,StyleSheet,ToastAndroid} from "react-native";
import firebase from "firebase";
import db from "../config";
import {Header} from "react-native-elements"

export default class UpdateScreen extends React.Component{
    
    constructor(){
        super();
        this.state={
            emailId:firebase.auth().currentUser.email,
            firstName:"",
            lastName:"",
            height:"",
            weight:"",
            contact:"",
            docId:""
        }
    }

    getUserDetails=()=>{
        db.collection("user").where("emailId","==",this.state.emailId)
        .get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var data = doc.data()
                this.setState({
                    emailId:data.email,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    height:data.height,
                    weight:data.weight,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }

    updateUser=()=>{
        db.collection("user").doc(this.state.docId)
        .update({
            contact:this.state.contact,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            height:this.state.height,
            weight:this.state.weight,
        })
        ToastAndroid.show("User Updated SuccessFully",ToastAndroid.LONG)
    }


    render(){
        return(

            <View>
             <Header 
                
                backgroundColor="#FFAEBC"
                centerComponent={{text:"Update Your Details",style:{fontWeight:"bold",fontSize:20,color:"black",height:50}}}

                />

                <TextInput
                            style={styles.input}
                            placeholder="FirstName"
                            onChangeText={(text)=>{
                                this.setState({firstName:text})
                            }}
                            value={this.state.firstName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="LastName"
                            onChangeText={(text)=>{
                                this.setState({lastName:text})
                            }}
                            value={this.state.lastName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Height"
                            onChangeText={(text)=>{
                                this.setState({height:text})
                            }}
                            value={this.state.height}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Weight"
                            onChangeText={(text)=>{
                                this.setState({weight:text})
                            }}
                            value={this.state.weight}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Contact"
                            onChangeText={(text)=>{
                                this.setState({contact:text})
                            }}
                            value={this.state.contact}
                        />


                      <TouchableOpacity style={styles.button} onPress={()=>{
                          this.updateUser()
                      }}>
                          <Text style={styles.buttonText}>Update</Text>
                      </TouchableOpacity>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        
        
        

    },
    input:{
        padding:20,
        textAlign:"center",
        justifyContent:"center",
        borderRadius:10,
        borderWidth:2,
        marginTop:20,
        width:"70%",
        alignSelf:"center",
        backgroundColor:"#A0E7E5"
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