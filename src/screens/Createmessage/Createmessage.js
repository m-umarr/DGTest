import { View, StyleSheet ,TouchableOpacity,Text,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,InputField,Icons,Dropdown,Button} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

const Createmessage = (props) => {
    const richText = React.useRef();
  return (
    <Container backgroundColor={Colors.textColorWhite}>
        <Simpleheader
        title={'Create Message'}
        headercontainer={{backgroundColor:Colors.textColorWhite}}
        navigation={props.navigation}/>
       <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView showsVerticalScrollIndicator={false}>
     
<View style={styles.inputview}>
        <InputField
        placeholder={'Send to staff'}
        // value={''}
        backgroundColor={'white'}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>

        <View style={styles.inputview}>
        <InputField
        placeholder={'Send to Patient'}
        backgroundColor={'white'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>
    
   <View style={styles.rowview}>
   <ResponsiveText style={styles.pptxt}>
            {'Urgent'}
          </ResponsiveText>
          <TouchableOpacity style={{marginLeft:10}}>
          <Icon
                          name="check-box-outline-blank"
                          //check-box
                          size={18}
                          color={Colors.BtnBackground}
                        
                        />
   </TouchableOpacity>
   </View>

   <View style={styles.inputview}>
        <InputField
        placeholder={'Subject'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
        <View style={styles.inputview}>
       
              <View style={{borderWidth:1,borderRadius:10,borderColor:Colors.borderColor,height:hp(30.2)}}>   
   <RichEditor
                        ref={richText}
                        containerStyle={{borderWidth:0,height:hp(40),minHeight:hp(30),borderRadius:10}}
                      style={{borderWidth:0,height:hp(10)}}
                    
                        placeholder={'Message'}
                        
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
               </View>

               <RichToolbar
                editor={richText}
                style={{backgroundColor:'white'}}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline,]}
                // iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            />
                    </View>
     
        
                   
                </KeyboardAvoidingView>
               

       

 <View style={styles.btnview}>
            <Button
            title={'Send Message'}
            onPress={()=>props.navigation.goBack()}
            btnContainer={{width:wp(40)}}/>
            <Button
            title={'Save as Draft'}
            onPress={()=>props.navigation.goBack()}
            btnContainer={{width:wp(40)}}/>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
   </Container>
  )
}

export default Createmessage

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(1.5),
        marginHorizontal:wp(5),
        justifyContent:'center',
        backgroundColor:'white',
        alignContent:'center'  },
        saveview:{
            borderWidth:0,borderRadius:8,paddingHorizontal:wp(10),padding:10,borderColor:Colors.borderColor,backgroundColor:Colors.primary
        },
        btnviewmain:{
            borderWidth:0,marginTop:hp(3),borderColor:'red',marginHorizontal:wp(5),alignItems:'flex-end',
        },
        rowview:{
            borderWidth:0,marginTop:hp(2),flexDirection:'row',marginHorizontal:wp(5),
            alignItems:'center',
        },
        pptxt:{color:'black',fontSize:16,fontWeight:'700',marginLeft:5},
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(5),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'space-between',flexDirection:'row'},

            /////table start

            headinsg1:{
              borderWidth:0,
              marginHorizontal:wp(3),
              flexDirection:'row',
              justifyContent:'space-between'
            },
            headingtxt1:{
              fontSize:12,fontWeight:'700',color:Colors.balckText
            },
            datevie1:{
              borderRightWidth:1,
              paddingVertical:15,
              width:wp(23),
              alignItems:'center',
              borderColor:Colors.borderColor,
              justifyContent:'center'
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
              borderTopRightRadius:7,
              borderTopLeftRadius:7,
              flexDirection:'row',
              justifyContent:'space-between'
            },
            datevie:{
              borderRightWidth:1,
              paddingVertical:25,
              width:wp(23),
              alignItems:'center',
              borderColor:Colors.borderColor
            },
            headingtxt:{
              fontSize:14,fontWeight:'700',color:'white'
            },
            /////table end
})