import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaVerde } />
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        //position: 'relative', //<-- por defecto, todos los elementos tienen este tipo de position
        position: 'absolute',
        top: 0,
        right: 0

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute', //<-- es relativo al padre
        // bottom: 0,
        // left: 0,
        // right: 0,
        // top: 0,
        ...StyleSheet.absoluteFillObject //<-- coloca el bottom, top, left y right en 0
    }

})
