import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import SongSelectionTile from './SongSelectionTile';

const dummyData = ["Mamma Mia", "Bohemian Rhapsody", "Enter Sandman", "Happy"];

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface State {
  songArray: Array<string>,
  songObj: {[item: string]: boolean};
}

export default class SongsSelection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      songArray: dummyData,
      songObj: {},
    }
  }

  // Check if any selected songs
  componentDidMount() {
    this.props.navigation.state.params.songs.map((item:string) => {
      this.state.songObj[item] = true
    })
    this.setState({
      songObj: this.state.songObj
    })
  }

  // Select/unselect songs
  selectSongs(data:string) {
    let songList:Array<string> = Object.keys(this.state.songObj);
    if(songList.includes(data)) {
      delete this.state.songObj[data]
    } else {
      this.state.songObj[data] = true;
    }
    this.setState({
      songObj: this.state.songObj
    });
  };

  public render() {
    // Iterate through songArray to render all individual songs (selected/unselected), and display selected/unselected status
    let songs = this.state.songArray.map((item) => {
      return <SongSelectionTile key={+new Date() + Math.random()} value={item} checked={this.state.songObj[item]} selectSongs={this.selectSongs.bind(this)}/>
    });

    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}> Song Selection </Text>
              <TouchableOpacity>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('SongList', {songs: this.state.songObj})}>Done</Text>
              </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollContainer}>
            {songs}
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderTopWidth: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#ddd",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  headerText: {
    color: 'black',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  }
});
