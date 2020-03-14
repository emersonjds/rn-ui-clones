import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
