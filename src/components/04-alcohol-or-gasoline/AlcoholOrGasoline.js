import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const FuelComparison = () => {
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateComparison = () => {
    const ethanolPriceFloat = parseFloat(ethanolPrice);
    const gasolinePriceFloat = parseFloat(gasolinePrice);

    if (!isNaN(ethanolPriceFloat) && !isNaN(gasolinePriceFloat)) {
      const comparisonResult = ethanolPriceFloat / gasolinePriceFloat;
      setResult(comparisonResult < 0.7 ? 'Ethanol is better' : 'Gasoline is better');
    } else {
      setResult('Please enter valid prices');
    }
  };

  return (
    <View>
      <Text>Enter the price of 1 liter of ethanol:</Text>
      <TextInput
        placeholder="Ethanol Price"
        value={ethanolPrice}
        onChangeText={text => setEthanolPrice(text)}
        keyboardType="numeric"
      />

      <Text>Enter the price of 1 liter of gasoline:</Text>
      <TextInput
        placeholder="Gasoline Price"
        value={gasolinePrice}
        onChangeText={text => setGasolinePrice(text)}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculateComparison} />

      <Text>Result: {result}</Text>
    </View>
  );
};

export default AlcoholOrGasoline;
