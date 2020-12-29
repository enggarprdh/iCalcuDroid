import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Keypads from '../components/keypads/KeypadPotrait'
import Display from '../components/display/DisplayPotrait';

let newNumber = 0;
let saveNumber = 0;
let result = 0;
let resultTemp = 0;
let lastOperator = '';
let currentDisplay = 0;

const PotraitScreen=()=> {
    const [value, displayNum] = useState(0);
    return (
      <View style={styles.container}>
          <View style={styles.displaySection}>
            <Display number={value} />
          </View>
          <View style={styles.buttonSection}>
            <Keypads onKeyPadsPress={(e)=> {
                let result = renderNumber(e);
                currentDisplay = result;
                displayNum(result);
            }} />
          </View>
      </View>
    );
}

export default PotraitScreen;

renderNumber=(param) => {  
  if(isNumber(param)) {
    if(saveNumber == 0) {
      newNumber = param;
      saveNumber = newNumber;
      newNumber = 0;
      return saveNumber;
    } else {
      saveNumber += param;
      return saveNumber;
    }
  } else {
    switch(param) {
      case "C":
        result = 0;
        newNumber = 0;
        saveNumber = 0;
        resultTemp = 0;
        return 0;
      case "=":
        return calculate(resultTemp, saveNumber, lastOperator);
      case "+-":
        if(saveNumber < 0) {
          return saveNumber = 0 - saveNumber;
        } else {
          return saveNumber = -1 * saveNumber;
        }
      case "%":
        saveNumber = currentDisplay / 100;
        return saveNumber;
      
      default :
        if(result != 0) {
          if(lastOperator != param){
            result = calculate(result, saveNumber, lastOperator);  
          } else {
            result = calculate(result, saveNumber, param);  
          }
        } else {
          if(param == "X" || param == "/") {
            newNumber = 1;
          }
          result = calculate(saveNumber, newNumber, param);
        }    
        lastOperator = param;
        return result;
    }
  }
}

calculate=(val1,val2,operator) => {
  val1 = val1 * 1;
  val2 = val2 * 1;

  if(operator == "+") {
    saveNumber = 0;
    resultTemp = val1 + val2;
  } else if(operator == "-") {
    saveNumber = 0;
    resultTemp = val1 - val2;
  } else if(operator == "X") {
    saveNumber = 0;
    newNumber = 0;
    resultTemp = val1 * val2;
  } else if(operator == "/") {
    saveNumber = 0;
    newNumber = 0;
    resultTemp = val1 / val2;
  } 
  return resultTemp;
}

isNumber=(n) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column'
    },
    displaySection: {
      flex:1
    },
    buttonSection: {
      flex:2
    }
});
