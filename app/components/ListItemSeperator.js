import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../config/colours';

export default function ListItemSeperator() {
  return (
    <View style={styles.seperator} />
  )
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colours.light,
  },
});
