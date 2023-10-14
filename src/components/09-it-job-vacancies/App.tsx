import { View, Text, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import JobList from './JobList';

const AppNavigator = createStackNavigator({
  Home: {
    screen: JobList,
    navigationOptions: {
      title: 'IT Job Vacancies',
    },
  },
});

export default createAppContainer(AppNavigator);
