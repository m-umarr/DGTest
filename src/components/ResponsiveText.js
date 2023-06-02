import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function ResponsiveText(props) {
  return (
    <Text
      style={[styles.defaultStyle, props.style]}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {

  },
});
