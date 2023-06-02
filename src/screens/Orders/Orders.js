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

const Orders = (props) => {

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
        <Simpleheader
        title={'Orders'}
        navigation={props.navigation}/>
        <View style={styles.textview}>

        <ResponsiveText style={{...styles.text,color:'#6D6D6D'}}>
    {
  'This Pgae you’ve required is not available right now'
}
  </ResponsiveText>


  <ResponsiveText style={{...styles.textbold}}>
    {
  'Please contact admin for any queries.'
}
  </ResponsiveText>

  <ResponsiveText style={{...styles.textbold,color:Colors.primary}}>
    {
  'support@psychplus.io'
}
  </ResponsiveText>
        </View>
      
   </Container>
  )
}

export default Orders

const styles = StyleSheet.create({
  textview:{borderWidth:0,marginHorizontal:wp(5),
marginTop:hp(30),
alignItems:"center"

},
text:{
fontWeight:'500',
fontSize:14,
lineHeight:17
},
textbold:{
fontWeight:'600',
fontSize:18,
lineHeight:21,
color:'black',
marginTop:hp(2)
}
   
})