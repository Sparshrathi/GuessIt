import React,{useState} from 'react'
import { StyleSheet, Alert,Button, Text, View} from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card ';

const generateRandomBetween = (min , max ,exclude) =>
{
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min , max, exclude);
    }else{
        return rndNum;
    }
}


const GameScreen=(props)=> {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoise))

    return (
        <View style={styles.screen}>
            <Text>Oppenent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <Button title="LOWER" onPress={()=>{}} />
                    <Button title="GREATER" onPress={()=>{}} />
                </Card>    
        </View>
    )
}

const styles=StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    padding:10,
},

buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    width:300,
    maxWidth:'80%'
}
    
})

export default GameScreen
