import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {ResponsiveText, Images, Colors} from './index';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Header = (props, navigation) => {
  return (
    <View style={styles.mainview}>
      <View style={styles.rowview}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.profilepic} style={styles.icons} />
          <ResponsiveText style={styles.nametxt}>{props.name}</ResponsiveText>
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={Images.menu_lines} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainview: {
    borderBottomWidth: 1,
    borderColor: Colors.lineseprator,
    paddingVertical: 10,
  },
  rowview: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {width: wp(15), height: wp(15)},
  nametxt: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: Colors.balckText,
  },
});
