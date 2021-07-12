import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colour from '../Constants/Colour';
import TitleText from './TitleText';

const Header= (props) =>  {
    return (
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
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

});

export default Header
