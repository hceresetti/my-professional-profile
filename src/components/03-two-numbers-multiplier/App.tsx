import { useState } from 'react';

import { Text, View, TextInput, Button } from 'react-native';

import { Card } from 'react-native-paper';

import {styles} from './styles'

export default function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const multiply = () => {
    setResult(num1 * num2)
  }

  return (
    <View style={styles.tile}>
      <Text style={styles.p}>Number Multiplier</Text>
      <Card>
        <TextInput style={styles.tile} placeholder="Input first number" onChangeText={setNum1}/>
        <TextInput style={styles.tile} placeholder="Input second number" onChangeText={setNum2}/>
        <Button title="Multiply" onPress={multiply}/>
        <Text style={styles.p}>{result}</Text>
      </Card>
    </View>
  );
}
