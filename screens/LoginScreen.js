import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native-web';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in
    //             navigation.navigate('Home')
    //         }else {
    //             // User is signed out
    //             console.log('you are not logged in')
    //           }
    //     })
    //     return unsubscribe
    // }, []);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('Signed in')
            navigation.navigate('Home')
        }else {
            console.log('signed out')
        }
    });

    const handleSignUp = () => {
       createUserWithEmailAndPassword(auth, email, password) 
       .then(userCredential => {
            const user = userCredential.user;
            console.log(user.email);
       })
       .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password) 
        .then(userCredential => {
             const user = userCredential.user;
             console.log('Logged in with: ' ,user.email);
        })
        .catch(error => alert(error.message))
     }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Email'
                Value={email}
                onChangeText={text =>  setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Password'
                Value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: 700,
        fontSize: 16
    },
})