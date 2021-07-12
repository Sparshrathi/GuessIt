import React ,{useState} from 'react';
import { StyleSheet, Alert, Text, View,TouchableWithoutFeedback,Button,Keyboard} from 'react-native';
import Colour from '../Constants/Colour';
import Card from '../Components/Card ';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
const StartGameScreen = props => {

    const [enterValue,setEnterValue]= useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [seletedNumber,setSeletedNumber] = useState();
    const numberInputHandler= (inputText) =>{

        setEnterValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler= () =>{
        setEnterValue('');
        setConfirmed(false)
    }

    const confirmInputHandler=()=>{
            const chosenNumber = parseInt(enterValue);
            if(isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <=0)
            {
                Alert.alert('Invalid Number','Number has to br between 1 to 99',
                [{text:'Okay' , style:'destructive',onPress: resetInputHandler }])
                return;
            }
        Keyboard.dismiss(); 
        setConfirmed(true);
        setSeletedNumber(chosenNumber);
        setEnterValue('');
        }

        let confirmedOutput; 
        if(confirmed){
            confirmedOutput= 
            (<Card style={styles.summaryContainer}>
            <Text>You Selected </Text>
            <NumberContainer>{seletedNumber}</NumberContainer>
            <Button title='Start Game' onPress={() => props.onStartGame(seletedNumber)} />
            </Card>)
        }

    return (
        <TouchableWithoutFeedback 
        onPress={() =>{Keyboard.dismiss();}}
        > 
            <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} 
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  blurOnSubmit 
                  maxLength={2} 
                  onChangeText={numberInputHandler}
                  value={enterValue}
                  />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>   
                <Button title={'Reset'} onPress={resetInputHandler} color={Colour.accent}  />
                    </View>
                    
                    <View style={styles.button}>
                      <Button title={'Confirm'} onPress={confirmInputHandler} color={Colour.primary} />
                      </View>
                      </View>
            </Card>
            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },

    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }

});

export default StartGameScreen
