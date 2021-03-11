import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet,Image} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      password:''
    }
  }

signUp=(emailId, password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
return alert("user Successfuly Added ")
})
.catch((error)=> {
var errorCode = error.code;
var errorMessage = error.message;
return alert(errorMessage)
})
}

login=(emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password).then((response)=>{
return alert("Successfuly Login")
})
.catch((error)=> {
var errorCode = error.code;
var errorMessage = error.message;
return alert(errorMessage)
})
}

  render(){
    return(
      <View style={{backgroundColor:'orange',marginTop:30}}>


          <Text style={styles.title}>  Bater System </Text>
      <Image
style={styles.image} 
source={require('../assets/images.png')}/>

     <TextInput
          style={styles.TextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
         <TextInput
          style={styles.TextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
       
  
          
        <TouchableOpacity
            style={styles.signButton}
            onPress={()=>{
              this.login(this.state.emailId, this.state.password)
            }}
          >
          <Text style={styles.signup}>login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signButton}
            onPress={()=>{
              this.signUp(this.state.emailId, this.state.password)}
            }
          >
          <Text style={styles.signup}>sign up</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

 title :{
   fontSize:50,
   fontWeight:'100',
   paddingBottom:30,
   color : '#ff3d00'
 },
 TextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 signButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:2,
   marginTop:30,
   marginLeft:70,
  backgroundColor:'white'
 },
 signup:{
   color:'red',
   fontSize:15,
   fontWeight:'bold'
 },
image:{
width: 150,
height: 130,
marginTop: 20,
marginLeft: 100,
},

})
