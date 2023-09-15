import { View, Text, StyleSheet, TextInput, Button, Modal, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

interface inputProps {

    setText: any
    getText: string
    onSubmit(): void
    onCancel(): void
    isVisible: boolean


}

const TaskInput = (props: inputProps) => {


    return (
        <Modal visible={props.isVisible} animationType='slide' >

            <View style={styles.header}>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('./images/goal.png')} style={styles.image} />
                </View>
                <TextInput placeholder='Enter tasks' style={styles.inputText} onChangeText={(text) => { props.setText(text) }} value={props.getText} />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, paddingHorizontal: 40 }}>

                    <Pressable style={styles.button} onPress={() => { props.onSubmit() }} >
                        <Text style={styles.btnText} >Add Task</Text>
                    </Pressable>


                    <Pressable style={styles.button} onPress={() => { props.onCancel() }} >
                        <Text style={styles.btnText} >Cancel</Text>
                    </Pressable>



                </View>

            </View>
        </Modal >
    )
}



const styles = StyleSheet.create({


    header: {
        flex: 1,
        backgroundColor: '#120E43',
        justifyContent: 'center',
    },

    inputText: {
        color: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 10
    },
    image: {
        height: 100,
        width: 100,
        margin: 20,
        tintColor: 'white',
    },
    button: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#8D3DAF'
    },

    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'

    }

})

export default TaskInput