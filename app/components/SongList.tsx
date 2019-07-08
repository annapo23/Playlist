import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import SongTile from './SongTile';

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class SongList extends React.Component<Props> {
  render() {
    let songlist:Array<string> = Object.keys(this.props.navigation.state.params.songs);
    // Iterate through songlist array to render individual song component
    let songs = songlist.map((item) => {
      return <SongTile key={+new Date() + Math.random()} value={item} />
    });

    // Render song list. Upon clicking on back button, navigate to main page display playlists. Upon clicking on plus button, navigate to more songs that can be added to specified playlist
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text onPress={() => this.props.navigation.navigate('Main', {playlist: this.props.navigation.state.params.playlist, songs: songlist})}>◀</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}> {this.props.navigation.state.params.playlist} </Text>
          <TouchableOpacity >
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('SongSelectionList', {songs: songlist})}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ backgroundColor: this.props.navigation.state.params.color }}>
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
  buttonText: {
    color: 'black',
    fontSize: 24,
  }
});
