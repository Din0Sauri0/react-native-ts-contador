import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <View style={ styles.container }>
            <Text style={ styles.titulo }>
                Contador: {contador}
            </Text>
            <Fab 
                title='+1'
                onPress={ () => setContador(contador + 1) }
            />
            <Fab 
                title='-1'
                onPress={ () => setContador(contador - 1) }
                position='bl'
            />

            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>-1</Text>
                </View>
            </TouchableOpacity> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 45
    }
})
