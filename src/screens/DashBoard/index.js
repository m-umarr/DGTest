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
const DashBoard = () => {
  return (
    <Container backgroundColor={Colors.statusbarcolor}>
      {/* <Simpleheader
          title={'Create Patient'}
          navigation={props.navigation}/> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(20)}}>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt1}>
            {'Dashboard'}
          </ResponsiveText>
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Compensation'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Balance'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Total'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Received'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Compensation'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Hourly'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'New Pt'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Established Pt'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Percentage'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Compensation'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Claims Closed'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Percentage of Claims Collected'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Claims Pending'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Average Collection per Claim'}
          </ResponsiveText>
          <InputField
            placeholder={'$'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Appointment Fill Rate'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Past 30 Days'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Next 30 Days'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'No Show'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Cancel-P'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Rate'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'Appointment Range'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'From'}
          </ResponsiveText>
          <InputField
            placeholder={'18/11/2022'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'From'}
          </ResponsiveText>
          <InputField
            placeholder={'18/11/2022'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>
            {'CPT Code Usage'}
          </ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Code %'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Add on %'}
          </ResponsiveText>
          <InputField
            placeholder={'%'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt}>{'Tasks'}</ResponsiveText>
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'From'}
          </ResponsiveText>
          <InputField
            placeholder={'18/11/2022'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'To'}
          </ResponsiveText>
          <InputField
            placeholder={'18/11/2022'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Note Completion'}
          </ResponsiveText>
          <InputField
            placeholder={'630'}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Total Visit'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Pending Notes'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Pending Medications'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Pending Message'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>
        <View style={{...styles.inputview}}>
          <ResponsiveText style={{...styles.inputHeading}}>
            {'Pending Orders'}
          </ResponsiveText>
          <InputField
            placeholder={''}
            // value={''}
            fontSize={16}
            onChangeText={text => console.log(text)}
            placeholderTextColor={Colors.txtgray}
            textinputstyle={styles.textinputstyle}
          />
        </View>

        <View style={styles.btnview}>
          <Button title={'Approve'} onPress={() => props.navigation.goBack()} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default DashBoard;

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
    fontSize: 16,
    fontWeight: '600',
    color: Colors.balckText,
  },
  headingtxt1: {
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
