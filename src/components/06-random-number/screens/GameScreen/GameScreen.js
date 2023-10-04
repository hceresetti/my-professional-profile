import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";

import NumTile from "../components/NumTile";
import Card from "../components/Card";

function genRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max-min)) + min;
  
  if (rndNum === exclude) {
    return genRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

function Gamescreen(props) {
  const [currentNum, setCurrentNum] = useState(genRandomBetween(1, 100, props.userChoice));

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if (currentNum === userChoice) {
      onGameOver(rounds);
    }
  }, [currentNum, userChoice, onGameOver]);
  
  function nextNum(direction) {
    if ((direction === "lower" && currentNum < props.userChoice) || (direction === "greater" && currentNum > props.userChoice)) {
      Alert.alert("DANGER: cheating attempt detected", "You should be prevented to continue playing this game, but you\'ll have countless chances to not be so.", [{text: "I apologize for cheating and I\'ll play it honestly.", style: "cancel"}]);
    return;
    }
    if (direction === "lower") {
      currentHigh.current = currentNum;
    } else {
      currentLow.current = currentNum;
    }
    const nextNum = genRandomBetween(currentLow.current, currentHigh.current, currentNum);
    setCurrentNum(nextNum);
    setRounds(curRounds => curRounds++);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Turn</Text>
      <NumTile>{currentNum}</NumTile>
        <Card style={styles.btnTile}>
          <Button title="LOWER" onPress={nextNum.bind(this, "lower")}/>
          <Button title="GREATER" onPress={nextNum.bind(this, "greater")}/>
        </Card>
    </View>
  )
};

export default Gamescreen;
