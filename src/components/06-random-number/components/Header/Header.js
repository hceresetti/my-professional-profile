import React from "react";
import { View, Text } from "react-native";

import Colors from "./components/06-random-number/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>  
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
