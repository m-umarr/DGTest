import { View, StyleSheet ,TouchableOpacity,FlatList,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,InputField,Icons,Dropdown,Button} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';

const PreviousNotes = (props) => {
  
      let data=[
        {
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Title:'Psychiatric Evaluation',
          Author:'John Doe'
           
        },
        {
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Title:'Psychiatric Evaluation',
          Author:'John Doe'

        },
        {
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Title:'Psychiatric Evaluation',
          Author:'John Doe'

        },
        {
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Title:'Psychiatric Evaluation',
          Author:'John Doe'

        },
        {
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Title:'Psychiatric Evaluation',
          Author:'John Doe'

        },
       
      ]
      const renderItem=({item,index})=>{
        return(


<View style={{...styles.headinsg1,backgroundColor:index%2!=0?  'white':'#EFF6FA'}}> 

<View style={styles.datevie}>
<ResponsiveText style={styles.headingtxt1}>
      {item.date}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(40)}}>
          <ResponsiveText style={styles.headingtxt1}>
                {item.Title}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(16)}}>

<ResponsiveText style={styles.headingtxt1}>
      {item.time}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Patient}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Author}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,width:wp(33)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Location}
    </ResponsiveText>
</View>
           
</View>
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
          <View style={{...styles.datevie,width:wp(16)}}>

          <ResponsiveText style={styles.headingtxt}>
                {'Time'}
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
        title={'Previous Notes'}
        navigation={props.navigation}/>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.mainheadingview}>
          <ResponsiveText style={styles.mainheading}>
                {'All Notes'}
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
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
  </ScrollView>
  </ScrollView>
   </Container>
  )
}

export default PreviousNotes
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
     borderWidth:1,
     paddingVertical:15,
     width:wp(18),
     alignItems:'center',
     borderColor:Colors.borderColor,
     justifyContent:'center'
   },
   headinsg1:{
     borderWidth:0,
   
     flexDirection:'row',
     justifyContent:'space-between',
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
     borderWidth:0,
     backgroundColor:Colors.primary,
     marginHorizontal:wp(3),marginTop:hp(3),
    
     flexDirection:'row',
     alignItems:'center',

   },
   datevie:{
     borderWidth:1,
     paddingVertical:3,
     width:wp(22),
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