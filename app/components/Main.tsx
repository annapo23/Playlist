import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Playlist from './Playlist';

let dummyData = [
    {
        playlist: "Roadtrip",
        songs: [],
        color: "blue"
    },
    {
        playlist: "Work",
        songs: [],
        color: "green"
    },
    {
        playlist: "Relaxation",
        songs: [],
        color: "pink"
    }
]

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface State {
  playlistArray: Array<{}>,
  playlistText: string;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      playlistArray: dummyData,
      playlistText: '',
    }
  }

  public render() {
    const { navigation } = this.props;
    
    // After song selection, update dummyData array to include songs selected for that playlist
    if(this.props.navigation.state.params) {
      let i: number = 0;

      while(i < dummyData.length) {
        if(dummyData[i].playlist === this.props.navigation.state.params.playlist) {
          dummyData[i].songs = this.props.navigation.state.params.songs;
        }
        i++;
      }
    }

    // Iterate through playlistArray to render individual playlist component
    let playlists = this.state.playlistArray.map((item:any) => {
        return <Playlist key={+new Date() + Math.random()} value={item} navigation={navigation}/>
    });
    
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}> Playlists </Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
              {playlists}
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
});
