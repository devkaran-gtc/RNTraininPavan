import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App2 = () => {
    return (
        <View style={styles.mainContainer}>

            <View style={{ backgroundColor: 'red', flex: 1 }}><Text>Hello</Text></View>
            <View style={{ backgroundColor: 'blue', flex: 1 }}><Text>Hello</Text></View>
            <View style={{ backgroundColor: 'green', flex: 1 }}><Text>Hello</Text></View>


        </View>
    )
}


const styles = StyleSheet.create({

    mainContainer: {

        flexDirection: 'row',
        height: '30%',
        width: '100%',
        backgroundColor: 'black',
        padding: 10
    },

})

export default App2