import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signinTop: {
    height: hp(30),
    width: wp(100),
    resizeMode: 'stretch',
  },
  HeadText: {
    color: 'black',
    fontSize: 32,
    fontWeight: '600',
    marginTop: hp(3),
    // fontFamily: 'Roboto-Bold',
  },

  TextLight: {
    color: '#8C8C8C',
    fontSize: 15,
    fontWeight: '400',
    marginTop: hp(2),
  },
  txtInput: {
    backgroundColor: 'white',
  },
  LastView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
    justifyContent: 'space-between',
  },
  button: {
    marginTop: hp(12),
    backgroundColor: '#2A68BB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: wp(80),
    paddingVertical: hp(2),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  arrowStyle: {
    width: wp(5.5),
    marginTop: 4,
    height: wp(7),
  },
});
export default styles;
