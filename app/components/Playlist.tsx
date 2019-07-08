import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  value: { playlist: string, songs: Array<string>, color: string };
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// Render individual playlist components, and upon clicking on playlist name navigate to its list of songs
export default class Playlist extends React.Component<Props> {
  public render() {
    return (
      <View key={this.props.value.playlist} style={styles.playlist}>
        <Text style={{ backgroundColor: this.props.value.color, width: 15, padding: 10, top: 0, bottom: 10, right: 10 }} ></Text>
        <TouchableOpacity>
          <Text style={styles.playlistName} onPress={() => this.props.navigation.navigate('SongList', {playlist: this.props.value.playlist, songs: this.props.value.songs, color: this.props.value.color})}>{this.props.value.playlist}</Text>
        </TouchableOpacity>
        <Text style={styles.songsLength}>{this.props.value.songs.length}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playlist: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  },
  playlistName: { 
    top: 15,
    paddingLeft: 20,
    borderLeftColor: '#E91E63',
  },
  songsLength: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,    
    bottom: 10,
    right: 10,
  }
});
