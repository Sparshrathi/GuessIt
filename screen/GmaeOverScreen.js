import React from 'react'
import {View,Text,StyleSheet, Button,Image} from 'react-native'
import BodyText from '../Components/BobyText'
import TitleText from '../Components/TitleText'
import Colour from '../Constants/Colour'
import MainButton from '../Components/MainButton'

const GmaeOverScreen= (props)=> {
    return (
      <View style={styles.screen}>
        <TitleText>The Game is Over!!</TitleText>
        <View style={styles.imageContainer}>        
        <Image 
        source={require('../assets/success.png')} 
        // source={{uri:'https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}} 
        style={styles.image} resizeMode="cover" />
        
        </View>
          <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed {''} 
            <Text style={styles.highlight}>{props.roundsNumber}</Text>
             {' '}rounds guess the number {' '} 
            <Text style={styles.highlight}>{props.userNumber}</Text> 
          </BodyText>
          </View>
          <MainButton onPress={props.onRestart}> NEW GAME </MainButton>
        </View>
    )
}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
      width:'100%',
      height:'100%'
    },
    imageContainer:{
      borderRadius:150,
      borderWidth:3,
      borderColor:'black',
      width:300,
      height:300,
      overflow:'hidden',
      marginVertical:30
    },
    resultContainer:{
      marginHorizontal:30,
      marginVertical:15
    },
    resultText:{
      textAlign:'center',
      fontSize:20
    },
    highlight:{
      color:Colour.primary,
      fontFamily:'open-sans-bold'
    }
})

export default GmaeOverScreen
