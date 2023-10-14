import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import './styles.js';

const CurrencyConversor = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);

  const convertCurrency = () => {
    if (!isNaN(amount) && exchangeRate) {
      const converted = (parseFloat(amount) * exchangeRate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount('Invalid Input');
    }
  };

  return (
    <View>
      <Text>Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
        placeholder="Enter amount"
      />

      <Text>From Currency:</Text>
      <TextInput
        value={fromCurrency}
        onChangeText={(text) => setFromCurrency(text)}
        placeholder="e.g., USD"
      />

      <Text>To Currency:</Text>
      <TextInput
        value={toCurrency}
        onChangeText={(text) => setToCurrency(text)}
        placeholder="e.g., EUR"
      />

      <Button title="Convert" onPress={convertCurrency} />

      <Text>Result:</Text>
      <Text>{convertedAmount}</Text>
    </View>
  );
};

export default CurrencyConverter;
