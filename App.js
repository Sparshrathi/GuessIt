import React,{useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GmaeOverScreen from './screen/GmaeOverScreen';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";



const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {

  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  
  const startGameHandler=(selectedNumber)=>{
        setUserNumber(selectedNumber);
        setGuessRounds(0); 
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandler=()=>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <=0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }else if( guessRounds>0 ){
    content = <GmaeOverScreen onRestart={configureNewGameHandler} roundsNumber={guessRounds} userNumber={userNumber}/>;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title={'Guess The Number'} />
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
