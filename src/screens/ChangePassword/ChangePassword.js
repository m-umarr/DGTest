import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  Colors,
  Simpleheader,
  Icons,
  Button,
  Images,
  InputField,
  ResponsiveText,
  Dropdown,
} from '../../components/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';

const ChangePassword = props => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Toast = useToast();

  const handleChangePassword = () => {
    if (!oldPassword) {
      Toast.show('Enter New Password');
      return;
    }
    if (!newPassword) {
      Toast.show('Enter NewPassword');
      return;
    }
    if (!confirmPassword) {
      Toast.show('Enter Confirm Password');
      return;
    }
    if (confirmPassword != newPassword) {
      Toast.show('Confirm Password Must be Same as new password');
      return;
    }
    // axios({
    //   method:'post',
    //   url:'https://api.integration.psychplus.dev/api/User/ChangePassword',
    //   headers:{
    //     ApiKey:'apIkeYpsycHpluS101'
    //   },
    // data:{
    //   userId: '91',
    //   oldPassword: oldPassword,
    //   newPassword: newPassword,
    //   confirmPassword: confirmPassword,
      
    // }
    // }).then(function (response){
    //   console.log('response',response.data)
    //   // props.navigation.goBack();
    // }).catch(function (error){
    //   console.log('error',error);
    //   Toast.show('Password not Updated', {
    //     type: 'danger',
    //     placement: 'top',
    //     duration: 1000,
    //   });
    // });

var FormData = require('form-data');
var data = new FormData();
data.append('userId', '91');
data.append('oldPassword', oldPassword);
data.append('newPassword', newPassword);
data.append('confirmPassword', confirmPassword);

var config = {
  method: 'post',
  url: 'https://api.integration.psychplus.dev/api/User/ChangePassword',
  headers: { 
    'ApiKey': 'apIkeYpsycHpluS101',
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response));
  Toast.show('Password Updated', {
    type: 'green',
    placement: 'top',
    duration: 500,
  });
  props.navigation.goBack();
})
.catch(function (error) {
  console.log('error',error);
      Toast.show('Password not Updated', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
});
    };

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
      {/* <Simpleheader
        title={'Create Patient'}
        navigation={props.navigation}/> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(20)}}>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Change Password'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Old Password *'}
          </ResponsiveText>
          <InputField
            placeholder={'Enter Old Password'}
            value={oldPassword}
            fontSize={16}
            onChangeText={oldPassword => setOldPassword(oldPassword)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'New Password *'}
          </ResponsiveText>
          <InputField
            placeholder={'Enter New Password'}
            value={newPassword}
            fontSize={16}
            onChangeText={newPassword => setNewPassword(newPassword)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Confirm Password *'}
          </ResponsiveText>
          <InputField
            placeholder={'Re-Enter New Password'}
            value={confirmPassword}
            fontSize={16}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.btnview}>
          <Button title={'Save'} onPress={() => handleChangePassword()} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  inputview: {
    borderWidth: 0,
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    marginHorizontal: wp(5),
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.balckText,
    width: wp(68),
    borderWidth: 0,
  },
  textheading: {
    borderWidth: 0,
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
  headingtxt: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.balckText,
  },
  btnview: {
    marginTop: hp(4),
    borderWidth: 0,
    alignItems: 'center',
    marginHorizontal: wp(4),
    justifyContent: 'center',
  },
});
