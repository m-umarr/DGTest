import { StyleSheet, Image, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from './index';
import Icon from 'react-native-vector-icons/AntDesign';


const CommentsInput = (props) => {
  return (
    <View>
        <View style={styles.inputview}>
        <TextInput
                autoCapitalize='none'
                placeholder={props.placeholder}
                value={props.value}
              onChangeText={props.onChangeText}
                textAlign={props?.textAlign}
                borderColor={props.borderColor}
                multiline={true}
                numberOfLines={6}
                editabl={props.editabl?props.editabl:true}
                
                placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : "#94959B"}
                secureTextEntry={props.secureTextEntry?props.secureTextEntry:false}
                style={{...props.style,height:props.height,width:props.width?props.width:wp(85),paddingLeft:5,color:Colors.balckText,fontSize:16,fontWeight:'500',borderWidth:0,textAlignVertical:'top'}}
            />
    {/* {props.righticon &&
    <TouchableOpacity onPress={props.onrighticonpress}>
                <Icon
                          name={props.righticon}
                          size={18}
                        
                        />
                </TouchableOpacity>
            } */}
        </View>
      
    </View>
  )
}

export default CommentsInput

const styles = StyleSheet.create({
    inputview:{borderWidth:1,

flexDirection:'row',
justifyContent:'space-between',
borderRadius:8,
borderColor:Colors.borderColor,
alignItems:'center',
paddingHorizontal:10
}
})