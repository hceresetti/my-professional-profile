import React from "react";

import { View, Text } from "react-native";

import Colors from "../constants/colors";

const NumTile = props => {
  return (
    <View style={styles.tile}>
      <Text style={styles.number}>
        {props.children}
      </Text>
    </View>
  );
};

export default NumTile;
