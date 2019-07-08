import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  value: string;
}

// Render individual song (selected) component for song list 
export default class SongTile extends React.Component<Props> {
  public render() {
    return (
      <View style={styles.song}>       
        <Text style={styles.songText}>{this.props.value}</Text>
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
  }
});
    