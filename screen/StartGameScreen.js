import React from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';
import Colour from './Constants/Colour';
import Card from '../Components/Card ';
import Input from '../Components/Input';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !!</Text>
           <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input}autoCapitalize="none" autoCorrect={false} keyboardType="numeric" blurOnSubmit maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>   
                        <Button title={'Reset'} onPress={() =>{}} color={Colour.accent}  />
                    </View>
                    
                    <View style={styles.button}>
                      <Button title={'Confirm'} onPress={() =>{}} color={Colour.primary} />
                      </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },

    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },

    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },

    button :{
       width:80,
    },
    
    input:{
        width:50,
        textAlign:'center'
    }

});

export default StartGameScreen
