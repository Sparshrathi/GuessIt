import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guess The Number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
