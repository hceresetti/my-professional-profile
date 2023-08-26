import { Text, View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View>
      <View>
        <Text>
          My Professional Profile App
        </Text>
      </View>
      <View>
        <Card>
          <Text>Personal data:</Text>
          <Text>Name: Henry Melo Ceresetti</Text>
          <Text>Age: 21 years old</Text>
        </Card>
      </View>
      <View>     
        <Card>
          <Text>Formation:</Text>
          <Text>AR: 0050832111042</Text>
        </Card>
      </View>
      <View>
        <Card>
          <Text>Experience:</Text>
          <Text>Ao Pharmacêutico da Baixada Santista</Text>
          <Text>From April, 2023 to April, 2023 (1 month)</Text>
          <Text>Fatec Rubens Lara Internal Web Communication Team</Text>
          <Text>From July, 2022 to April, 2023</Text>
        </Card>
      </View>
      <View>
        <Card>
          <Text>Projects:</Text>
          <Text>Alura Tracker Ng (fork)</Text>
          <Text>Most recent commit: August 17, 2023</Text>
          <Text>DIO Spiderverse Angular</Text>
          <Text>Most recent commit: August 18, 2023</Text>
        </Card>
      </View>
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});*/