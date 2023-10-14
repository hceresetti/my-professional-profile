import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {styles} from "./styles"

import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default App = () => {
  const [userNum, setUserNum] = useState();
  const [numRounds, setNumRounds] = useState(0);

  const createNewGame = () => {
    setNumRounds(0);
    setUserNum(null);
  }

  const startGame = (chosenNum) => {
    setUserNum(chosenNum);
  }

  const gameOver = numOfRounds => {
    setNumRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGame} />;

  if (userNum && numRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOver} />;
  } else if (numRounds > 0) {
    content = <GameOverScreen roundsNum={numRounds} userNum={userNum}> onRestart={createNewGame} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Input a number" />
      {content}
    </View>
  );
}
