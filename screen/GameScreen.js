import React,{useState,useRef ,useEffect} from 'react'
import { StyleSheet, Alert,Text, View,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card ';
import defaultStyles from '../Constants/default-styles';
import MainButton from '../Components/MainButton';
import BodyText from '../Components/BobyText';

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

const renderListItem=(value, numOfRound)=>(
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
)

const GameScreen=(props)=> {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow=  useRef(1);
    const currentHigh= useRef(100);

    const {userChoice , onGameOver} = props;

    useEffect(()=>{
        if(currentGuess=== userChoice){
            onGameOver(pastGuesses.length);
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
            currentLow.current=currentGuess+1;
        }

        const nextNumber= generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses((curPastGuesses) => [
            nextNumber.toString(),
            ...curPastGuesses,
          ]);
    }

    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.title}>Oppenent's Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this,'lower')} >
                        <Ionicons name="md-remove" size={24} color="white" /> 
                    </MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this,'greater')} >
                        <Ionicons name="md-add" size={24} color="white" /> 
                    </MainButton>
                </Card>    

                <View style={styles.list}>
                <ScrollView>
                {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length-index))}
                </ScrollView>
                </View>
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
},
list: {
    flex:1,
    width: "80%",
  },
listItem: {
    borderColor: "#ccc",
    padding: 15,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default GameScreen
