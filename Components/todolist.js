import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoList({props, pressHandler}){
   
    return(
        <TouchableOpacity onPress={() => pressHandler(props.key)}>
            <Text style={styles.item}>{props.text}</Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
});