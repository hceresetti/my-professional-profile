import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/styles';

const PersonalDataScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal data</Text>
      <Text>
        <label htmlFor="name1">Name:</label>
        <Text id="name1">
          Henry <span lang="it-IT">Ceresetti</span>
        </Text>
      </Text>
      <Text>E-mail address: 103071259 plus hceresetti at users dot noreply dot github dot com</Text>
      <Text>Phone: +55 13 3227-6003</Text>
      <br/>
      <Text>
        <Text>
          <label htmlFor="name2">Name:</label>
          <Text id="name2">
            <span lang="pt-BR">Orlando Júnior</span>
          </Text>
          <Text>E-mail address: orlando dot medeiros at fatec dot sp dot gov dot br</Text>
          <Text>Phone: +55 13 3227-6003</Text>
        </Text>
      </Text>
      <br/>
      <Text>
        <label htmlFor="name3">Name:</label>
        <Text id="name3">
          <span lang="pt-BR">Pedro Henrique Affonso</span>
        </Text>
      </Text>
      <Text>E-mail address: pedro dot affonso at fatec dot sp dot gov dot br</Text>
      <Text>Phone: +55 13 3227-6003</Text>
    </View>
  );
};

export default PersonalDataScreen;
