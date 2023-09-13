import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

interface inputProps {

    setText: any
    getText: string
    onSubmit(): void


}

const TaskInput = (props: inputProps) => {


    return (
        <View style={styles.header}>
            <TextInput placeholder='Enter tasks' style={styles.inputText} onChangeText={(text) => { props.setText(text) }} value={props.getText}
            />
            <Button
                title='Add Task'
                onPress={() => {
                    props.onSubmit()
                }} />
        </View>

    )
}



const styles = StyleSheet.create({


    header: {
        flex: 1,  //allows the view to cover particular area
        flexDirection: 'row',
        //its stretches the view based on the direction of the flex
        alignItems: 'center',   //used to change the alignment on the cross-axis ,its default value is "stretched s"
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    inputText: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 7,
        padding: 10,
    },


})

export default TaskInput