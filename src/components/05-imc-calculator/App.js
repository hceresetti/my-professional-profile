import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: Number = 0,
      result: Number = 0,
      textResult: String = "",
      weight: Number = 0,
      width: Number = 0
    }
    this.calculate = this.calculate.bind(this)
  }

  calculate = () => {
    let imc = this.state.weight / (this.state.height * this.state.height)
    let stt = this.state
    switch(stt.result = imc) {
      case 1:
        while(stt.result <= 18.5) {
          stt.textResult = "Very underweight."
        }
        break;
    
      case 2:
        while(stt.result >= 18.5 && stt.result <= 24.9) {
          stt.textResult = "Healthy."
        }
        break;
    
      case 3:
        while(stt.result >= 25 && stt.result <= 29.9) {
          stt.textResult = "Overweight."
        }
        break;
    
      case 4:
        while(stt.result >= 30 && stt.result <= 34.9) {
          stt.textResult = "Degree 1 of Obesity."
        }
        break;
    
      case 5:
        while(stt.result >= 35 && stt.result <= 39.9) {
          stt.textResult = "Degree 2 of Obesity."
        }
        break;
    
      case 6:
        while(stt.result >= 40) {
          stt.textResult = "Morbid."
        }
        break;
    
      default:
        this.setState(s)
        break;
    }
  }

  render() {
    return (
      <View styles={styles.tile}>
        <View styles={styles.input}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Height"
            keyboardType="numeric"
            onChangeText={
              (height) => {
                this.setState(
                  {height}
                )
              }
            }
          />
        
          <TextInput 
            style={styles.input}
            autoCapitalize="none"
            placeholder="Weight"
            keyboardType="numeric"
            onChangeText={
              (width) => {
                this.setState(
                  {weight}
                )
              }
            }
         />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={this.calculate}
      >
        <Text style={styles.btnText}>
          Calculate
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.result}>
        {this.state.result.toFixed(2)}
      </Text>

      <Text
        style={
          [
            styles.result,
            {
              fontSize: 20
            }
          ]
        }
      >
        {this.state.textResult}
      </Text>
      
    </View>
    );
  }
}
