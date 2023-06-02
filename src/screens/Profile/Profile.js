import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import moment from 'moment';

const Profile = props => {
  const gender = ['Male', 'Female', 'Other'];
  const relation = ['Friend', 'Family', 'Other'];
  const Language = ['English', 'Hindi', 'Urdu', 'Arabic'];
  const [sameaddress, setsameaddress] = useState('No');
  const [guardianaddress, setguardianaddress] = useState('No');
  const [emergencycontact, setemergencycontact] = useState('other');
  const [Permission, setPermission] = useState('No');
  const [DATA, setDATA]= useState();

  useEffect(()=>{
    axios({
      method:'get',
      url:'https://api.integration.psychplus.dev/api/user/Profile?staffId=26',
      headers:{
        ApiKey:'apIkeYpsycHpluS101'
      }
    }).then(function (response){
      console.log('Staff Profile===> response',response.data.staffProfile)
      setDATA(response.data.staffProfile)
      // props.navigation.navigate('BottomTab');
    }).catch(function (error){
      console.log('error',error);
    });
  },[])
     

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
      {/* <Simpleheader
        title={'Create Patient'}
        navigation={props.navigation}/> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(20)}}>
        <View style={styles.imageview}>
          <View style={{...styles.img}}>
            <Image
              source={Images.person}
              style={{...styles.img, borderWidth: 0}}
              resizeMode="contain"
            />
          </View>

          <View style={styles.rowimage}>
            {/* <Image
              source={Images.imageindicator}
              style={styles.iconsimage}
              resizeMode="contain"
            /> */}
            <Image
              source={Images.addimage}
              style={styles.iconsimage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>{'Profile'}</ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Provider Credientials'}
          </ResponsiveText>
          <InputField
            placeholder={'Provider Credientials'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Status'}
          </ResponsiveText>
          <InputField
            placeholder={'Status'}
            value={DATA?.status}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'First Name'}
          </ResponsiveText>
          <InputField
            placeholder={'First Name'}
            value={DATA?.fname}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Middle Name'}
          </ResponsiveText>
          <InputField
            placeholder={'Middle Name'}
            value={DATA?.mname}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Last Name'}
          </ResponsiveText>
          <InputField
            placeholder={'Last Name'}
            value={DATA?.lname}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'DOB'}
          </ResponsiveText>
          <InputField
            placeholder={'DOB'}
            value={DATA?.dob}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        {/* <View style={styles.rowview}>
          <InputField
            placeholder={'DOB'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(32)}
            righticon={'calendar'}
          />

          <Dropdown
            data={gender}
            fontSize={16}
            borderColor={Colors.borderColor}
            width={wp(41)}
            defaultButtonText={'Gender'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View> */}

        {/* <View style={styles.rowview}>
          <Dropdown
            data={Language}
            fontSize={16}
            borderColor={Colors.borderColor}
            width={wp(41)}
            defaultButtonText={'Language'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
          <InputField
            placeholder={'Email'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View> */}
        {/* <View style={styles.rowview}>
          <InputField
            placeholder={'Cell'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />

          <InputField
            placeholder={'SSN'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View> */}
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Phone'}
          </ResponsiveText>
          <InputField
            placeholder={'Phone'}
            value={DATA?.phone_contact}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Email'}
          </ResponsiveText>
          <InputField
            placeholder={'Email'}
            value={DATA?.email}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Home Address'}
          </ResponsiveText>
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 1'}
            value={DATA?.address}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 2'}
            value={DATA?.address2}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.rowview}>
          <InputField
            placeholder={'State'}
            value={DATA?.state}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />

          <InputField
            placeholder={'City'}
            value={DATA?.city}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Mailing Address'}
          </ResponsiveText>
        </View>
        <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1, width: wp(60)}}>
            {'Is your mailing address same as above?'}
          </ResponsiveText>
          <View style={styles.radioview}>
            <TouchableOpacity
              onPress={() => setsameaddress('Yes')}
              style={styles.radiotext}>
              <Icons
                icon={
                  sameaddress == 'Yes' ? Images.Radiocheck : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'Yes'}</ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setsameaddress('No')}
              style={{...styles.radiotext, marginLeft: 10}}>
              <Icons
                icon={
                  sameaddress == 'No' ? Images.Radiocheck : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'No'}</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 1'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 2'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.rowview}>
          <InputField
            placeholder={'State'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />

          <InputField
            placeholder={'City'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View>
        {/* <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1, width: wp(60)}}>
            {
              'Does the patient have a parent, guardian, or legal representative?'
            }
          </ResponsiveText>
          <View style={styles.radioview}>
            <TouchableOpacity
              onPress={() => setguardianaddress('Yes')}
              style={styles.radiotext}>
              <Icons
                icon={
                  guardianaddress == 'Yes'
                    ? Images.Radiocheck
                    : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'Yes'}</ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setguardianaddress('No')}
              style={{...styles.radiotext, marginLeft: 10}}>
              <Icons
                icon={
                  guardianaddress == 'No'
                    ? Images.Radiocheck
                    : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'No'}</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'First Name'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Middle Name'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Last Name'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        {/* <View style={styles.rowview}>
          <Dropdown
            data={relation}
            fontSize={16}
            borderColor={Colors.borderColor}
            width={wp(41)}
            defaultButtonText={'Relationship'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
          <InputField
            placeholder={'Phone'}
            // value={''}

            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View> */}

        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Email'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        {/* <View style={styles.headingview}>
          <ResponsiveText style={{...styles.txt}}>
            {'Emergency Contact Information'}
          </ResponsiveText>
        </View> */}

        {/* <View style={styles.textradio}>
          <View style={styles.radioview}>
            <TouchableOpacity
              onPress={() => setemergencycontact('Self')}
              style={styles.radiotext}>
              <Icons
                icon={
                  emergencycontact == 'Self'
                    ? Images.Radiocheck
                    : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>
                {'Self'}
              </ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setemergencycontact('Parent/Guardian')}
              style={styles.radiotext}>
              <Icons
                icon={
                  emergencycontact == 'Parent/Guardian'
                    ? Images.Radiocheck
                    : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4), marginLeft: 15}}
              />

              <ResponsiveText style={{...styles.yesno}}>
                {'Parent/Guardian'}
              </ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setemergencycontact('other')}
              style={styles.radiotext}>
              <Icons
                icon={
                  emergencycontact == 'other'
                    ? Images.Radiocheck
                    : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4), marginLeft: 15}}
              />

              <ResponsiveText style={{...styles.yesno}}>
                {'Other'}
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1, width: wp(60)}}>
            {'Permission to speak?'}
          </ResponsiveText>
          <View style={styles.radioview}>
            <TouchableOpacity
              onPress={() => setPermission('Yes')}
              style={styles.radiotext}>
              <Icons
                icon={
                  Permission == 'Yes' ? Images.Radiocheck : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'Yes'}</ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPermission('No')}
              style={{...styles.radiotext, marginLeft: 10}}>
              <Icons
                icon={
                  Permission == 'No' ? Images.Radiocheck : Images.radiouncheck
                }
                style={{width: wp(4), height: wp(4)}}
              />

              <ResponsiveText style={{...styles.yesno}}>{'No'}</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View> */}
        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Name'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}
        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Realtionship to the Contact'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        {/* <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Phone'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Email'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View> */}

        <View style={styles.btnview}>
          <Button title={'Save'} onPress={() => props.navigation.goBack()} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  inputview: {
    borderWidth: 0,
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    marginHorizontal: wp(5),
    justifyContent: 'center',
    alignContent: 'center',
  },
  rowview: {
    borderWidth: 0,
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    alignItems: 'center',
  },
  dropdown: {
    borderWidth: 0,
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    borderRadius: 10,
  },
  btnview: {
    marginTop: hp(4),
    borderWidth: 0,
    alignItems: 'center',
    marginHorizontal: wp(4),
    justifyContent: 'center',
  },
  imageview: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    marginTop: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingview: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  img: {
    borderWidth: 2,
    width: wp(40),
    height: wp(40),
    borderRadius: wp(40),
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rowimage: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: wp(20),
    position: 'absolute',
    bottom: hp(1),
    right: wp(20),
  },
  yesno: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.balckText,
    marginLeft: 5,
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.balckText,
  },
  radiotext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0,
  },
  iconsimage: {
    width: wp(8),
    height: wp(8),
  },
  textheading: {
    borderWidth: 0,
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
  textradio: {
    borderWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',

    marginHorizontal: wp(5),
    marginTop: hp(2.5),
    justifyContent: 'space-between',
  },
  headingtxt: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.balckText,
  },
  radioview: {
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textheading1: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.balckText,
    width: wp(68),
    borderWidth: 0,
  },
  inputHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.balckText,
    width: wp(68),
    borderWidth: 0,
  },
});
