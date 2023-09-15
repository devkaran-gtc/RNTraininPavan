import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'


interface listProps {
    text: any
    id: string;
    onDelete(id: string): void

}

const TaskList = (props: listProps) => {
    return (

        <View style={styles.listText}>

            <Pressable android_ripple={{ color: '#dddddd10' }} onPress={() => props.onDelete(props.id)}>
                <Text style={styles.textStyle} >
                    {props.text}
                </Text>
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({


    listText: {
        backgroundColor: '#8D3DAF',
        marginVertical: 12,
        color: 'white',
        borderRadius: 10
    },

    textStyle: {
        color: 'white',
        padding: 15,
    }

})

export default TaskList