import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  Pressable,
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import { Main_URL } from '../../constants/constants';

const Createpatient = props => {
  const gender = ['Male', 'Female', 'Other'];
  const relation = ['Friend', 'Family', 'Other'];
  const Language = ['English', 'Hindi', 'Urdu', 'Arabic'];
  const [sameaddress, setsameaddress] = useState('No');
  const [guardianaddress, setguardianaddress] = useState('No');
  const [emergencycontact, setemergencycontact] = useState('other');
  const [Permission, setPermission] = useState('No');
  const [filePath, setFilePath] = useState({});

  // Field States
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [language, setLanguage]= useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [SSN, setSSN]= useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [gFirstName, setGFirstName] = useState('');
  const [gMiddleName, setGMiddleName] = useState('');
  const [gLastName, setGLastName] = useState('');
  const [gPhone, setGPhone] = useState('');
  const [gRelation, setGRelation] = useState('');
  const [gEmail, setGEmail] = useState('');
  const [eciName, setEciName] = useState('');
  const [eciPhone, setEciPhone]= useState('');
  const [eciEmail, setEciEmail]= useState('');
  const [eciRelation, setEciRelation]= useState('');
  // Field States

  const Toast = useToast();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const handleCreatePatient=()=>{
  if(!firstName){
    Toast.show('Enter First Name');
    return;
  }
  if(!middleName){
    Toast.show('Enter Middle Name');
    return;
  }
  if(!lastName){
    Toast.show('Enter Last Name');
    return;
  }
  if(!DOB){
    Toast.show('Enter Date Of Birth');
    return;
  }
  if(!patientGender){
    Toast.show('Select Gender');
    return;
  }
  if(!language){
    Toast.show('Select Language');
    return;
  }
  if(!phone){
    Toast.show('Enter Cell Number');
    return;
  }
  if(!email){
    Toast.show('Enter Email');
    return;
  }
  if(!SSN){
    Toast.show('Enter SSN');
    return;
  }
  if(!addressLine1){
    Toast.show('Enter Address 1');
    return;
  }
  if(!addressLine2){
    Toast.show('Enter Address 2');
    return;
  }
  if(!gFirstName){
    Toast.show('Enter Guardian First Name');
    return;
  }
  if(!gMiddleName){
    Toast.show('Enter Guardian Middle Name');
    return;
  }
  if(!gLastName){
    Toast.show('Enter Guardian Last Name');
    return;
  }
  if(!gRelation){
    Toast.show('Select Guardian Gender');
    return;
  }
  if(!gPhone){
    Toast.show('Enter Guardian Phone');
    return;
  }
  if(!gEmail){
    Toast.show('Enter Guardian Email');
    return;
  }
  if(!eciName){
    Toast.show('Enter Emergency Contact Name');
    return;
  }
  if(!eciRelation){
    Toast.show('Enter Emergency Contact Relation');
    return;
  }
  if(!eciPhone){
    Toast.show('Enter Emergency Contact Phone');
    return;
  }
  if(!eciEmail){
    Toast.show('Enter Emergency Contact Email');
    return;
  }
var FormData = require('form-data');
var data = new FormData();
data.append('userId', '25');
data.append('dob', DOB);
data.append('ssn', SSN);
data.append('email', email);
data.append('fname',firstName);
data.append('lname', lastName);
data.append('mname', middleName);
data.append('phone', phone);
data.append('gender', patientGender);
data.append('eciName', eciName);
data.append('eciEmail', eciEmail);
data.append('eciPhone', eciPhone);
data.append('language', language);
data.append('profilePic', '\'\'');
data.append('addressLine1', addressLine1);
data.append('addressLine2', addressLine2);
data.append('guardianEmail', gEmail);
data.append('guardianFName', gFirstName);
data.append('guardianMName', gMiddleName);
data.append('guardianLName', gLastName);
data.append('guardianPhone', gPhone);
data.append('eciRelationship', eciRelation);
data.append('mailingAddressLine1', addressLine1);
data.append('mailingAddressLine2', addressLine2);
data.append('guardianRelationship', gRelation);

var config = {
  method: 'post',
  url: `${Main_URL}api/User/CreatePatient`,
  headers: { 
    'ApiKey': 'apIkeYpsycHpluS101',
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  Toast.show('Patient Created', {
    type: '',
    placement: 'top',
    duration: 500,
  });
  props.navigation.goBack()
})
.catch(function (error) {
  console.log(error);
  Toast.show('Patient Not Created', {
          type: 'danger',
          placement: 'top',
          duration: 1000,
        });
});

  }
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
          <Pressable style={styles.rowimage} onPress={() => chooseFile(Images)}>
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
          </Pressable>
        </View>

        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Patient Information'}
          </ResponsiveText>
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'First Name'}
            value={firstName}
            fontSize={16}
            onChangeText={firstName => setFirstName(firstName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Middle Name'}
            value={middleName}
            fontSize={16}
            onChangeText={middleName => setMiddleName(middleName )}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Last Name'}
            value={lastName}
            fontSize={16}
            onChangeText={lastName => setLastName(lastName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.rowview}>
          <InputField
            placeholder={'DOB'}
            value={DOB}
            onChangeText={DOB => setDOB(DOB)}
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
              // console.log(selectedItem, index);
              setPatientGender(selectedItem);
            }}
          />
        </View>

        <View style={styles.rowview}>
          <Dropdown
            data={Language}
            fontSize={16}
            borderColor={Colors.borderColor}
            width={wp(41)}
            defaultButtonText={'Language'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              setLanguage(selectedItem);
            }}
          />
          <InputField
            placeholder={'Email'}
            value={email}
            onChangeText={email => setEmail(email)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View>
        <View style={styles.rowview}>
          <InputField
            placeholder={'Cell'}
            value={phone}
            onChangeText={phone => setPhone(phone)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />

          <InputField
            placeholder={'SSN'}
            value={SSN}
            onChangeText={SSN => setSSN(SSN)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
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
            value={addressLine1}
            fontSize={16}
            onChangeText={addressLine1 => setAddressLine1(addressLine1)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 2'}
            value={addressLine2}
            fontSize={16}
            onChangeText={addressLine2 => setAddressLine2(addressLine2)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
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
            value={addressLine1}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Address line 2'}
            value={addressLine2}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textradio}>
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
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'First Name'}
            value={gFirstName}
            fontSize={16}
            onChangeText={gFirstName => setGFirstName(gFirstName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Middle Name'}
            value={gMiddleName}
            fontSize={16}
            onChangeText={gMiddleName => setGMiddleName(gMiddleName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Last Name'}
            value={gLastName}
            fontSize={16}
            onChangeText={gLastName => setGLastName(gLastName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.rowview}>
          <Dropdown
            data={relation}
            fontSize={16}
            borderColor={Colors.borderColor}
            width={wp(41)}
            defaultButtonText={'Relationship'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              setGRelation(selectedItem);
            }}
          />
          <InputField
            placeholder={'Phone'}
            value={gPhone}
            onChangeText={gPhone => setGPhone(gPhone)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
            width={wp(37)}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Email'}
            value={gEmail}
            fontSize={16}
            onChangeText={gEmail => setGEmail(gEmail)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.headingview}>
          <ResponsiveText style={{...styles.txt}}>
            {'Emergency Contact Information'}
          </ResponsiveText>
        </View>

        <View style={styles.textradio}>
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
        </View>

        <View style={styles.textradio}>
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
        </View>
        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Name'}
            value={eciName}
            fontSize={16}
            onChangeText={eciName => setEciName(eciName)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Realtionship to the Contact'}
            value={eciRelation}
            fontSize={16}
            onChangeText={eciRelation => setEciRelation(eciRelation)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Phone'}
            value={eciPhone}
            fontSize={16}
            onChangeText={eciPhone => setEciPhone(eciPhone)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <InputField
            placeholder={'Email'}
            value={eciEmail}
            fontSize={16}
            onChangeText={eciEmail => setEciEmail(eciEmail)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.btnview}>
          <Button title={'Save'} onPress={() => handleCreatePatient()} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Createpatient;

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
});
