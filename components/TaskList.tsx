import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'


interface listProps {
    text: any
}

const TaskList = (props: listProps) => {
    return (

        <Text style={styles.listText} >
            {props.text}
        </Text>
    )
}


const styles = StyleSheet.create({


    listText: {

        backgroundColor: '#8D3DAF',
        marginVertical: 20,
        color: 'white',
        padding: 15,
        borderRadius: 10
        // textAlign: 'center', // Center horizontally
        // textAlignVertical: 'center', // Center vertically
    }

})

export default TaskList