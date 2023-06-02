import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
const Icons = (props) => {
  return (
    <View>
        <Image source={props.icon} style={{...styles.icons,...props.style}} resizeMode={props.resizeMode}/>

    </View>
  )
}

export default Icons

const styles = StyleSheet.create({
    icons:{width:wp(8),height:wp(8)},

})