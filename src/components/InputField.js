import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from './index';
import Icon from 'react-native-vector-icons/AntDesign';

const InputField = props => {
  return (
    <View style={styles.inputview}>
      <TextInput
        autoCapitalize="none"
        placeholder={props.placeholder}
        value={props.value}
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        textAlign={props?.textAlign}
        borderColor={props.borderColor}
        editable={props.editable ? props.editable : true}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : '#94959B'
        }
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        style={{
          height: props.height ? props.height : hp(6.2),
          width: props.width ? props.width : wp(80),
          paddingLeft: 8,
          color: Colors.borderColor,
          fontSize: 15,
          fontWeight: '500',
          backgroundColor:props?.backgroundColor,
          // backgroundColor: props.backgroundColor ? props.backgroundColor : '',

          borderRadius: 5,
        }}
      />
      {props.righticon && (
        <TouchableOpacity onPress={props.onrighticonpress}>
          {/* <Image source={props.righticon} style={{width: wp(7), height: wp(7)}} resizeMode={"contain"}></Image> */}
          <Icon
            name={props.righticon}
            size={18}
            style={{color: props.color ? props.color : 'black'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputview: {
    borderWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
});
