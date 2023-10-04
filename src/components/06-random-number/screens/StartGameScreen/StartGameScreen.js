import React, { useState } from "react";
import { View, Text, Button, TouchableWithoutFeedback, Alert, Keyboard } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumTile from "../components/NumTile"
import colors from "../constants/color";

function StartGameScreen(props) {
  const [inputValue, setInputValue] = useState("");
  const [forwarded, setForwarded] = useState(false);
  const [chosenNum, setchosenNum] = useState();

  function numInput(inputText) {
    setInputValue(inputText.replace(/[^0-9]/g, ""));
  }

  function resetInput() {
    setInputValue("");
    setForwarded(false);
  }

  function forwardedInput() {
    const chosenNum = parseInt(inputValue);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("The input number is invalid!", "The number has to be a natural one between 1 and 99", [{ text: "Agreed", style: "destructive", onPress: resetInput }]);
      return;
    }
    setForwarded(true);
    setInputValue("");
    setchosenNum(chosenNum);
    Keyboard.dismiss();
  };

  let forwardedOutput;

  if (forwarded) {
    forwardedOutput = (
      <Card style={styles.summaryTile}>
        <Text>
          You chose
        </Text>
        <NumTile>{chosenNum}</NumTile>
        <Button title="Start Game" onPress={() => props.onStartGame(chosenNum)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

    <View style={styles.screen}>
      <Text style={styles.title}>
        Start a New Game!
      </Text>
      <Card style={styles.inputTile}>
        <Text>
          Choose a Number
        </Text>
        
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numInput}
          value={inputValue}
        />

        <View style={styles.btnTile}>
          <View style={styles.btn}>
            <Button title="Restart" onPress={resetInput} color={Colors.accent} />
          </View>
          <View style={styles.btn}>
            <Button title="Proceed" color={Colors.primary} onPress={forwardInput} />
          </View>
        </View>
      </Card>
      {forwardedOutput}
    </View>
    </TouchableWithoutFeedback>
  );
};
