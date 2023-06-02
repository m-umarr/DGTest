

import { View, StyleSheet ,TouchableOpacity,FlatList,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
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
const DraftNotes = (props) => {

  useEffect(()=>{
    axios({
      method:'get',
      url:'https://api.integration.psychplus.dev/api/Inbox/DraftNotes?staffId=26',
      headers:{
        ApiKey:'apIkeYpsycHpluS101'
      }
    }).then(function (response){
      console.log('Draft Notes===> response',response.data.draftNotes)
      setDATA(response.data.draftNotes)
      // props.navigation.navigate('BottomTab');
    }).catch(function (error){
      console.log('error',error);
    });
  },[])
      const [DATA, setDATA]= useState()
  
      
      const renderItem=({item,index})=>{
        return(


<TouchableOpacity onPress={()=>props.navigation.navigate('DraftNotedetail',{DATA:item})} style={{...styles.headinsg1,backgroundColor:index%2!=0?  'white':'#EFF6FA'}}> 

<View style={styles.datevie}>
<ResponsiveText style={styles.headingtxt1}>
{moment(item.service_datetime).format("MMM DD, YYYY") }
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(40)}}>
          <ResponsiveText style={styles.headingtxt1}>
                {item.title}
              </ResponsiveText>
          </View>
     
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
{item.pFname} {item.pLname}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.author}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,width:wp(33)}}>
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
        
         
          <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
                {'Date'}
              </ResponsiveText>
          </View>

          <View style={{...styles.datevie,width:wp(40)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Title'}
              </ResponsiveText>
          </View>
         
          <View style={{...styles.datevie,}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Patient'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Author'}
              </ResponsiveText>
          </View>

          <View style={{...styles.datevie,width:wp(33)}}>
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
  return (
   <Container backgroundColor={Colors.statusbarcolor}>
 <Simpleheader
        title={'Draft Notes'}
        navigation={props.navigation}/>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.mainheadingview}>
          <ResponsiveText style={styles.mainheading}>
                {'Draft Notes'}
              </ResponsiveText>
          </View>
  
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
  </ScrollView>
  </ScrollView>
   </Container>
  )
}

export default DraftNotes
const styles = StyleSheet.create({

  /////table start

   headingtxt1:{
     fontSize:16,fontWeight:'700',color:Colors.balckText
   },
   footerstyle:{

     marginHorizontal:wp(3),
     borderBottomWidth:0,
     borderBottomLeftRadius:10,
     borderBottomRightRadius:10,
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
     borderRightWidth:0,
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
    borderColor:Colors.borderColor,
     backgroundColor:Colors.primary,
     marginHorizontal:wp(3),marginTop:hp(3),
      borderWidth:1,
     flexDirection:'row',
     alignItems:'center',
   
   },
   datevie:{
     borderWidth:1,
     paddingVertical:3,
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
   mainheading:{
    fontSize:24,
    fontWeight:'700',
    color:Colors.balckText
  },
  mainheadingview:{
    borderWidth:0,marginTop:hp(3),marginHorizontal:wp(3)
  },
   /////table end
})