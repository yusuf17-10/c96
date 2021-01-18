import * as React from "react";
import {
View,Text,StyleSheet,TouchableOpacity,Alert,TextInput,Modal,ScrollView,KeyboardAvoidingView
} from "react-native";

import db from "../config";
import firebase from "firebase";

export default class SignUpLogin extends React.Component{

    constructor(){
        super();
        this.state={
            emailId:"",
            password:"",
            firstName:"",
            lastName:"",
            height:"",
            weight:"",
            contact:"",
            isModalVisible:false,
            confirmPassword:""
        }
    }


    userSignUp=(email,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return(
                Alert.alert("Password Doesn't Match")
            )
        }else{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                return(
                Alert.alert("User Added Succssefully")
                )
            })
            .catch((error)=>{
                return(
                Alert.alert(error.message)
                )
            })
            db.collection("user").add({
                emailId:this.state.emailId,
                contact:this.state.contact,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                height:this.state.height,
                weight:this.state.weight,
            })
        }
    }

    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return(
            Alert.alert("SuccessFully LoggedIn")
            )
        })
        .catch((error)=>{
            return(
            Alert.alert(error.message)
            )
        })
    }

    showModal=()=>{
        return(
            <View>

                <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.isModalVisible}
                >
                    <ScrollView>
                        <KeyboardAvoidingView>

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
                            placeholder="Weight"
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

                        <TextInput
                            style={styles.input}
                            placeholder="EmailId"
                            keyboardType="email-address"
                            onChangeText={(text)=>{
                                    this.setState({emailId:text})
                            }}
                            value={this.state.emailId}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({password:text})
                            }}
                            value={this.state.password}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({confirmPassword:text})
                            }}
                            value={this.state.confirmPassword}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancle</Text>
                        </TouchableOpacity>

                        </KeyboardAvoidingView>
                    </ScrollView>



                </Modal>

            </View>
            
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Water Alarm
                </Text>

                <TextInput
                style={styles.input}
                placeholder="EmailId"
                keyboardType="email-address"
                onChangeText={(text)=>{
                    this.setState({emailId:text})
                }}
                value={this.state.emailId}
                />

                <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({password:text})
                }}
                value={this.state.password}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SignUp</Text>
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
        backgroundColor:"white",
        padding:20,
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