import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function StartGameScreen() {
    return (
        <View style={styles.screen}>
        <Text>The Game Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        alignItems:'center',
        flex:1
    }
});

export default StartGameScreen
