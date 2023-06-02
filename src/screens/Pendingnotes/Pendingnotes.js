import { View, StyleSheet ,TouchableOpacity,FlatList,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState, useEffect} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,InputField,Icons,Dropdown,Button} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';



const Pendingnotes = (props) => {
    


useEffect(()=>{
  axios({
    method:'get',
    url:'https://api.integration.psychplus.dev/api/Inbox/PendingNotes?staffId=26',
    headers:{
      ApiKey:'apIkeYpsycHpluS101'
    }
  }).then(function (response){
    console.log('pending Notes===> response',response.data.pendingNotes)
    setDATA(response.data.pendingNotes)
    // props.navigation.navigate('BottomTab');
  }).catch(function (error){
    console.log('error',error);
  });
},[])
    const [DATA, setDATA]= useState()
      const [selectedid, setselectedid] = useState([]);
      const [allselcted, setallselcted] = useState(false);
      var array1=[];
      const pushallid =() => {
        setallselcted(!allselcted)
        if (allselcted==true) {
          setselectedid([])
        } else {
          
          DATA.map((item)=>{
  array1.push(item.id);
       
       
          })
          setselectedid(array1);
        }
      
      };

      const pushmessage = id => {
        if (selectedid.includes(id) === true) {
          console.log('if condition true', selectedid);
          const updatedArr = selectedid.filter(e => e !== id);
      
          setselectedid(updatedArr);
        } else {
          // newarray.push(id);
          var array1 = [...selectedid, id];
       
          setselectedid(array1);
      
        }
      };
      const renderItem=({item,index})=>{
        // console.log('item', item);
        return(


<TouchableOpacity style={{...styles.headinsg1,backgroundColor:index%2!=0?  'white':'#EFF6FA'}} onPress={()=>props.navigation.navigate('NoteDetail')}> 
<TouchableOpacity onPress={()=>pushmessage(item.id)} style={{...styles.datevie,width:wp(8)}}>
       
{selectedid.includes(item.id) == true ? (
            <Icon name="check-box" size={18} color={Colors.primary}   style={styles.checkbox}
            />
          ) : (
            <Icon
              name="check-box-outline-blank"
              //check-box
              size={18}
              color={Colors.primary}
              style={styles.checkbox}
            />
          )}
</TouchableOpacity>

<View style={styles.datevie}>
<ResponsiveText style={styles.headingtxt1}>
      {moment(item.service_datetime).format("MMM DD, YYYY") }
    </ResponsiveText>
</View>


<View style={{...styles.datevie,width:wp(20)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.title}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(20)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.pFname} {item.pLname}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(18)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.author}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,width:wp(30)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.clinic_name}
    </ResponsiveText>
</View>
           
</TouchableOpacity>
        )
      }
      const ListHeaderComponent = () => {
        return (
          <View style={styles.headinsg}> 
          <TouchableOpacity onPress={()=>pushallid()} style={{...styles.datevie,width:wp(8)}}>
             {allselcted?      <Icon
                                   name="check-box"
                                   //check-box
                                   size={18}
                                   color={Colors.textColorWhite}
                                 
                                 />
                                 :

<Icon
                                   name="check-box-outline-blank"
                                   //check-box
                                   size={18}
                                   color={Colors.textColorWhite}
                                 
                                 />
             }
          </TouchableOpacity>
         
          <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
                {'Date'}
              </ResponsiveText>
          </View>
        

          <View style={{...styles.datevie,width:wp(20)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Title'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(20)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Patient'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(18)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Author'}
              </ResponsiveText>
          </View>

          <View style={{...styles.datevie,width:wp(30)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Location'}
              </ResponsiveText>
          </View>
                     
          </View>
    
        );
      };

      const ConceltentFooter=()=>{
        return(
          <View style={styles.footerstyle}/>
    
         
        )
      }
      // console.log('DATA', DATA);
  return (
   <Container backgroundColor={Colors.statusbarcolor}>
 <Simpleheader
        title={'Pending Notes'}
        navigation={props.navigation}/>
 <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.mainheadingview}>
          <ResponsiveText style={styles.mainheading}>
                {'Pending Notes'}
              </ResponsiveText>
          </View>
          {selectedid.length!=0?
  <View style={{marginHorizontal:wp(7),marginTop:10}}>
<TouchableOpacity style={{...styles.btnstyle,flexDirection:'row'}}>


<Icons icon={Images.signpen}
style={{width:wp(5),height:wp(5)}}/>
<ResponsiveText style={styles.btntext}>
              {'Sign'}
            </ResponsiveText>
</TouchableOpacity>
</View>
:null}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

  <View  style={{borderWidth:0,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
 <FlatList
               showsVerticalScrollIndicator={false}
               scrollEnabled={false}
               ListHeaderComponent={ListHeaderComponent}
               ListFooterComponent={ConceltentFooter}
               contentContainerStyle={{
                 paddingBottom: Platform.OS == 'ios' ? hp(10) : hp(15),
               }}
               data={DATA}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
             />
             </View>
 </ScrollView>
 </ScrollView>
   </Container>
  )
}

export default Pendingnotes

const styles = StyleSheet.create({

     /////table start

     headinsg1:{
        borderWidth:0,
        marginHorizontal:wp(3),
        flexDirection:'row',
    
      },
      headingtxt1:{
        fontSize:12,fontWeight:'700',color:Colors.balckText
      },
      mainheading:{
        fontSize:24,
        fontWeight:'700',
        color:Colors.balckText
      },
      mainheadingview:{
        borderWidth:0,marginTop:hp(3),marginHorizontal:wp(12)
      },
      footerstyle:{

        marginHorizontal:wp(3),
        borderBottomWidth:0,
        borderColor:Colors.borderColor,
        marginTop:0.2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 1.25,
        shadowRadius: 4,
        elevation: 5
      
      },
      datevie1:{
        borderRightWidth:1,
        paddingVertical:15,
        width:wp(23),
        alignItems:'center',
        borderColor:Colors.borderColor,
        justifyContent:'center'
      },
      headinsg1:{
        borderWidth:0,
      
        flexDirection:'row',

        marginHorizontal:wp(3),
        borderColor:Colors.borderColor
      },
      actionview:{
        paddingVertical:15,
        width:wp(23),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    
      },
      datetxt:{fontSize:16,color:Colors.balckText,fontWeight:'600'},
      headinsg:{
        borderWidth:1,
        borderBottomWidth:0,
        backgroundColor:Colors.primary,
        marginHorizontal:wp(3.1),marginTop:hp(3),
        flexDirection:'row',
        borderColor:Colors.borderColor
       
      },
      datevie:{
        borderWidth:1,
        paddingVertical:5,
        width:wp(29),
        alignItems:'center',
        borderColor:Colors.borderColor
      },
      headingtxt:{
        fontSize:16,fontWeight:'700',color:'white'
      },
      headingtxt1:{
        fontSize:14,fontWeight:'400',color:'black'
      },
      btnstyle:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        borderColor:Colors.borderColor,
        width:wp(40)
      },
      btntext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.balckText,
      },
      /////table end
})