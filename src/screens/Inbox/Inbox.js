import {StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {
  Container,
  Colors,
  Header,
  ResponsiveText,
  Images,
  Icons,
} from '../../components/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-virtualized-view';

const Inbox = props => {
  const DATA = [
    {
      ctype: 'Messages',
      cicon: Images.messages,
      cdata: [
        {
          type: 'Create Message',
          icon: Images.create_message,
          totalmessage: 0,
          // navigation:'Createmessage'
          navigation: '',
          id: 5,
        },
        {
          type: 'Current Message',
          icon: Images.current_message,
          totalmessage: 11,
          // navigation:'Message'
          navigation: '',
          id: 2,
        },
        {
          type: 'Previous Message',
          icon: Images.previous_message,
          totalmessage: 3,
          navigation: '',
          id: 3,
        },
        {
          type: 'Draft Message',
          icon: Images.draft_message,
          totalmessage: 2,
          navigation: 'Draftmessage',
          id: 4,
        },
      ],
    },
    {
      ctype: 'Orders',
      cicon: Images.order_bag,
      cdata: [
        {
          type: 'Orders',
          icon: Images.order_tick,
          totalmessage: 13,
          navigation: 'Orders',
          id: 5,
        },
      ],
    },
    {
      ctype: 'Notes',
      cicon: Images.notes,
      cdata: [
        // {
        //   type: 'Create Notes',
        //   icon: Images.create_message,
        //   totalmessage: 4,
        //   navigation: 'Createnotes',
        //   id: 1,
        // },
        {
          type: 'Pending Notes',
          icon: Images.pending_notes,
          totalmessage: 4,
          navigation: 'Pendingnotes',
          id: 1,
        },
        {
          type: 'Draft Notes',
          icon: Images.draft_notes,
          totalmessage: 4,
          navigation: 'DraftNotes',
          id: 1,
        },
        {
          type: 'Previous Notes',
          icon: Images.previous_notes,
          totalmessage: 7,
          navigation: 'PreviousNotes',
          id: 1,
        },
      ],
    },
  ];

  const sumtotalmessage = temp => {
    try {
      if (temp != undefined) {
        const sum = temp.reduce((accumulator, object) => {
          return accumulator + object.totalmessage;
        }, 0);
        return sum;
      }
    } catch (err) {
      console.log('err====>>', err);
    }
  };
  const rendersubcategory = ({item}) => {
    console.log(item.id == 1 ? '0k' : 'no');
    return (
      <TouchableOpacity
        onPress={() =>
          item.id == 1
            ? props.navigation.navigate(item.navigation)
            : console.log('call')
        }
        style={styles.subflatlist}>
        <View style={styles.nameicon}>
          <Icons icon={item.icon} />
          <ResponsiveText style={styles.nametxt}>{item.type}</ResponsiveText>
        </View>
        <View style={styles.circleunfill}>
          {item.totalmessage.toString().length == 1 ? (
            <ResponsiveText
              style={{...styles.counttext, color: Colors.primary}}>
              {0}
              {item.totalmessage}
            </ResponsiveText>
          ) : (
            <ResponsiveText
              style={{...styles.counttext, color: Colors.primary}}>
              {item.totalmessage}
            </ResponsiveText>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    console.log('item',item);
    return (
      <View>
        <View style={styles.categaty}>
          <View style={styles.nameicon}>
            <Icons icon={item.cicon} />
            <ResponsiveText style={styles.typetext}>
              {item.ctype}
            </ResponsiveText>
          </View>
          <View style={styles.circle}>
            <ResponsiveText style={styles.counttext}>
              {sumtotalmessage(item.cdata)}
            </ResponsiveText>
          </View>
        </View>
        <View style={styles.sublist}>
          <FlatList
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={{
            //   paddingBottom: Platform.OS == 'ios' ? hp(30) : hp(40),
            // }}
            data={item.cdata}
            renderItem={rendersubcategory}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  };
  return (
    <Container backgroundColor={Colors.textColorWhite}>
      <Header
        name={'Elaine Hale'}
        // onPress={() => props.navigation.navigate('DraftNotes')}
        onPress={() => props.navigation.openDrawer()}
      />
      {/* 
<View style={styles.butonview}>
<View style={{borderWidth:0,flexDirection:'row',alignSelf:'flex-end'}}>
            <TouchableOpacity
            onPress={()=>props.navigation.navigate('Createpatient')}

                style={styles.btnciew}>


                <Icons icon={Images.plussign}
                    style={{ width: wp(4), height: wp(4) }} />


                <ResponsiveText style={{ ...styles.textbtn }}>
                    {
                        'Patient'
                    }
                </ResponsiveText>


            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>props.navigation.navigate('Createvisit')}
                style={styles.btnciew}>


                <Icons icon={Images.plussign}
                    style={{ width: wp(4), height: wp(4) }} />


                <ResponsiveText style={{ ...styles.textbtn }}>
                    {
                        'Visit'
                    }
                </ResponsiveText>


            </TouchableOpacity>
            
            </View>
     </View> */}
      <ScrollView>
        <View style={styles.inbox}>
          <ResponsiveText style={styles.inboxtxt}>{'Inbox'}</ResponsiveText>
        </View>

        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: Platform.OS == 'ios' ? hp(25) : hp(30),
            }}
            data={DATA}
            listKey={(item, index) => index.toString()}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  inbox: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderColor: Colors.lineseprator,
  },
  butonview: {
    borderWidth: 0,
    marginHorizontal: wp(5),
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: Colors.lineseprator,
    alignItems: 'flex-end',
  },
  inboxtxt: {fontSize: 20, fontWeight: 'bold', color: Colors.textcolorblack},
  categaty: {
    borderWidth: 0,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
  },
  typetext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: 10,
  },
  nametxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.balckText,
    marginLeft: 10,
  },
  nameicon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  circleunfill: {
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counttext: {fontSize: 16, fontWeight: '700', color: Colors.textColorWhite},
  sublist: {borderWidth: 0},
  subflatlist: {
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: wp(5),
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: Colors.borderColor,
  },
  textbtn: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.balckText,
    marginLeft: 10,
  },
  btnciew: {
    borderWidth: 1,
    width: wp(23),
    marginLeft: wp(3),
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    alignSelf: 'flex-end',
    borderColor: Colors.borderColor,
  },
});
