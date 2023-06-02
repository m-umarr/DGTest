import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Container,
  Colors,
  Header,
  ResponsiveText,
  Images,
  Icons,
  Dropdown,
} from '../../components/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import axios from 'axios';
import moment from 'moment';

const StaffsProfile = props => {
  useEffect(()=>{
    axios({
      method:'get',
      url:'https://api.integration.psychplus.dev/api/User/AllStaffs?staffId=26',
      headers:{
        ApiKey:'apIkeYpsycHpluS101'
      }
    }).then(function (response){
      console.log('All Staffs===> response',response.data.allStaffs)
      setDATA(response.data.allStaffs)
      // props.navigation.navigate('BottomTab');
    }).catch(function (error){
      console.log('error',error);
    });
  },[])
      const [DATA, setDATA]= useState()
  const [alertModal, setalertModal] = useState(false);
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const Status = ['Conferm', 'Pending'];
  const apiveri = ['Yes', 'No'];

  const ListHeaderComponent = () => {
    return (
      <View style={styles.headinsg}>
        <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
            {'Staff Id'}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt}>
            {'First Name'}
          </ResponsiveText>
        </View>
        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Last Name'}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(10)}}>
          <ResponsiveText style={styles.headingtxt}>{'Age'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt}>{'Sex'}</ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Credentials'}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt}>{'Phone'}</ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(17)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Credentials'}
          </ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(34)}}>
          <ResponsiveText style={styles.headingtxt}>{'Email'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(36)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Location'}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(35)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Scheduling Status'}
          </ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(28)}}>
          <ResponsiveText style={styles.headingtxt}>{'Type'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt}>{'State'}</ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(15)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Api Veri'}
          </ResponsiveText>
        </View> */}

        {/* <View style={{...styles.datevie, width: wp(13)}}>
          <ResponsiveText style={styles.headingtxt}>{'Copay'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(15)}}>
          <ResponsiveText style={styles.headingtxt}>{'Balance'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(10)}}>
          <ResponsiveText style={styles.headingtxt}>{'Sign'}</ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, borderRightWidth: 0}}>
          <ResponsiveText style={styles.headingtxt}>{'Status'}</ResponsiveText>
        </View>
      </View>
    );
  };

  const ConceltentFooter = () => {
    return <View style={styles.footerstyle} />;
  };
  //
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.headinsg1,
          backgroundColor: index % 2 == 0 ? '#E4E6EC' : 'white',
        }}>
        <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt1}>{item.id}</ResponsiveText>
        </View>

        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.fname}
          </ResponsiveText>
        </View>
        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.lname}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(10)}}>
          <ResponsiveText style={styles.headingtxt1}>{item.age}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt1}>{item.sex}</ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>{item.credentials}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.phone}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(17)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.Provider}
          </ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(34)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.email}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(36)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.location}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(35)}}>
          <Dropdown
            data={Status}
            borderColor={Colors.borderColor}
            width={wp(23)}
            height={hp(2.2)}
            size={10}
            fontSize={12}
            backgroundColor={'white'}
            defaultButtonText={'Conferm'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View> */}

        <View style={{...styles.datevie, width: wp(28)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.type}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.state}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(15)}}>
          <Dropdown
            data={apiveri}
            borderColor={Colors.borderColor}
            width={wp(12)}
            height={hp(2)}
            size={10}
            fontSize={8}
            style={{borderRadius: 1}}
            backgroundColor={'white'}
            defaultButtonText={'No'}
            textcolor={Colors.grayText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View> */}

        {/* <View style={{...styles.datevie, width: wp(13)}}>
          <ResponsiveText style={styles.headingtxt1}>{''}</ResponsiveText>
        </View> */}

        {/* <View style={{...styles.datevie, width: wp(15)}}>
          <ResponsiveText style={styles.headingtxt1}>{''}</ResponsiveText>
        </View> */}

        {/* <View style={{...styles.datevie, width: wp(10)}}>
          <ResponsiveText style={styles.headingtxt1}>{''}</ResponsiveText>
        </View> */}
        <View style={{...styles.actionview}}>
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('EditAppointment')}>
            <Icon name="edit" size={22} color={Colors.primary} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity>
            <Icons icon={Images.delete} style={{width: wp(5), height: wp(5)}} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('BookAppointment')}> */}
          <Icons
            icon={Images.imageindicator}
            style={{width: wp(5), height: wp(5)}}
          />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  };
  return (
    <Container backgroundColor={Colors.textColorWhite}>
      {/* <Header
        name={'Elaine Hale'}
        onPress={() => props.navigation.openDrawer()}
      /> */}
      {/* <Modal animationType="fade" transparent={true} visible={alertModal}>
        <View style={styles.modalview}>
          <View style={styles.modalhalf}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.filtecross}>
                <ResponsiveText style={styles.inboxtxt}>
                  {'Filters'}
                </ResponsiveText>
                <TouchableOpacity onPress={() => setalertModal(false)}>
                  <Icons
                    icon={Images.cross}
                    style={{width: wp(5), height: wp(5)}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.calander}>
                <CalendarPicker
                  startFromMonday={false}
                  todayBackgroundColor={Colors.primary}
                  selectedDayColor={Colors.primary}
                  selectedDayTextColor="#FFFFFF"
                  onDateChange={date => console.log(date)}
                  width={wp(60)}
                  monthTitleStyle={{color: Colors.primary}}
                  yearTitleStyle={{color: Colors.primary}}
                  nextComponent={<Icon name="right" size={16} />}
                  previousComponent={<Icon name="left" size={16} />}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'States'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'Locations'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Specialty'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Providers'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'Type'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Age Group'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Time'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                />
              </View>
              <View style={styles.smallbtn}>
                <TouchableOpacity style={styles.btn}>
                  <ResponsiveText style={styles.btntext}>
                    {'Reset'}
                  </ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                    backgroundColor: Colors.primary,
                    borderWidth: 0,
                  }}>
                  <ResponsiveText style={{...styles.btntext, color: 'white'}}>
                    {'Filter'}
                  </ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <ResponsiveText style={styles.btntext}>
                    {'Next'}
                  </ResponsiveText>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal> */}
      {/* <ScrollView horizontal={true} > */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(10)}}>
        <View style={styles.inbox}>
          <ResponsiveText style={styles.inboxtxt}>{'All Staff'}</ResponsiveText>
          <View style={styles.rowview}>
            {/* <TouchableOpacity style={{...styles.download, borderWidth: 0}}>
              <Icons
                icon={Images.download}
                style={{width: wp(10.5), height: wp(10.5)}}
              />
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => setalertModal(true)}
              style={{
                ...styles.download,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icons
                icon={Images.filter}
                style={{width: wp(5), height: wp(5)}}
              />
              <ResponsiveText style={styles.filter}>{'Filter'}</ResponsiveText>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.rowview2}>
          <View style={styles.datecount}>
            <ResponsiveText style={{...styles.datetxt, color: Colors.primary}}>
              {'Date:'}
            </ResponsiveText>
            <ResponsiveText style={{...styles.datetxt, marginLeft: 20}}>
              {'july 25, 2022'}
            </ResponsiveText>
          </View>
          <View style={styles.datecount}>
            <ResponsiveText style={{...styles.datetxt, color: Colors.primary}}>
              {'Count:'}
            </ResponsiveText>
            <ResponsiveText style={{...styles.datetxt, marginLeft: 20}}>
              {'53'}
            </ResponsiveText>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            listKey={item => item.value.toString()}
            data={DATA}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ConceltentFooter}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </ScrollView>
      {/* </ScrollView> */}
    </Container>
  );
};

export default StaffsProfile;
const styles = StyleSheet.create({
  inbox: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    paddingVertical: 10,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: Colors.lineseprator,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inboxtxt: {fontSize: 20, fontWeight: 'bold', color: Colors.textcolorblack},
  filter: {fontSize: 16, color: Colors.balckText, marginLeft: 5},
  calander: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: wp(3),
    alignItems: 'center',
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 22,
  },
  smallbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(3),
    borderWidth: 0,
    marginTop: hp(2),
  },
  dropdown: {
    borderWidth: 0,
    marginTop: hp(1.5),
    marginHorizontal: wp(3),
    borderRadius: 10,
  },
  rowview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btntext: {
    color: Colors.balckText,
    fontSize: 16,
  },
  modalhalf: {
    flex: 1,
    backgroundColor: 'white',
    width: wp(75),
  },
  modalview: {
    flex: 1,
    backgroundColor: 'rgba(17, 21, 58, 0.8)',
  },
  download: {
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,

    borderRadius: 8,
    borderColor: Colors.borderColor,
  },
  filtecross: {
    borderWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
    marginHorizontal: wp(3),
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    paddingBottom: 10,
  },
  datevie: {
    borderRightWidth: 1,
    paddingVertical: 5,
    width: wp(21),
    alignItems: 'center',
    borderColor: Colors.borderColor,
  },

  datevie1: {
    borderWidth: 1,
    paddingVertical: 3,
    width: wp(23),
    alignItems: 'center',
    borderColor: Colors.borderColor,
    justifyContent: 'center',
  },
  actionview: {
    paddingVertical: 3,
    width: wp(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headingtxt: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  headingtxt1: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.balckText,
  },
  rowview2: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  datecount: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderColor: Colors.borderColor,
    borderRadius: 5,
    width: wp(44),
  },
  headinsg: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.primary,
    marginHorizontal: wp(2.99),
    marginTop: hp(3),

    flexDirection: 'row',
  },
  headinsg1: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    marginHorizontal: wp(3),
    flexDirection: 'row',
  },
  // icons:{width:wp(8),height:wp(8)},
});
