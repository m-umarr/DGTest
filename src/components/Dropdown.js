import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';

const Dropdown = (props) => {

const [focus,setfocus]=useState(false)
  return (
    <View>
    <SelectDropdown
	data={props.data}
	onSelect={props.onSelect}
    buttonStyle={{...props.style,...styles.dropdownStyle,backgroundColor:props.backgroundColor,borderRadius:focus?0:5,width:props.width,borderColor:props.borderColor,height:props.height?props.height:hp(6.5)}}
   renderDropdownIcon={
    ()=>{return(
        <Icon
        name={focus?"up":"down"}
        size={props.size?props.size:17}
        color={'black'}
      />
    )}
   }
  
     dropdownStyle={{borderWidth:0,borderRadius:10}}
    defaultButtonText={props.defaultButtonText}
    
    buttonTextStyle={{color:props.textcolor,borderWidth:0,position:'absolute',right:5,fontSize: props.fontSize?props.fontSize:12,}}
    onFocus={()=>setfocus(!focus)}
    onBlur={()=>setfocus(!focus)}
    
/>
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
    dropdownStyle:{borderWidth:1,width:wp(63),borderRadius:10,
    
}
})