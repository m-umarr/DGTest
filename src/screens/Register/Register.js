import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ScrollView,
} from 'react-native';

import {TextInput, Checkbox} from 'react-native-paper';
import React, {useState} from 'react';
import styles from './styles';
import {Images, ResponsiveText} from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Register = props => {
  const [email, setEmail] = useState('');

  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [checkBox, setCheckbox] = useState(false);

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback
        // style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        <View>
          <StatusBar
            animated={true}
            backgroundColor="#2A68BB"
            barStyle={'light-content'}
            hidden={false}
          />
          <Image source={Images.signinTop} style={styles.signinTop} />
          <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 50}}>
            <View style={{marginHorizontal: wp(5)}}>
              <ResponsiveText style={styles.HeadText}>
                {'Create Account'}
              </ResponsiveText>
              <ResponsiveText style={styles.TextLight}>
                Fill the form to become our member
              </ResponsiveText>

              <View style={{marginTop: hp(4)}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    style={styles.nameInput}
                    defaultValue={email}
                    activeOutlineColor="#2A68BB"
                    placeholder="First Name"
                    placeholderTextColor={'#2A68BB'}
                    mode="outlined"
                    label={'First Name'}
                    underlineColor="transparent"
                    outlineColor="#CEE0F8"
                  />
                  <TextInput
                    style={styles.nameInput}
                    defaultValue={email}
                    activeOutlineColor="#2A68BB"
                    placeholder="Last Name"
                    placeholderTextColor={'#2A68BB'}
                    mode="outlined"
                    label={'Last Name'}
                    underlineColor="transparent"
                    outlineColor="#CEE0F8"
                  />
                </View>

                <TextInput
                  style={styles.txtInput}
                  defaultValue={email}
                  activeOutlineColor="#2A68BB"
                  right={
                    <TextInput.Icon
                      name={'calendar'}
                      onPress={() => console.log('Date of birth')}
                      size={28}
                      color={'#A9C2E3'}
                    />
                  }
                  placeholder="Date of Birth"
                  placeholderTextColor={'#2A68BB'}
                  label="Date of Birth"
                  mode="outlined"
                  underlineColor="transparent"
                  outlineColor="#CEE0F8"
                />
                {/* phone */}
                <TextInput
                  style={styles.txtInput}
                  defaultValue={email}
                  activeOutlineColor="#2A68BB"
                  placeholder="Phone number"
                  placeholderTextColor={'#2A68BB'}
                  mode="outlined"
                  label={'Phone number'}
                  underlineColor="transparent"
                  outlineColor="#CEE0F8"
                />
                {/* email */}
                <TextInput
                  style={styles.txtInput}
                  defaultValue={email}
                  activeOutlineColor="#2A68BB"
                  placeholder="Email address"
                  placeholderTextColor={'#2A68BB'}
                  mode="outlined"
                  label={'Email address'}
                  underlineColor="transparent"
                  outlineColor="#CEE0F8"
                />
                <TextInput
                  style={styles.txtInput}
                  defaultValue={email}
                  activeOutlineColor="#2A68BB"
                  right={
                    <TextInput.Icon
                      name={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      size={28}
                      color={'#A9C2E3'}
                    />
                  }
                  placeholder="Password"
                  placeholderTextColor={'#2A68BB'}
                  label="Password"
                  mode="outlined"
                  underlineColor="transparent"
                  outlineColor="#CEE0F8"
                />
                <TextInput
                  style={styles.txtInput}
                  defaultValue={email}
                  activeOutlineColor="#2A68BB"
                  right={
                    <TextInput.Icon
                      name={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      size={28}
                      color={'#A9C2E3'}
                    />
                  }
                  placeholder="Confirm Password"
                  placeholderTextColor={'#2A68BB'}
                  label="Confirm Password"
                  mode="outlined"
                  underlineColor="transparent"
                  outlineColor="#CEE0F8"
                />
              </View>
              {/* radio button */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: hp(2),
                }}>
                <ResponsiveText
                  style={{
                    color: 'black',

                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {'Do you have a parent/guardian?'}
                </ResponsiveText>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: wp(2),
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setChecked(true);
                    }}>
                    {checked ? (
                      <Image
                        source={Images.radioSelected}
                        style={{width: 20, height: 20}}
                      />
                    ) : (
                      <Image
                        source={Images.radioUnselected}
                        style={{width: 20, height: 20}}
                      />
                    )}
                  </TouchableOpacity>
                  <ResponsiveText style={styles.yesText}>
                    {'Yes'}
                  </ResponsiveText>
                  <TouchableOpacity
                    onPress={() => {
                      setChecked(false);
                    }}
                    style={{marginLeft: 20}}>
                    {!checked ? (
                      <Image
                        source={Images.radioSelected}
                        style={{width: 20, height: 20}}
                      />
                    ) : (
                      <Image
                        source={Images.radioUnselected}
                        style={{width: 20, height: 20}}
                      />
                    )}
                  </TouchableOpacity>
                  <ResponsiveText style={styles.yesText}>{'No'}</ResponsiveText>
                </View>
              </View>

              {/* end radio button */}

              <View style={styles.LastView}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Checkbox
                    status={checkBox ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setCheckbox(!checkBox);
                    }}
                    color="#A9C2E3"
                    uncheckedColor="#CEE0F8"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      width: wp(50),
                    }}>
                    <ResponsiveText
                      style={{
                        color: '#969696',
                        fontSize: 13,
                        fontWeight: '500',
                      }}>
                      {'I agree to electronically sign '}{' '}
                    </ResponsiveText>
                    <ResponsiveText
                      style={{
                        color: 'black',
                        textDecorationLine: 'underline',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      {'Policies & Procedure'}
                    </ResponsiveText>
                  </View>
                </View>
              </View>
              {/* button */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('VerifyEmail')}>
                <ResponsiveText style={styles.buttonText}>
                  Sign In{' '}
                </ResponsiveText>
                <Image source={Images.arrowright} style={styles.arrowStyle} />
              </TouchableOpacity>
              {/* don't have account */}
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Register')
                }></TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignIn')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: hp(3),
                }}>
                <ResponsiveText
                  style={{color: '#969696', fontSize: 16, fontWeight: '500'}}>
                  {'Already have an account?'}{' '}
                </ResponsiveText>
                <ResponsiveText
                  style={{
                    color: '#2A68BB',
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {'Sign In'}
                </ResponsiveText>
              </View>
            </TouchableOpacity>
            <View style={{marginBottom: 300}} />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Register;
