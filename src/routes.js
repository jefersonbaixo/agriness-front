import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AnimalDetailScreen from './screens/AnimalDetailScreen';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      AnimalDetail: AnimalDetailScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Animal Control',
      },
    },
  ),
);

export default Routes;
