import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

const DisplayPotrait =(props)=> {
        return(
            <View style={styles.container}>
                <Text style={styles.displayFont}>{props.number}</Text>
            </View>
        );
};

export default DisplayPotrait;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000000'
    },
    displayFont: {
        color:'#FFFFFF',
        marginVertical:170,
        fontSize:64,
        textAlign:'right'
    }
});