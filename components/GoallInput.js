import React, {useState} from 'react';
import {Vie,TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    return (<View style={styles.inputContainer}>
        <TextInput 
          placeholder="Add your goal" 
          style={styles.input} 
          onChangeText={goalInputHandler} 
          value={enteredGoal}
        />
        <Button title="Add" onPress={props.onAddGoal}/>
      </View>)
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row', 
      justifyContent:'space-between',
      alignItems: 'center'
    },
    input:{
      width: '80%',
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10
    }
});
  
function GoalInput() {}

export default GoalInput;