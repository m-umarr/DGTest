import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors,ResponsiveText } from './index';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

const Simpleheader = (props) => {
  return (
    <View style={{...styles.mainContainer,...props.headercontainer}}>
    <View style={styles.mainview}>
        <TouchableOpacity hitSlop={{left:25,right:25,bottom:25,top:25}} onPress={props.onPress?props.onPress:()=>props.navigation.goBack()}>
        <Icon
                          name="left"
                          size={18}
                          color={'black'}
                        
                        />
    </TouchableOpacity>
    <View style={{borderWidth:0,alignSelf:'center'}}>
    <ResponsiveText
               style={styles.title}
                     
                >
                    {props.title}
                </ResponsiveText>
                </View>
                <View></View>
    </View>
    </View>
  )
}

export default Simpleheader

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.statusbarcolor,
       
        borderWidth:0
        // marginTop:Platform.OS=='ios'?0:0

    },
    mainview:{alignItems:'center',flexDirection:'row',borderWidth:0,marginHorizontal:wp(5),paddingTop:hp(1),justifyContent:'space-between'},
    rightarrow:{width:wp(4),height:wp(4)},
    title:{fontSize:16,color:Colors.balckText,fontWeight:'700'}
})