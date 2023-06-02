import {
  View,
  Image,
  StatusBar,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import React, {Fragment, useState} from 'react';
import axios from 'axios';
import {Images, ResponsiveText} from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EmailRegex} from '../../constants/regex';
import {useToast} from 'react-native-toast-notifications';

const GetStarted = props => {
  const [email, setEmail] = useState('drtest1@mailinator.com');
  const [password, setPassword] = useState('Asdf123@');
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const toast = useToast();

  const handleSignIn = () => {
    if (!email) {
      toast.show('Enter Email', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
      return;
    }
    if (EmailRegex.test(email) === false) {
      toast.show('Enter Valid Email', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
      return;
    }
    if (!password) {
      toast.show('Enter Password', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
      return;
    }

    var data = JSON.stringify({
      "username": email,
      "password": password,
      "rememberMe": true,
      "deviceType": "",
      "fcmToken": ""
    });
    
    var config = {
      method: 'post',
      url: 'https://api.integration.psychplus.dev/api/user/Login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      props.navigation.navigate('BottomTab');
    })
    .catch(function (error) {
      console.log(error);
      toast.show('Invalid Email or Password', {
            type: 'danger',
            placement: 'top',
            duration: 1000,
          });
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.SafeAreaView1} />
      <StatusBar
        animated={true}
        backgroundColor="#2A68BB"
        barStyle={'light-content'}
        hidden={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          {/* <ActivityIndicator size="large" color="#2A68BB" animating={false} /> */}
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.SafeAreaView2}>
              <View style={styles.mainView}>
                <Image source={Images.Sign_In} style={styles.onBoarding} />
                <View>
                  <View style={styles.welcome}>
                    {/* <ResponsiveText style={styles.welcomeText}>
                  {'Let’s get started'}
                </ResponsiveText> */}
                    <ResponsiveText style={styles.credentials}>
                      {'Enter your credentials to login'}
                    </ResponsiveText>

                    <View style={{paddingHorizontal: wp(5)}}>
                      <TextInput
                        style={{marginTop: hp(2)}}
                        defaultValue={email}
                        activeOutlineColor="#2A68BB"
                        keyboardType="email-address"
                        placeholder="Email address"
                        placeholderTextColor={'#2A68BB'}
                        mode="outlined"
                        label={'Email address'}
                        underlineColor="transparent"
                        outlineColor="#CEE0F8"
                        onChangeText={email => setEmail(email)}
                      />
                      <TextInput
                        style={{marginTop: hp(2)}}
                        defaultValue={password}
                        activeOutlineColor="#2A68BB"
                        secureTextEntry={passwordVisible}
                        onChangeText={password => setPassword(password)}
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
                    </View>
                    {/*  */}

                    <View style={styles.LastView}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: wp(5),
                        }}>
                        <TouchableOpacity onPress={() => setChecked(!checked)}>
                          {checked ? (
                            <Icon
                              name="checkbox-marked"
                              size={25}
                              color="#2A68BB"
                            />
                          ) : (
                            <Icon
                              name="checkbox-blank-outline"
                              size={25}
                              color="#2A68BB"
                            />
                          )}
                        </TouchableOpacity>

                        <ResponsiveText
                          style={{
                            color: '#343434',
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 5,
                          }}>
                          Remember me
                        </ResponsiveText>
                      </View>
                      <ResponsiveText
                        style={{
                          color: '#2A68BB',
                          fontSize: 16,
                          fontWeight: '600',
                          marginRight: wp(5),
                        }}>
                        Forgot Password?
                      </ResponsiveText>
                    </View>

                    <TouchableOpacity
                      onPress={() => handleSignIn()}
                      style={styles.SignIn}>
                      <ResponsiveText style={styles.SignInText}>
                        {'Sign In'}
                      </ResponsiveText>
                      <Image
                        source={Images.arrow_right}
                        style={styles.rightArrow}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Fragment>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  SafeAreaView1: {flex: 0, backgroundColor: '#2A68BB'},
  SafeAreaView2: {flex: 1, backgroundColor: 'white'},
  mainView: {
    flex: 1,
    backgroundColor: '#2A68BB',
  },
  onBoarding: {width: wp(100), height: hp(50)},
  welcome: {
    height: hp(50),
    backgroundColor: 'white',
    position: 'relative',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  welcomeText: {
    color: '#000',
    marginTop: hp(4),
    marginLeft: wp(4),

    fontWeight: '600',
    fontSize: 32,
  },
  LastView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
    justifyContent: 'space-between',
  },
  credentials: {
    color: '#8C8C8C',
    marginTop: hp(2.5),
    marginLeft: wp(4),
    fontWeight: '500',
    fontSize: 16,
  },
  appoinment: {
    color: '#8C8C8C',
    width: wp(80),
    marginTop: hp(2),
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  SignIn: {
    marginTop: hp(3),
    backgroundColor: '#2A68BB',
    width: wp(90),
    borderRadius: 5,
    paddingVertical: hp(2),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  rightArrow: {
    width: wp(6),
    height: wp(5),
    marginTop: hp(0.4),
    marginLeft: 5,
    alignSelf: 'center',
  },
});
