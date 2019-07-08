import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './app/components/Main';
import SongList from './app/components/SongList';
import SongSelectionList from './app/components/SongSelectionList'

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  SongList: { screen: SongList },
  SongSelectionList: {screen: SongSelectionList}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;