import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colour from '../Constants/Colour';
const Header= (props) =>  {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle} >{props.title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colour.primary
    },

    headerTitle:{
        color:'black',
        fontSize:18,

    }

});

export default Header
