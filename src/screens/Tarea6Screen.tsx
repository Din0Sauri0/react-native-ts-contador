import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Tarea6Screen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada }></View>
        <View style={ styles.cajaNaranja }></View>
        <View style={ styles.cajaAzul }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
    },
    cajaMorada: {
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        flex: 1
    },
    cajaNaranja: {
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        flex: 1
        
    },
    cajaAzul: {
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        flex: 2
    }
})