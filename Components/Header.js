import React from 'react'
import { StyleSheet, Text, View,Platform } from 'react-native';
import Colour from '../Constants/Colour';
import TitleText from './TitleText';

const Header= (props) =>  {
    return (
        <View style={{...styles.headerBase,...Platform.select({ios:styles.headerIos,android:styles.headerAndroid})}}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View> 
    )
}

const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Platform.OS==='android' ? Colour.primary :'white'
    },
    headerIos:{
        backgroundColor:'white'
    },
    headerAndroid:{
        backgroundColor:Colour.primary 
    },
    title:{
        color:Platform.OS==='ios' ? Colour.primary : 'white'
    }
});

export default Header
