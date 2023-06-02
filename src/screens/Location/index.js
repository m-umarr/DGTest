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
import axios from 'axios';
import {Main_URL} from '../../constants/constants';

const Location = props => {

  useEffect(()=>{
    axios({
      method:'get',
      url:`${Main_URL}api/User/Locations?staffId=26`,
      headers:{
        ApiKey:'apIkeYpsycHpluS101'
      }
    }).then(function (response){
      // console.log('Location===> response',response.data)
      setDATA(response.data)
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
        {/* <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
            {'Staff Id'}
          </ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(40)}}>
          <ResponsiveText style={styles.headingtxt}>{'Name'}</ResponsiveText>
        </View>
        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt}>{'Type'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt}>{'NPI'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt}>
            {'Taxonomy'}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(34)}}>
          <ResponsiveText style={styles.headingtxt}>{'Address'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(36)}}>
          <ResponsiveText style={styles.headingtxt}>{'Phone'}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(28)}}>
          <ResponsiveText style={styles.headingtxt}>{'Fax'}</ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt}>{'State'}</ResponsiveText>
        </View> */}

        {/* <View style={{...styles.datevie, borderRightWidth: 0}}>
          <ResponsiveText style={styles.headingtxt}>{'Status'}</ResponsiveText>
        </View> */}
      </View>
    );
  };

  const ConceltentFooter = () => {
    return <View style={styles.footerstyle} />;
  };
  //
  const renderClinicItem = ({item, index}) => {
    console.log('Clinicitem', item);
    return (
      <View
        style={{
          ...styles.headinsg1,
          backgroundColor: index % 2 == 0 ? '#E4E6EC' : 'white',
        }}>
        {/* <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt1}>{item.Id}</ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(40)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.name}
          </ResponsiveText>
        </View>
        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt1}>
            {/* {item.name} */}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>{item.npi}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.taxonomy}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(34)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.address}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(36)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.phone}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(28)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.fax}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.State}
          </ResponsiveText>
        </View> */}

        {/* <View style={{...styles.actionview}}>
          <Icons
            icon={Images.imageindicator}
            style={{width: wp(5), height: wp(5)}}
          />
        </View> */}
      </View>
    );
  };

  const renderHospitalItem = ({item, index}) => {
    console.log('Hospitalitem', item);
    return (
      <View
        style={{
          ...styles.headinsg1,
          backgroundColor: index % 2 == 0 ? '#E4E6EC' : 'white',
        }}>
        {/* <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt1}>{item.Id}</ResponsiveText>
        </View> */}

        <View style={{...styles.datevie, width: wp(40)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item?.hospital?.name}
          </ResponsiveText>
        </View>
        <View style={{...styles.datevie}}>
          <ResponsiveText style={styles.headingtxt1}>
            {/* {item.name} */}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>{item?.hospital?.npi}</ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(21)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item?.hospital?.taxonomy}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(34)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item?.hospital?.address}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(36)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item?.hospital?.phone}
          </ResponsiveText>
        </View>

        <View style={{...styles.datevie, width: wp(28)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item?.hospital?.fax}
          </ResponsiveText>
        </View>

        {/* <View style={{...styles.datevie, width: wp(12)}}>
          <ResponsiveText style={styles.headingtxt1}>
            {item.State}
          </ResponsiveText>
        </View> */}

        {/* <View style={{...styles.actionview}}>
          <Icons
            icon={Images.imageindicator}
            style={{width: wp(5), height: wp(5)}}
          />
        </View> */}
      </View>
    );
  };
  return (
    <Container backgroundColor={Colors.textColorWhite}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(10)}}>
        <View style={styles.inbox}>
          <ResponsiveText style={styles.inboxtxt}>
            {'Provider Locations'}
          </ResponsiveText>
        </View>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt2}>
            {'Clinics'}
          </ResponsiveText>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            listKey={item => item.value.toString()}
            data={DATA?.clinics}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ConceltentFooter}
            renderItem={renderClinicItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <View style={styles.textheading}>
          <ResponsiveText style={styles.headingtxt2}>
            {'Hospitals'}
          </ResponsiveText>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            listKey={item => item.value.toString()}
            data={DATA?.hospitals}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ConceltentFooter}
            renderItem={renderHospitalItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Location;
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
  headingtxt2: {
    fontSize: 16,
    fontWeight: '600',
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
  textheading: {
    borderWidth: 0,
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
});
