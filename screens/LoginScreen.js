import React, {useState} from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        // debugger;
        console.log("Hello")
        //const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
    });

    }

    const handleSignIn = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    return (
        
      <KeyboardAvoidingView style = {styles.container}
      behaviour = "padding">
      <View style={styles.inputContainer}>
        <TextInput
            placeholder = "Email"
            Value ={email}
            onChangeText = {text => setEmail(text)}
            style = {styles.input}
        />
        <TextInput
            placeholder = "Password"
            Value ={password}
            onChangeText = {text => setPassword(text)}
            style = {styles.input}
            secureTextEntry
        />

        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => handleSignIn()}
                style={styles.button}
            >
            <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>handleSignUp()}
                style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}> Register </Text>
            </TouchableOpacity> 

        </View> 
      </KeyboardAvoidingView>
    
    )
  }

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',

    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderWidth:2,
        borderColor:'#0782F9',
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:'16',

    },
    buttonOutlineText:{
        color:'0782F9',
        fontWeight:'700',
        fontSize:'16',

    },
})
