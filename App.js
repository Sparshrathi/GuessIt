import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';

export default function App() {

  const [userNumber,setUserNumber]=useState();

  const startGameHandler=(selectedNumber)=>{
        setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber){
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess The Number'} />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
