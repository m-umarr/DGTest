import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import React, {Fragment} from 'react';

import {Images, ResponsiveText} from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SignIn = props => {
  return (
    <Fragment>
      <SafeAreaView style={styles.SafeAreaView1} />
      <StatusBar
        animated={true}
        backgroundColor="#2A68BB"
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.mainView}>
          <Image source={Images.Oboard} style={styles.onBoarding} />
          <View>
            <View style={styles.welcome}>
              <ResponsiveText style={styles.welcomeText}>
                {'Welcome to'}
              </ResponsiveText>
              <ResponsiveText style={styles.psychplus}>
                {'Psychplus'}
              </ResponsiveText>
              <ResponsiveText style={styles.appoinment}>
                {'Easy way to make an appointment with a doctor.'}
              </ResponsiveText>
              <TouchableOpacity
                style={styles.SignIn}
                onPress={() => props.navigation.navigate('GetStarted')}>
                <ResponsiveText style={styles.SignInText}>
                  {'Sign In'}
                </ResponsiveText>
                <Image source={Images.arrow_right} style={styles.rightArrow} />
              </TouchableOpacity>
            </View>
            {/* #2A68BB */}
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  SafeAreaView1: {flex: 0, backgroundColor: '#2A68BB'},
  SafeAreaView2: {flex: 1, backgroundColor: 'white'},
  mainView: {flex: 1, backgroundColor: '#2A68BB'},
  onBoarding: {width: wp(100), height: hp(50)},
  welcome: {
    height: hp(60),
    backgroundColor: 'white',
    position: 'relative',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  welcomeText: {
    color: '#000',
    marginTop: hp(4),
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 34,
  },
  psychplus: {
    color: '#2A68BB',
    marginTop: hp(0.5),
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 30,
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
    marginTop: hp(10),
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
