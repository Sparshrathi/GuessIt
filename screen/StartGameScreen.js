import React ,{useState,useEffect} from 'react';
import { StyleSheet, Alert, Text, View,TouchableWithoutFeedback,Button,Keyboard,Dimensions, ScrollView,KeyboardAvoidingView} from 'react-native';
import Colour from '../Constants/Colour';
import Card from '../Components/Card ';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import BodyText from '../Components/BobyText';
import TitleText from '../Components/TitleText';
import MainButton from '../Components/MainButton';

const StartGameScreen = props => {

    const [enterValue,setEnterValue]= useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [seletedNumber,setSeletedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4);
    const numberInputHandler= (inputText) =>{

        setEnterValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler= () =>{
        setEnterValue('');
        setConfirmed(false)
    }

    useEffect(() => {
        const updateLayout = () => {
          setButtonWidth(Dimensions.get("window").width / 4);
        };
        Dimensions.addEventListener("change", updateLayout);
        return () => {
          Dimensions.removeEventListener("change", updateLayout);
        };
      });

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
            <BodyText>You Selected </BodyText>
            <NumberContainer>{seletedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(seletedNumber)}>
                START GAME
            </MainButton>
            </Card>)
        }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30} >
            <TouchableWithoutFeedback 
             onPress={() =>{Keyboard.dismiss();}}
            > 
                <View style={styles.screen}>
                <BodyText style={styles.title}>Start a New Game !!</BodyText>
                <Card style={styles.inputContainer}>
                    <TitleText style={styles.text} >Select a Number</TitleText>
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
                    <View style={{width:buttonWidth}}>   
                    <Button title={'Reset'} onPress={resetInputHandler} color={Colour.accent}  />
                        </View>
                        
                        <View style={{width:buttonWidth}}>
                        <Button title={'Confirm'} onPress={confirmInputHandler} color={Colour.primary} />
                        </View>
                        </View>
                </Card>
                {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
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
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },

    inputContainer:{
        width:'80%',
        minWidth:300,
        maxWidth:'95%',
        alignItems:'center',
    },

    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },

    button :{
       //width:100,
       width: Dimensions.get('window').width/4
    },
    
    input:{
        width:50,
        textAlign:'center'
    },

    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    },
    text:{
        fontFamily:'open-sans'
    }

});

export default StartGameScreen
