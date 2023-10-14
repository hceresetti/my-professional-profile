import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const initialAds = [
  { id: '1', title: 'Ad 1', description: 'Product Ad 1' },
  { id: '2', title: 'Ad 2', description: 'Product Ad 2' },
  { id: '3', title: 'Ad 3', description: 'Product Ad 3' }
];

const Advertisement = ({ title, description }) => (
  <View style={styles.adContainer}>
    <Text style={styles.adTitle}>{title}</Text>
    <Text style={styles.adDescription}>{description}</Text>
  </View>
);

const AdsScreen = ({ route }) => {
  const { ad } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Advertisement title={ad.title} description={ad.description} />
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {initialAds.map((ad) => (
          <Stack.Screen
            key={ad.id}
            name={`Ad${ad.id}`}
            component={AdsScreen}
            initialParams={{ ad }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [ads, setAds] = useState(initialAds);

  useEffect(() => {
    fetch('https://your-api-endpoint.com/ads')
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Product Advertisements</Text>
      {ads.map((ad) => (
        <View key={ad.id} style={styles.adContainer}>
          <Text style={styles.adTitle}>{ad.title}</Text>
          <Text style={styles.adDescription}>{ad.description}</Text>
          <Button
            title={`View ${ad.title}`}
            onPress={() => navigation.navigate(`Ad${ad.id}`, { ad })}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
