import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export interface Props {
  checked: boolean;
  selectSongs: Function;
  value: string;
}

// Render individual song (selected/unselected) components for song selection list
export default class SongSelectionTile extends React.Component<Props> {
  toggleSong() {
    this.props.selectSongs(this.props.value);
  }
    
  public render() {
    return (
      <View style={styles.song}>       
        <TouchableOpacity>
          <Text style={styles.songText} onPress={() => this.toggleSong()}>{this.props.value}</Text>
        </TouchableOpacity>
        <Text style={styles.selectSong}>{this.props.checked ? '✓' : ''}</Text>            
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  song: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  songText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  selectSong: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'right',
    right: 10,
    padding: 10,
    top: 10,
    bottom: 10,
  }
});
    