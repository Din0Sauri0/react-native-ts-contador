import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'


export const DimensionesScreen = () => {
    const {height, width} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50
                }}/>
                <View style={ styles.cajaNaranja }/>
            </View>
            <Text style={ styles.dimencionesScreen }>H: {height} * W: {width}</Text>
        </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
      backgroundColor: '#5856D6',
    //   width: '50%',
      height: '50%',
    },
    cajaNaranja: {
        backgroundColor: 'F0A23B'
    },
    dimencionesScreen: {
        fontSize: 30,
        textAlign: 'center'
    }
});
  
