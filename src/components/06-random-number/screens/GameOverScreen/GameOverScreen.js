import React from "react";
import { View, Text, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of rounds: {props.roundsNum}</Text>
      <Text>Number was: {props.userNum}</Text>
      <Button title="New game" onPress={props.onRestart} />
    </View>
  )
}

export default GameOverScreen;
