import React from 'react'
import { StyleSheet, Text,View} from 'react-native';
import Colour from '../Constants/Colour';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderColor:Colour.accent,
        borderRadius:10,
        borderWidth:2,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },

    number:{
        color:Colour.accent,
        fontSize:22
    }

}) 

export default NumberContainer
