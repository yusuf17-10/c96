import * as React from "react";
import {Text,View,StyleSheet} from "react-native"
import {Card} from "react-native-elements"
import db from "../config";
import firebase from "firebase";


export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            height:"",
            weight:"",
            bmi:"",
            numberOfLitresOfWaterToDrink:""

        }
    }
    getData=()=>{
        var emailId=firebase.auth().currentUser.email
        db.collection("user").where("emailId", "==",emailId).get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var data = doc.data()
                this.setState({
                    height:data.height,
                    weight:data.weight,
                    lastName:data.lastName,
                    firstName:data.firstName,
                    bmi:data.weight/(data.height*data.height),
                    numberOfLitresOfWaterToDrink:data.weight*0.033

                })
            })
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <View>
                <Card>
                    <Text>
                        {"Hi, "+this.state.firstName+" "+this.state.lastName}
                    </Text>
                </Card>

                <Card>
                    <Text>
                        {"Height: "+this.state.height}
                    </Text>
                </Card>

                <Card>
                    <Text>
                        {"Weight: "+this.state.weight}
                    </Text>
                </Card>

                <Card>
                    <Text>
                        {"BMI: "+this.state.bmi}
                    </Text>
                </Card>

                <Card>
                    <Text>
                        {"You need To Drink "+this.state.numberOfLitresOfWaterToDrink+" litres Of Water Per Day"}
                    </Text>
                </Card>


            </View>
        )
    }
}