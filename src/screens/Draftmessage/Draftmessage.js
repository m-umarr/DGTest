import { View, StyleSheet ,TouchableOpacity,FlatList,} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,Icons} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Draftmessage = (props) => {

const [selectedid, setselectedid] = useState([]);

    let data=[
        {
          id:1,
            message:'Message',
            datetime:'Wed 12:30'
        },
        {
          id:2,
            message:'Message',
            datetime:'Wed 12:30'
        },
      
      ]

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
        return(


<View style={{...styles.headinsg1,backgroundColor:index%2!=0?  'white':'#EFF6FA'}}> 

<TouchableOpacity onPress={()=>pushmessage(item.id)} style={{...styles.datevie,width:wp(10)}}>
       
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
      {item.message}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(27)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.datetime}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,width:wp(30),flexDirection:'row',borderWidth:1,justifyContent:'space-around',alignItems:"center"}}>

<TouchableOpacity>

<Icons icon={Images.messages}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Createmessage')}>

<Icons icon={Images.edit1}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>

<TouchableOpacity>

<Icons icon={Images.trash}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>
<TouchableOpacity>

<Icons icon={Images.Pinmessage}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>
          </View>
    
</View>
        )
      }
      const ListHeaderComponent = () => {
        return (
          <View style={styles.headinsg}> 
          <TouchableOpacity style={{...styles.datevie,width:wp(10)}}>
                   <Icon
                                   name="check-box-outline-blank"
                                   //check-box
                                   size={18}
                                   color={Colors.textColorWhite}
                                 
                                 />
          </TouchableOpacity>
         
          <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
                {'Message'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(27)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Date/Time'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(30)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Action'}
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
        title={'Draft Message'}
        navigation={props.navigation}/>
 <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.mainheadingview}>
          <ResponsiveText style={styles.mainheading}>
                {'All Messages'}
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

export default Draftmessage

const styles = StyleSheet.create({

     /////table start

      headingtxt1:{
        fontSize:12,fontWeight:'700',color:Colors.balckText,
      },
      mainheading:{
        fontSize:24,
        fontWeight:'700',
        color:Colors.balckText
      },
      mainheadingview:{
        borderWidth:0,marginTop:hp(3),marginHorizontal:wp(3)
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
 
      datetxt:{fontSize:16,color:Colors.balckText,fontWeight:'600'},
      headinsg:{
        borderRightWidth:0,
        borderLeftWidth:0,
        backgroundColor:Colors.primary,
        marginHorizontal:wp(3),marginTop:hp(3),
        flexDirection:'row',
        borderColor:Colors.borderColor,
        borderBottomWidth:0

     
      },
      datevie:{
        borderWidth:1,
        paddingVertical:3,
        width:wp(20),
        alignItems:'center',
        borderColor:Colors.borderColor
      },
      headingtxt:{
        fontSize:16,fontWeight:'700',color:'white'
      },
      headingtxt1:{
        fontSize:14,fontWeight:'400',color:'black'
      },
      /////table end
})