import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './HomeScreen'
import DetailScreen from './TaskDetailScreen'

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  DetailScreen: {
    screen: DetailScreen
  }
})


export default createAppContainer(AppNavigator)