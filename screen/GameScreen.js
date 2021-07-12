import React,{useState,useRef ,useEffect} from 'react'
import { StyleSheet, Alert,Button, Text, View} from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card ';
import defaultStyles from '../Constants/default-styles';
import MainButton from '../Components/MainButton';

const generateRandomBetween = (min , max ,exclude) =>
{
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max, exclude);
    }else{
        return rndNum;
    }
};

const GameScreen=(props)=> {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoise))
    const [rounds,setRounds]=useState(0);
    const currentLow=  useRef(1);
    const currentHigh= useRef(100);

    const {userChoice , onGameOver} = props;

    useEffect(()=>{
        if(currentGuess=== userChoice){
            onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver]);
    
    const nextGuessHandler=(direction)=>{
        if((direction==='lower' && currentGuess<props.userChoice) ||
         (direction==='greater' && currentGuess>props.userChoice))
         {
            Alert.alert('Don\'t lie!', 'You know that this is wrong',
            [{text:'Sorry', style:'cancel'}]);
            return;
        }

        if(direction==='lower'){
            currentHigh.current=currentGuess;
        }else{
            currentLow.current=currentGuess;
        }

        const nextNumber= generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds+1 );
    }

    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.title}>Oppenent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this,'lower')} >LOWER</MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this,'greater')} >GREATER</MainButton>
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
    width:400,
    maxWidth:'90%'
}
    
})

export default GameScreen
