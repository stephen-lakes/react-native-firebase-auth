import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const HomeScreen = () => {
    const handleSignOut = () => {

    }

  return (
    <View style={styles.container}>
      <Text>
        Welcome
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>SignOut</Text>
            </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 16
    },
})