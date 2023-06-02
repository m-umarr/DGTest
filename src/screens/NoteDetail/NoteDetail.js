import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState,useRef} from 'react';
import {
  Container,
  Colors,
  CommentsInput,
  Simpleheader,
  ResponsiveText,
  Images,
  InputField,
  Icons,
  Dropdown,
  Button,
} from '../../components/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import {color} from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const NoteDetail = props => {
  let complaints = [
    {
      id: 1,
      value: 'Depression',
    },
    {
      id: 2,
      value: 'Anxiety',
    },
    {
      id: 3,
      value: 'ADHD',
    },
    {
      id: 4,
      value: 'OCD',
    },
    {
      id: 5,
      value: 'PTSD',
    },
    {
      id: 6,
      value: 'Bipolar',
    },
    {
      id: 7,
      value: 'Schizonphren',
    },
    {
      id: 8,
      value: 'Substance User',
    },
    {
      id: 9,
      value: 'Other',
    },
  ];
 
  const [myseelctedoption, setmyseelctedoption] = useState([]);
  const [selectedSymptomsvalue, setselectedSymptomsvalue] = useState([]);
  const [psychiatricillness, setpsychiatricillness] = useState([]);
  const [SocialHistory, setSocialHistory] = useState([]);
  const [EducationLevel, setEducationLevel] = useState([]);
  const [familyhistory, setfamilyhistory] = useState([]);
  const [LivingCompanion, setLivingCompanion] = useState([]);
  const [LivingSituation, setLivingSituation] = useState([]);
  const [PastMedicalHistory, setPastMedicalHistory] = useState([]);
  const [ReviewofSystem, setReviewofSystem] = useState([]);
  const [MentalStatus, setMentalStatus] = useState([]);

  
  const [depression, setdepression] = useState('No');
  const [anxiety, setanxiety] = useState('No');
  const [suicide, setsuicide] = useState('No');
  const [sexuallyactive, setsexuallyactive] = useState('No');
  const [safesex, setsafesex] = useState('No');
  const [Isemploy, setIsemploy] = useState('No');
  const [Isjailperson, setIsjailperson] = useState('No');
  const [injury, setinjury] = useState('No');
  const [breastfeeding, setbreastfeeding] = useState('No');
  const ListHeaderComponent = () => {
    return (
      <View style={styles.headinsg}> 
      <View style={{...styles.datevie,width:wp(24)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Date'}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(24)}}>
<ResponsiveText style={styles.headingtxt}>
   {'BP (sys/dia)'}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt}>
   {'HR'}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt}>
   {'RR'}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Temp'}
 </ResponsiveText>
 </View>


 <View style={{...styles.datevie,width:wp(25)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Weight (lbs)'}
 </ResponsiveText>
 </View>
 <View style={{...styles.datevie,width:wp(20)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Height (in)'}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt}>
   {'BMI'}
 </ResponsiveText>
 </View>
 {/* <View style={{...styles.datevie}}>
<ResponsiveText style={styles.headingtxt}>
   {'Action'}
 </ResponsiveText>
 </View> */}
 </View>

    );
  };
  const ConceltentHeader = () => {
    return (
      <View style={styles.headinsg}> 
      <View style={{...styles.datevie,width:wp(40)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Date/Time of Consult'}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(26)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Provider'}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(18)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Author'}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(35)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Location'}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(54)}}>
<ResponsiveText style={styles.headingtxt}>
   {'Visit Type'}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt}>
   {'Status'}
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
  // Substancehistory//

  const [drinkingalcohol, setdrinkingalcohol] = useState('No');
  const [historyofalcohol, sethistoryofalcohol] = useState('No');
  const [illegally, setillegally] = useState('No');
  const [othersubstances, setothersubstances] = useState('No');
  const [Issmoke, setIssmoke] = useState('No');
  const [treatment, settreatment] = useState('No');

  const refRBSheet = useRef();
  let newarray = [];
  // setmyseelctedoption.push(item.id);
  
  const pushMentalStatus = id => {
    if (MentalStatus.includes(id) === true) {
      const updatedArr = MentalStatus.filter(e => e !== id);

      setMentalStatus(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...MentalStatus, id];
      setMentalStatus(array1);
    }
  };
  const pushReviewofSystem = id => {
    if (ReviewofSystem.includes(id) === true) {
      const updatedArr = ReviewofSystem.filter(e => e !== id);

      setReviewofSystem(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...ReviewofSystem, id];
      setReviewofSystem(array1);
    }
  };
  const pushPastMedicalHistory = id => {
    if (PastMedicalHistory.includes(id) === true) {
      const updatedArr = PastMedicalHistory.filter(e => e !== id);

      setPastMedicalHistory(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...PastMedicalHistory, id];
      setPastMedicalHistory(array1);
    }
  };
 
  const pushLivingSituation = id => {
    if (LivingSituation.includes(id) === true) {
      const updatedArr = LivingSituation.filter(e => e !== id);

      setLivingSituation(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...LivingSituation, id];
      setLivingSituation(array1);
    }
  };
 
  const pushSocialHistory = id => {
    if (SocialHistory.includes(id) === true) {
      console.log('if condition true', SocialHistory);
      const updatedArr = SocialHistory.filter(e => e !== id);

      setSocialHistory(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...SocialHistory, id];
      console.log('if component reloaded', newarray);
      setSocialHistory(array1);
      console.log('if component reloaded1', newarray);
    }
  };
 

  const pushLivingCompanion = id => {
    if (LivingCompanion.includes(id) === true) {
      console.log('if condition true', LivingCompanion);
      const updatedArr = LivingCompanion.filter(e => e !== id);

      setLivingCompanion(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...LivingCompanion, id];
   
      setLivingCompanion(array1);

    }
  };
 
  const pushEducationLevel = id => {
    if (EducationLevel.includes(id) === true) {
      console.log('if condition true', EducationLevel);
      const updatedArr = EducationLevel.filter(e => e !== id);

      setEducationLevel(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...EducationLevel, id];
   
      setEducationLevel(array1);

    }
  };
 

  const pushfamilyhistory = id => {
    if (familyhistory.includes(id) === true) {
      console.log('if condition true', familyhistory);
      const updatedArr = familyhistory.filter(e => e !== id);

      setfamilyhistory(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...familyhistory, id];
      setfamilyhistory(array1);
    }
  };
  const pushselectedvalue = id => {
    if (myseelctedoption.includes(id) === true) {
      console.log('if condition true', myseelctedoption);
      const updatedArr = myseelctedoption.filter(e => e !== id);

      setmyseelctedoption(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...myseelctedoption, id];
      console.log('if component reloaded', newarray);
      setmyseelctedoption(array1);
      console.log('if component reloaded1', newarray);
    }
  };
 
  const pushselectedSymptomsvalue = id => {
    if (selectedSymptomsvalue.includes(id) === true) {
      console.log('if condition true', selectedSymptomsvalue);
      const updatedArr = selectedSymptomsvalue.filter(e => e !== id);

      setselectedSymptomsvalue(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...selectedSymptomsvalue, id];
      setselectedSymptomsvalue(array1);
    }
  };
  const pushpsychiatricillness = id => {
    if (psychiatricillness.includes(id) === true) {
      console.log('if condition true', psychiatricillness);
      const updatedArr = psychiatricillness.filter(e => e !== id);

      setpsychiatricillness(updatedArr);
    } else {
      // newarray.push(id);
      var array1 = [...psychiatricillness, id];
      setpsychiatricillness(array1);
    }
  };
  let conceltent=[
    {
      date:'05/08/22:12:55',
      Provider:'Doc PSY,MD',
      Location:'Willowbrook Clinic',
      VisitType:'New Pt, Outpatient Office Visit',
      Status:'Scheduled',
      Author:'John'
    },
    {
      date:'05/08/22:12:55',
      Provider:'Doc PSY,MD',
      Location:'Willowbrook Clinic',
      VisitType:'New Pt, Outpatient Office Visit',
      Status:'Scheduled',
      Author:'John'

    }, {
      date:'05/08/22:12:55',
      Provider:'Doc PSY,MD',
      Location:'Willowbrook Clinic',
      VisitType:'New Pt, Outpatient Office Visit',
      Status:'Scheduled',
      Author:'John'

    },
   
  ]
  const renderConceltent=({item,index})=>{
    return(
      <View style={{...styles.headinsgvitals, backgroundColor:index%2!=0?  'white':'#EFF6FA'}}> 
      <View style={{...styles.datevie,width:wp(40)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.date}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(26)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.Provider}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(18)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.Author}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(35)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.Location}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(54)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.VisitType}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.Status}
 </ResponsiveText>
 </View>
 </View>
    )
  }
  let data=[
    {
     id:1,
     date:'',
     bp:'',
     hr:'',
     rr:'',
     temp:'',
     weight:'',
     height:'',
     bmi:'',







    },
    {
      id:2

    },
   
  ]
  const renderVitals=({item,index})=>{
    return(
      <View style={{...styles.headinsgvitals,  backgroundColor:index%2!=0?  'white':'#EFF6FA'}}> 
      <View style={{...styles.datevie,width:wp(24)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.date}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(24)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.bp}
 </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.hr}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.rr}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.temp}
 </ResponsiveText>
 </View>


 <View style={{...styles.datevie,width:wp(25)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.weight}
 </ResponsiveText>
 </View>
 <View style={{...styles.datevie,width:wp(20)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.height}
 </ResponsiveText>
 </View>

 <View style={{...styles.datevie,width:wp(15)}}>
<ResponsiveText style={styles.headingtxt1}>
   {item.bmi}
 </ResponsiveText>
 </View>
 {/* <View style={{...styles.datevie}}>
<ResponsiveText style={styles.headingtxt}>
   {'Action'}
 </ResponsiveText>
 </View> */}
 </View>

    )
  }
  const renderItem = ({item, index}) => {
    return (
    
      <View key={index}>
        <TouchableOpacity
          onPress={() => pushselectedvalue(item.id)}
          style={styles.renderview}>
          {myseelctedoption.includes(item.id) == true ? (
            <Icon name="check-box" size={18} color={Colors.primary}
            style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text1}}>
            {item.value}
          </ResponsiveText>
        </TouchableOpacity>
      </View>
   
    );
  };

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
      <Simpleheader title={'Note Detail'} navigation={props.navigation} />


      <View style={styles.flotingbtn}>
<TouchableOpacity  onPress={() => refRBSheet.current.open()}
style={{...styles.btnstyle,borderColor:Colors.primary}}>
<ResponsiveText style={styles.btntext}>
              {'Create Addendum'}
            </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity style={{...styles.btnstyle,flexDirection:'row'}}>


<Icons icon={Images.signpen}
style={{width:wp(5),height:wp(5)}}/>
<ResponsiveText style={styles.btntext}>
              {'Sign'}
            </ResponsiveText>
</TouchableOpacity>
</View>
      
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: hp(6),marginBottom:hp(5)}}>


          <View style={{...styles.textheading,marginTop:hp(2)}}>
            <ResponsiveText style={styles.txt}>
              {'Psychiatric Evaluation'}
            </ResponsiveText>
          </View>

          <View style={styles.graybckground}>
            <View style={styles.rowview}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Title:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'Psychiatric Evaluation'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Visit Type:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.textVisit}}>
                {'New Pt, Outpatient Office Visit'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Provider:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'DR DRTEST1, MD'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Location:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'Willowbrook Clinic'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Date:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'8/17/2022'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Time:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'16:41:00'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Patient:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'TEST LEO'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'DOB:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'4/21/1997'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Co-Signer:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>{'--'}</ResponsiveText>
            </View>
          </View>
          <View style={styles.textheading}>
            <ResponsiveText style={styles.txt}>
              {'History Of Present Illness'}
            </ResponsiveText>
          </View>
          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Chief Complaint:'}
            </ResponsiveText>
          </View>

          
            <FlatList
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              data={complaints}
              numColumns={5}
              listKey={item => item.value.toString()}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.id}
            />
        
      
          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Presenting Symptoms:'}
            </ResponsiveText>
          </View>


{/* check boxissssss start */}
<View>
<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Low Mood')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Low Mood') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Low Mood'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Sleep Concerns')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Sleep Concerns') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Sleep Concerns'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Low Interest')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Low Interest') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Low Interest'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Guilt')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Guilt') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Guilt'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Poor Energy')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Poor Energy') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Poor Energy'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Poor Concentration')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Poor Concentration') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Poor Concentration'}
          </ResponsiveText>
        </TouchableOpacity>

</View>
      
<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Poor Motivation')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Poor Motivation') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Poor Motivation'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Appetite Concerns')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Appetite Concerns') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Appetite Concerns'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hopeless')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hopeless') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hopeless'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Feeling Anxious')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Feeling Anxious') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Feeling Anxious'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Worrying')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Worrying') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Worrying'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Restless')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Restless') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Restless'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Fatigues')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Fatigues') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Fatigues'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Muscle Tention')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Muscle Tention') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Muscle Tention'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Irritable')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Irritable') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Irritable'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Worrying')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Worrying') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Worrying'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Restless')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Restless') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Restless'}
          </ResponsiveText>
        </TouchableOpacity>

</View>


<View style={styles.row3}>
   

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Social Anxiety')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Social Anxiety') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Social Anxiety'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Irritable')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Irritable') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Irritable'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Panic Attacks')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Panic Attacks') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Panic Attacks'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Distractable')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Distractable') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Distractable'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Phobia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Phobia') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Phobia'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Goal Directed')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Goal Directed') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Goal Directed'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Startled')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Startled') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Startled'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Abnormal Fear')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Abnormal Fear') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Abnormal Fear'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Grandios Delusions')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Grandios Delusions') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Grandios Delusions'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Avoidance')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Avoidance') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Avoidance'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Elevated Mood')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Elevated Mood') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Elevated Mood'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Pressured Speech')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Pressured Speech') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Pressured Speech'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Lack Of Sleep')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Lack Of Sleep') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Lack Of Sleep'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>
<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Flight of Ideas')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Flight of Ideas') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Flight of Ideas'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Traumatic Event')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Traumatic Event') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Traumatic Event'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Nightmares')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Nightmares') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Nightmares'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Intrusive Memories')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Intrusive Memories') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Intrusive Memories'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Night Terrors')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Night Terrors') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Night Terrors'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Detachment')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Detachment') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Detachment'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Dissociative Episodes')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Dissociative Episodes') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Dissociative Episodes'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hypervigilance')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hypervigilance') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hypervigilance'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Flashbacks')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Flashbacks') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Flashbacks'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Contamination')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Contamination') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Contamination'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Doubt')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Doubt') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Doubt'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Somatic')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Somatic') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Somatic'}
          </ResponsiveText>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Agression')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Agression') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Agression'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Sexual')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Sexual') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Sexual'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Checking')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Checking') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Checking'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Washing')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Washing') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Washing'}
          </ResponsiveText>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Counting')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Counting') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Counting'}
          </ResponsiveText>
        </TouchableOpacity>

</View>



<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hoarding')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hoarding') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hoarding'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Picking')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Picking') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Picking'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Emptiness')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Emptiness') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Emptiness'}
          </ResponsiveText>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Impulsive')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Impulsive') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Impulsive'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Fear of Abondonement')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Fear of Abondonement') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Fear of Abondonement'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Unstable Self-Image')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Unstable Self-Image') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Unstable Self-Image'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Unstable Relationship')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Unstable Relationship') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Unstable Relationship'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Mood Swings')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Mood Swings') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Mood Swings'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Self Harm')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Self Harm') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Self Harm'}
          </ResponsiveText>
        </TouchableOpacity>
      
     

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Black/White Thinking')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Black/White Thinking') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Black/White Thinking'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Careless Mistakes')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Careless Mistakes') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Careless Mistakes'}
          </ResponsiveText>
        </TouchableOpacity>


</View>
<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Decreased Attention')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Decreased Attention') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Decreased Attention'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue(`Doesn't Listen`)}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes(`Doesn't Listen`) == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {`Doesn't Listen`}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Forgetful')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Forgetful') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Forgetful'}
          </ResponsiveText>
        </TouchableOpacity>
      
      

</View> 


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hard to Follow Instruction')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hard to Follow Instruction') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hard to Follow Instruction'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Difficult Organizing')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Difficult Organizing') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Difficult Organizing'}
          </ResponsiveText>
        </TouchableOpacity>


</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Difficult to do Detail Oriented Tasks')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Difficult to do Detail Oriented Tasks') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Difficult to do Detail Oriented Tasks'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Loses Things')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Loses Things') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Loses Things'}
          </ResponsiveText>
        </TouchableOpacity>

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Easily Distracted')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Easily Distracted') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Easily Distracted'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Fidgetting')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Fidgetting') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Fidgetting'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Restless')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Restless') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Restless'}
          </ResponsiveText>
        </TouchableOpacity>
      
      

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Leaves Assigned Space')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Leaves Assigned Space') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Leaves Assigned Space'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hard to Enjoy Relaxing')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hard to Enjoy Relaxing') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hard to Enjoy Relaxing'}
          </ResponsiveText>
        </TouchableOpacity>

   

</View> 


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('On the Go')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('On the Go') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'On the Go'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Exessive Talking')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Exessive Talking') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Exessive Talking'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Blurt Out Answers')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Blurt Out Answers') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Blurt Out Answers'}
          </ResponsiveText>
        </TouchableOpacity>
      
 

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Impatient')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Impatient') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Impatient'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Interrupts')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Interrupts') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Interrupts'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Behavior Outbursts')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Behavior Outbursts') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Behavior Outbursts'}
          </ResponsiveText>
        </TouchableOpacity>
      
       

</View> 


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Memory Loss')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Memory Loss') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Memory Loss'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Confusion')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Confusion') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Confusion'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Difficulty with ADLs')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Difficulty with ADLs') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Difficulty with ADLs'}
          </ResponsiveText>
        </TouchableOpacity>
      
     

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Wandering')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Wandering') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Wandering'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Agitation')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Agitation') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Agitation'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('AH')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('AH') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'AH'}
          </ResponsiveText>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('VH')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('VH') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'VH'}
          </ResponsiveText>
        </TouchableOpacity>

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Parkinson Symptoms')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Parkinson Symptoms') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Parkinson Symptoms'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Paranoid Delusion')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Paranoid Delusion') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Paranoid Delusion'}
          </ResponsiveText>
        </TouchableOpacity>


</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Auditory Hallucinations')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Auditory Hallucinations') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Auditory Hallucinations'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Disorganized')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Disorganized') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Disorganized'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Anhedonia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Anhedonia') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Anhedonia'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Avolution')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Avolution') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Avolution'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Catatonia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Catatonia') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Catatonia'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Suicidal Thoughts')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Suicidal Thoughts') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Suicidal Thoughts'}
          </ResponsiveText>
        </TouchableOpacity>
      
       
</View>




<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Homicidal Thoughts')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Homicidal Thoughts') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Homicidal Thoughts'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('GI Upset')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('GI Upset') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'GI Upset'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Sexual SE')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Sexual SE') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Sexual SE'}
          </ResponsiveText>
        </TouchableOpacity>
    

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Weight Gain')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Weight Gain') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Weight Gain'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Headache')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Headache') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Headache'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Rash')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Rash') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Rash'}
          </ResponsiveText>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Hairloss')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Hairloss') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Hairloss'}
          </ResponsiveText>
        </TouchableOpacity>

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Dystonia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Dystonia') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Dystonia'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Akathesia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Akathesia') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Akathesia'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Tardive Dyskinesia')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Tardive Dyskinesia') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Tardive Dyskinesia'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Blurred Vision')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Blurred Vision') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Blurred Vision'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Drowsiness')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Drowsiness') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Drowsiness'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushselectedSymptomsvalue('Dizzy')}
          style={styles.renderview1}>
          {selectedSymptomsvalue.includes('Dizzy') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary}
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Dizzy'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>
</View>
{/* check boxissssss End */}
<View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Past Psychiatry History:'}
            </ResponsiveText>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={styles.textheading1}>
              {'How many previous psychiatric hospitalizations have you had?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(12)}
        />
        </View>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={styles.textheading1}>
              {'How many previous suicide attempts have you had?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(12)}
        />
        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you have history of depression?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setdepression('Yes')} style={styles.radiotext}>
          <Icons icon={depression=='Yes'?Images.Radiocheck:Images.radiouncheck}
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setdepression('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={depression=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>


          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'Started Age'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>


          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you have history of anxiety?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setanxiety('Yes')} style={styles.radiotext}>
            <Icons icon={anxiety=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setanxiety('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={anxiety=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>


          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'Started Age'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>
          <View style={styles.textheading}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Select history of psychiatric illness'}
            </ResponsiveText>
          </View>

          <View>

          <View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Schizophrenia')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Schizophrenia') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Schizophrenia'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Bipolor disorder')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Bipolor disorder') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Bipolor disorder'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Obsessive thinking')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Obsessive thinking') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Obsessive thinking'}
          </ResponsiveText>
        </TouchableOpacity>


</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Compulsive Behaviour')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Compulsive Behaviour') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Compulsive Behaviour'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('ADHD')}
          style={styles.renderview1}>
          {psychiatricillness.includes('ADHD') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'ADHD'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Autism')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Autism') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Autism'}
          </ResponsiveText>
        </TouchableOpacity>


</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Eating Disorder')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Eating Disorder') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Eating Disorder'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Exposure to Trauma')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Exposure to Trauma') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'AExposure to Trauma'}
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Dementia')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Dementia') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Dementia'}
          </ResponsiveText>
        </TouchableOpacity>


</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Cutting/Self -Harm Behaviour')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Cutting/Self -Harm Behaviour') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Cutting/Self -Harm Behaviour'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Mood Swings')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Mood Swings') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Mood Swings'}
          </ResponsiveText>
        </TouchableOpacity>
   

</View>


<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Problems with Sleep')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Problems with Sleep') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Problems with Sleep'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Panic Attacks')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Panic Attacks') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Panic Attacks'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>

<View style={styles.row3}>
    <TouchableOpacity
          onPress={() => pushpsychiatricillness('Personality Disorder')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Personality Disorder') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Personality Disorder'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushpsychiatricillness('Intellectual Disability')}
          style={styles.renderview1}>
          {psychiatricillness.includes('Intellectual Disability') == true ? (
            <Icon name="check-box" size={18}
             color={Colors.primary} 
             style={styles.checkbox}
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
          <ResponsiveText style={{...styles.text2}}>
            {'Intellectual Disability'}
          </ResponsiveText>
        </TouchableOpacity>
      

</View>
          </View>


          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'Other Pertinent History'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>


          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'Past Mediation Trials'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Family History:'}
            </ResponsiveText>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Has anyone committed suicide in your family?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setsuicide('Yes')} style={styles.radiotext}>
            <Icons icon={suicide=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setsuicide('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={suicide=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>


          <View style={styles.textheading}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText,fontSize:14,fontWeight:'400'}}>
              {'Do you have any history of following disorders in your family?'}
            </ResponsiveText>
          </View>


          <View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Anxiety')}
          style={styles.renderview1}>
          {familyhistory.includes('Anxiety') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Anxiety'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>

<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Depression')}
          style={styles.renderview1}>
          {familyhistory.includes('Depression') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Depression'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>

<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('OCD')}
          style={styles.renderview1}>
          {familyhistory.includes('OCD') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'OCD'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>
<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Bipolor disorder')}
          style={styles.renderview1}>
          {familyhistory.includes('Bipolor disorder') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Bipolor disorder'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>
<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Schizophrenia')}
          style={styles.renderview1}>
          {familyhistory.includes('Schizophrenia') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Schizophrenia'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>

<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Alcohol use disorder')}
          style={styles.renderview1}>
          {familyhistory.includes('Alcohol use disorder') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Alcohol use disorder'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>


<View style={styles.rowspacebetween}>
    <TouchableOpacity
          onPress={() => pushfamilyhistory('Dementia')}
          style={styles.renderview1}>
          {familyhistory.includes('Dementia') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Dementia'}
          </ResponsiveText>
        </TouchableOpacity>

        <View style={styles.familytextview}>
          <ResponsiveText style={{...styles.familytext}}>
              {'Relationship'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

      

</View>

<View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Social History:'}
            </ResponsiveText>
          </View>

          <View style={styles.row3}>
  
          <ResponsiveText style={{...styles.text2,fontSize:14,fontWeight:'500'}}>
            {'Relationship status:'}
          </ResponsiveText>
    

        <TouchableOpacity
          onPress={() => pushSocialHistory('Single')}
          style={styles.renderview1}>
          {SocialHistory.includes('Single') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Single'}
          </ResponsiveText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushSocialHistory('Divorced/separated')}
          style={styles.renderview1}>
          {SocialHistory.includes('Divorced/separated') == true ? (
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
          <ResponsiveText style={{...styles.text2}}>
            {'Divorced/separated'}
          </ResponsiveText>
        </TouchableOpacity>
        
</View>

<View style={styles.row3}>
  


<TouchableOpacity
  onPress={() => pushSocialHistory('Dating')}
  style={styles.renderview1}>
  {SocialHistory.includes('Dating') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Dating'}
  </ResponsiveText>
</TouchableOpacity>



<TouchableOpacity
  onPress={() => pushSocialHistory('Married')}
  style={styles.renderview1}>
  {SocialHistory.includes('Married') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Married'}
  </ResponsiveText>
</TouchableOpacity>


</View>


<View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'How many times have you been married?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'How long have you been married or in a relationship?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Are you sexually active?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setsexuallyactive('Yes')} style={styles.radiotext}>
            <Icons icon={sexuallyactive=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setsexuallyactive('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={sexuallyactive=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>
          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Are you sexually active?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setsafesex('Yes')} style={styles.radiotext}>
            <Icons icon={safesex=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setsafesex('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={safesex=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>
          <View style={styles.row3}>
  
  <ResponsiveText style={{...styles.text2,fontSize:14,fontWeight:'500'}}>
    {'Education Level:'}
  </ResponsiveText>


<TouchableOpacity
  onPress={() => pushEducationLevel('In School')}
  style={styles.renderview1}>
  {EducationLevel.includes('In School') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'In School'}
  </ResponsiveText>
</TouchableOpacity>



<TouchableOpacity
  onPress={() => pushEducationLevel('Graduated High School')}
  style={styles.renderview1}>
  {EducationLevel.includes('Graduated High School') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Graduated High School'}
  </ResponsiveText>
</TouchableOpacity>


</View>

<View style={styles.row3}>
  

<TouchableOpacity
  onPress={() => pushEducationLevel('Graduated College')}
  style={styles.renderview1}>
  {EducationLevel.includes('Graduated College') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Graduated College'}
  </ResponsiveText>
</TouchableOpacity>



<TouchableOpacity
  onPress={() => pushEducationLevel('Received GED')}
  style={styles.renderview1}>
  {EducationLevel.includes('Received GED') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Received GED'}
  </ResponsiveText>
</TouchableOpacity>


</View>

<View style={styles.row3}>
  

<TouchableOpacity
  onPress={() => pushEducationLevel('No GED/HS Graduation')}
  style={styles.renderview1}>
  {EducationLevel.includes('No GED/HS Graduation') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No GED/HS Graduation'}
  </ResponsiveText>
</TouchableOpacity>



</View>
<View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Are you Employed?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setIsemploy('Yes')} style={styles.radiotext}>
            <Icons icon={Isemploy=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setIsemploy('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={Isemploy=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(55)}}>
              {'How many years did you stay at your longest job?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'0'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(30)}
        />
        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Have you ever been to jail/prison?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setIsjailperson('Yes')} style={styles.radiotext}>
            <Icons icon={Isjailperson=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setIsjailperson('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={Isjailperson=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>
          <View style={styles.row3}>
  
  <ResponsiveText style={{...styles.text2,fontSize:14,fontWeight:'500'}}>
    {'Living Companion'}
  </ResponsiveText>


<TouchableOpacity
  onPress={() => pushLivingCompanion('Living Alone')}
  style={styles.renderview1}>
  {LivingCompanion.includes('Living Alone') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Living Alone'}
  </ResponsiveText>
</TouchableOpacity>



<TouchableOpacity
  onPress={() => pushLivingCompanion('With Family')}
  style={styles.renderview1}>
  {LivingCompanion.includes('With Family') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'With Family'}
  </ResponsiveText>
</TouchableOpacity>



</View>
          

<View style={styles.row3}>
  


<TouchableOpacity
  onPress={() => pushLivingCompanion('With roommate')}
  style={styles.renderview1}>
  {LivingCompanion.includes('With roommate') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'With roommate'}
  </ResponsiveText>
</TouchableOpacity>





</View>

<View style={styles.row3}>
  
  <ResponsiveText style={{...styles.text2,fontSize:14,fontWeight:'500'}}>
    {'Living Companion'}
  </ResponsiveText>


<TouchableOpacity
  onPress={() => pushLivingSituation('Own')}
  style={styles.renderview1}>
  {LivingSituation.includes('Own') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Own'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushLivingSituation('Rent')}
  style={styles.renderview1}>
  {LivingSituation.includes('Rent') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Rent'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushLivingSituation('Living with parents')}
  style={styles.renderview1}>
  {LivingSituation.includes('Living with parents') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Living with parents'}
  </ResponsiveText>
</TouchableOpacity>


</View>


<View style={styles.row3}>
  

<TouchableOpacity
  onPress={() => pushLivingSituation('Temporary Living')}
  style={styles.renderview1}>
  {LivingSituation.includes('Temporary Living') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Temporary Living'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushLivingSituation('Homeless')}
  style={styles.renderview1}>
  {LivingSituation.includes('Homeless') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Homeless'}
  </ResponsiveText>
</TouchableOpacity>



</View>


<View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(46)}}>
              {'Other Social History?'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(45)}
        />
        </View>
          </View>



          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Substance Use History:'}
            </ResponsiveText>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Have you been drinking alcohol in the past month?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setdrinkingalcohol('Yes')} style={styles.radiotext}>
            <Icons icon={drinkingalcohol=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setdrinkingalcohol('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={drinkingalcohol=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you have history of alcohol use?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>sethistoryofalcohol('Yes')} style={styles.radiotext}>
            <Icons icon={historyofalcohol=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>sethistoryofalcohol('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={historyofalcohol=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Have you used any other substances in the past month illegally?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setillegally('Yes')} style={styles.radiotext}>
            <Icons icon={illegally=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setillegally('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={illegally=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>


          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you have history of any other substances?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setothersubstances('Yes')} style={styles.radiotext}>
            <Icons icon={othersubstances=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setothersubstances('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={othersubstances=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you smoke?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setIssmoke('Yes')} style={styles.radiotext}>
            <Icons icon={Issmoke=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setIssmoke('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={Issmoke=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Have you been to treatment?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>settreatment('Yes')} style={styles.radiotext}>
            <Icons icon={treatment=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>settreatment('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={treatment=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>


          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(46)}}>
              {'Other substance use history'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(45)}
        />
        </View>
          </View>


          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Past Medical History:'}
            </ResponsiveText>
          </View>

          <View style={{...styles.textheading,marginTop:5}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Select if History'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Asthma')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Asthma') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Asthma'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('High Cholesterol')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('High Cholesterol') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'High Cholesterol'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Migraines')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Migraines') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Migraines'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Cancer')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Cancer') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Cancer'}
    </ResponsiveText>
  </TouchableOpacity>
  

  

  
  </View>

  <View style={styles.row3}>
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Bleeding disorder')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Bleeding disorder') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Bleeding disorder'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('COPD')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('COPD') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'COPD'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('High Blood pressure')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('High Blood pressure') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'High Blood pressure'}
    </ResponsiveText>
  </TouchableOpacity>
  
  


  

  
  </View>

  <View style={styles.row3}>
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Stroke')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Stroke') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Stroke'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Kidney Disease')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Kidney Disease') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Kidney Disease'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Liver Disease')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Liver Disease') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Liver Disease'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  

  
  </View>


  <View style={styles.row3}>
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Diabetes')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Diabetes') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Diabetes'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Heart Disease')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Heart Disease') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Heart Disease'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Seizures')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Seizures') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Seizures'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  

  
  </View>


  <View style={styles.row3}>
  

  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Renal Disease')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Renal Disease') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Renal Disease'}
    </ResponsiveText>
  </TouchableOpacity>
  
  


  
  <TouchableOpacity
    onPress={() => pushPastMedicalHistory('Sexual Dysfunction')}
    style={styles.renderview1}>
    {PastMedicalHistory.includes('Sexual Dysfunction') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Sexual Dysfunction'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  

  
  </View>

  <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Do you have a history of head injury, concussion, seizure?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setinjury('Yes')} style={styles.radiotext}>
            <Icons icon={injury=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setinjury('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={injury=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textradio}>
          <ResponsiveText style={{...styles.textheading1,width:wp(60)}}>
              {'Are you pregnant or trying to get pregnant or breast feeding?'}
            </ResponsiveText>
          <View style={styles.radioview}>

            <TouchableOpacity onPress={()=>setbreastfeeding('Yes')} style={styles.radiotext}>
            <Icons icon={breastfeeding=='Yes'?Images.Radiocheck:Images.radiouncheck}
        
          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'Yes'}
            </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>setbreastfeeding('No')} style={{...styles.radiotext ,marginLeft:10}}>
<Icons icon={breastfeeding=='No'?Images.Radiocheck:Images.radiouncheck}

          
style={{width:wp(4),height:wp(4)}}/>

<ResponsiveText style={{...styles.yesno}}>
              {'No'}
            </ResponsiveText>
</TouchableOpacity>


        </View>
          </View>

          <View style={styles.textinput}>
          <ResponsiveText style={{...styles.textheading1,width:wp(46)}}>
              {'Additional Past Medical History (If any)'}
            </ResponsiveText>
          <View style={styles.inputview}>
          <InputField
        placeholder={'Type'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(45)}
        />
        </View>
          </View>


          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Allergies:'}
            </ResponsiveText>
          </View>
          <View style={styles.textinput}>
      
         
          <InputField
        placeholder={'From Admin'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(5)}
        width={wp(93)}
        />
          </View>

          <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText,fontWeight:'400',fontSize:14}}>
              {'GAD7:Total Score: points'}
            </ResponsiveText>
          </View>
          <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText,fontWeight:'400',fontSize:14}}>
              {'PHQ9:Total Score: points'}
            </ResponsiveText>
          </View>
          <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText,fontWeight:'400',fontSize:14}}>
              {'YBOC: Total Score: points'}
            </ResponsiveText>
          </View>


          <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'ROS (Review of System):'}
            </ResponsiveText>
          </View>
          <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Constitutional:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Weight Change')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Weight Change') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Weight Change'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Fever')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Fever') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Fever'}
  </ResponsiveText>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Chills')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Chills') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Chills'}
  </ResponsiveText>
</TouchableOpacity>



</View>

<View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Fatigue')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Fatigue') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Fatigue'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Other')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>



</View>

<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'ENT/Mouth:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns ENT')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns ENT') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Hearing Changes/Ear Pain')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Hearing Changes/Ear Pain') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Hearing Changes/Ear Pain'}
  </ResponsiveText>
</TouchableOpacity>




</View>

<View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Sinsus congestion')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Sinsus congestion') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Sinsus congestion'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Sore Throat')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Sore Throat') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Sore Throat'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Ent')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Ent') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>



</View>



<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Eyes:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Eyes')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Eyes') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Eye Pain')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Eye Pain') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Eye Pain'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Redness')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Redness') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Redness'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Discharge')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Discharge') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Discharge'}
  </ResponsiveText>
</TouchableOpacity>
</View>

<View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Vision Changes')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Vision Changes') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Vision Changes'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Eye')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Eye') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>


<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Cardiovascular:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Cardiovascular')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Cardiovascular') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Chest Pain')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Chest Pain') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Chest Pain'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Shortness of Breath')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Shortness of Breath') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Shortness of Breath'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Palpitations')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Palpitations') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Palpitations'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Cardiovascular')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Cardiovascular') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>

<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Respiratory:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Respiratory')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Respiratory') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Cough')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Cough') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Cough'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Wheezing')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Wheezing') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Wheezing'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Dyspnea')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Dyspnea') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Dyspnea'}
  </ResponsiveText>
</TouchableOpacity>
</View>

<View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Respiratory')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Respiratory') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>


<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Gastrointestinal:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Gastrointestinal')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Gastrointestinal') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Nausea/Vomiting')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Nausea/Vomiting') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Nausea/Vomiting'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Diarrhea')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Diarrhea') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Diarrhea'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Constipation')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Constipation') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Constipation'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Gastrointestinal')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Gastrointestinal') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>





<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Genitourinary:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Genitourinary')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Genitourinary') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Dysmenorrhea')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Dysmenorrhea') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Dysmenorrhea'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Urinary Frequency')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Urinary Frequency') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Urinary Frequency'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Urinary Incontinence')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Urinary Incontinence') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Urinary Incontinence'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Genitourinary')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Genitourinary') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>




<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Skin:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Skin')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Skin') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Skin Lesions/rash')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Skin Lesions/rash') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Skin Lesions/rash'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Hair Changes')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Hair Changes') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Hair Changes'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Breast Changes')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Breast Changes') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Breast Changes'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Nipple Discharge')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Nipple Discharge') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Nipple Discharge'}
  </ResponsiveText>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Skin')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Skin') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>






<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Musculoskeletal:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Musculoskeletal')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Musculoskeletal') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Myalgias')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Myalgias') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Myalgias'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Join/muscle Stiffness')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Join/muscle Stiffness') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Join/muscle Stiffness'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Breast Changes')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Breast Changes') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Breast Changes'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Musculoskeletal')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Musculoskeletal') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>



<View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Neuro:'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
  onPress={() => pushReviewofSystem('No concerns Neuro')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('No concerns Neuro') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'No concerns'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Weakness')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Weakness') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Weakness'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Paresthesia')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Paresthesia') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Paresthesia'}
  </ResponsiveText>
</TouchableOpacity>

</View>

<View style={styles.row3}>
<TouchableOpacity
  onPress={() => pushReviewofSystem('Dizziness')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Dizziness') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Dizziness'}
  </ResponsiveText>
</TouchableOpacity>


<TouchableOpacity
  onPress={() => pushReviewofSystem('Headache')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Headache') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Headache'}
  </ResponsiveText>
</TouchableOpacity>



<TouchableOpacity
  onPress={() => pushReviewofSystem('Recent Falls')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Recent Falls') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Recent Falls'}
  </ResponsiveText>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => pushReviewofSystem('Other Neuro')}
  style={styles.renderview1}>
  {ReviewofSystem.includes('Other Neuro') == true ? (
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
  <ResponsiveText style={{...styles.text2}}>
    {'Other'}
  </ResponsiveText>
</TouchableOpacity>
</View>

<View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Vitals:'}
            </ResponsiveText>
          </View>

    
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
 <FlatList
               showsVerticalScrollIndicator={false}
               listKey={item => item.value.toString()}
               data={data}
             
               ListHeaderComponent={ListHeaderComponent}
               ListFooterComponent={ConceltentFooter}

               renderItem={renderVitals}
               keyExtractor={(item, index) => index.toString()}
             />
</ScrollView>

 <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Mental Status Exam:'}
            </ResponsiveText>
          </View>

          <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Orientation:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('Name')}
    style={styles.renderview1}>
    {MentalStatus.includes('Name') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Name'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('Place')}
    style={styles.renderview1}>
    {MentalStatus.includes('Place') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Place'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('Date')}
    style={styles.renderview1}>
    {MentalStatus.includes('Date') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Date'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('Time')}
    style={styles.renderview1}>
    {MentalStatus.includes('Time') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'Time'}
    </ResponsiveText>
  </TouchableOpacity>

    
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Orientation')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Orientation') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Appearance:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('casual dress')}
    style={styles.renderview1}>
    {MentalStatus.includes('casual dress') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'casual dress'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('disheveled')}
    style={styles.renderview1}>
    {MentalStatus.includes('disheveled') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'disheveled'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('bad odor')}
    style={styles.renderview1}>
    {MentalStatus.includes('bad odor') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'bad odor'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('obese')}
    style={styles.renderview1}>
    {MentalStatus.includes('obese') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'obese'}
    </ResponsiveText>
  </TouchableOpacity>


  </View>
  <View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('thin')}
    style={styles.renderview1}>
    {MentalStatus.includes('thin') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'thin'}
    </ResponsiveText>
  </TouchableOpacity>
  
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Appearance')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Appearance') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>


  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Behavior:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('redirectable')}
    style={styles.renderview1}>
    {MentalStatus.includes('redirectable') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'redirectable'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('uncooperative')}
    style={styles.renderview1}>
    {MentalStatus.includes('uncooperative') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'uncooperative'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('poor eye contact')}
    style={styles.renderview1}>
    {MentalStatus.includes('poor eye contact') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'poor eye contact'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>
  <View style={styles.row3}>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Behavior:')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Behavior:') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>



  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Psychomotor:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('no slowing/agitation')}
    style={styles.renderview1}>
    {MentalStatus.includes('no slowing/agitation') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'no slowing/agitation'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('agitation')}
    style={styles.renderview1}>
    {MentalStatus.includes('agitation') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'agitation'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('slowing')}
    style={styles.renderview1}>
    {MentalStatus.includes('slowing') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'slowing'}
    </ResponsiveText>
  </TouchableOpacity>
  
  
  </View>
  <View style={styles.row3}>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('catatonic')}
    style={styles.renderview1}>
    {MentalStatus.includes('catatonic') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'catatonic'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Psychomotor')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Psychomotor') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>


  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Speech:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('regular rate/rhythm')}
    style={styles.renderview1}>
    {MentalStatus.includes('regular rate/rhythm') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'regular rate/rhythm'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('rapid')}
    style={styles.renderview1}>
    {MentalStatus.includes('rapid') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'rapid'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('slowing')}
    style={styles.renderview1}>
    {MentalStatus.includes('slowing') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'slowing'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('muffled')}
    style={styles.renderview1}>
    {MentalStatus.includes('muffled') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'muffled'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>
  <View style={styles.row3}>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('latent')}
    style={styles.renderview1}>
    {MentalStatus.includes('latent') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'latent'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Speech')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Speech') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Mood:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('depressed')}
    style={styles.renderview1}>
    {MentalStatus.includes('depressed') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'depressed'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('dysphoric')}
    style={styles.renderview1}>
    {MentalStatus.includes('dysphoric') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'dysphoric'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('anxious')}
    style={styles.renderview1}>
    {MentalStatus.includes('anxious') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'anxious'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('elevated')}
    style={styles.renderview1}>
    {MentalStatus.includes('elevated') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'elevated'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>
  <View style={styles.row3}>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('irritable')}
    style={styles.renderview1}>
    {MentalStatus.includes('irritable') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'irritable'}
    </ResponsiveText>
  </TouchableOpacity>
  
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('angry')}
    style={styles.renderview1}>
    {MentalStatus.includes('angry') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'angry'}
    </ResponsiveText>
  </TouchableOpacity>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('euthymic')}
    style={styles.renderview1}>
    {MentalStatus.includes('euthymic') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'euthymic'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Mood')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Mood') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>



  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Affect:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('mood-congruent')}
    style={styles.renderview1}>
    {MentalStatus.includes('mood-congruent') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'mood-congruent'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('mood-incongruent')}
    style={styles.renderview1}>
    {MentalStatus.includes('mood-incongruent') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'mood-incongruent'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('intense')}
    style={styles.renderview1}>
    {MentalStatus.includes('intense') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'intense'}
    </ResponsiveText>
  </TouchableOpacity>
 
  </View>
  <View style={styles.row3}>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('restricted')}
    style={styles.renderview1}>
    {MentalStatus.includes('restricted') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'restricted'}
    </ResponsiveText>
  </TouchableOpacity>
  
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('blunted')}
    style={styles.renderview1}>
    {MentalStatus.includes('blunted') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'blunted'}
    </ResponsiveText>
  </TouchableOpacity>
    
  <TouchableOpacity
    onPress={() => pushMentalStatus('flat')}
    style={styles.renderview1}>
    {MentalStatus.includes('flat') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'flat'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('labile')}
    style={styles.renderview1}>
    {MentalStatus.includes('labile') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'labile'}
    </ResponsiveText>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Affect')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Affect') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  
  </View>


  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Association:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('intact')}
    style={styles.renderview1}>
    {MentalStatus.includes('intact') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'intact'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('loose')}
    style={styles.renderview1}>
    {MentalStatus.includes('loose') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'loose'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('illogical')}
    style={styles.renderview1}>
    {MentalStatus.includes('illogical') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'illogical'}
    </ResponsiveText>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Association')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Association') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>
 

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Thought process:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('linear')}
    style={styles.renderview1}>
    {MentalStatus.includes('linear') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'linear'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('circumstantial')}
    style={styles.renderview1}>
    {MentalStatus.includes('circumstantial') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'circumstantial'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('tangential')}
    style={styles.renderview1}>
    {MentalStatus.includes('tangential') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'tangential'}
    </ResponsiveText>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => pushMentalStatus('concrete')}
    style={styles.renderview1}>
    {MentalStatus.includes('concrete') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'concrete'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>

  <View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('flight of ideas')}
    style={styles.renderview1}>
    {MentalStatus.includes('flight of ideas') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'flight of ideas'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('disorganized')}
    style={styles.renderview1}>
    {MentalStatus.includes('disorganized') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'disorganized'}
    </ResponsiveText>
  </TouchableOpacity>
  
 
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Thought process')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Thought process') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>
 

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Thought content:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('No SI')}
    style={styles.renderview1}>
    {MentalStatus.includes('No SI') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'No SI'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('No HI')}
    style={styles.renderview1}>
    {MentalStatus.includes('No HI') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'No HI'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('No delusions/AH')}
    style={styles.renderview1}>
    {MentalStatus.includes('No delusions/AH') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'No delusions/AH'}
    </ResponsiveText>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => pushMentalStatus('SI')}
    style={styles.renderview1}>
    {MentalStatus.includes('SI') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'SI'}
    </ResponsiveText>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => pushMentalStatus('HI')}
    style={styles.renderview1}>
    {MentalStatus.includes('HI') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'HI'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>

  <View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('delusions')}
    style={styles.renderview1}>
    {MentalStatus.includes('delusions') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'delusions'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('AH')}
    style={styles.renderview1}>
    {MentalStatus.includes('AH') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'AH'}
    </ResponsiveText>
  </TouchableOpacity>
  
  <TouchableOpacity
    onPress={() => pushMentalStatus('VH')}
    style={styles.renderview1}>
    {MentalStatus.includes('VH') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'VH'}
    </ResponsiveText>
  </TouchableOpacity>
  
 
 
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Thought content')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Thought content') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>
 

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Memory:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('recent intact')}
    style={styles.renderview1}>
    {MentalStatus.includes('recent intact') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'recent intact'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('remote intact')}
    style={styles.renderview1}>
    {MentalStatus.includes('remote intact') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'remote intact'}
    </ResponsiveText>
  </TouchableOpacity>
  
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('recent impaired')}
    style={styles.renderview1}>
    {MentalStatus.includes('recent impaired') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'recent impaired'}
    </ResponsiveText>
  </TouchableOpacity>

 
  </View>

  <View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('remote impaired')}
    style={styles.renderview1}>
    {MentalStatus.includes('remote impaired') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'remote impaired'}
    </ResponsiveText>
  </TouchableOpacity>
  

 
  <TouchableOpacity
    onPress={() => pushMentalStatus('other Memory')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Memory') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  </View>



  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Insight:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('poor')}
    style={styles.renderview1}>
    {MentalStatus.includes('poor') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'poor'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('fair')}
    style={styles.renderview1}>
    {MentalStatus.includes('fair') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'fair'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('other Insight')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Insight') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  

  </View>

  <View style={{...styles.textheading}}>
            <ResponsiveText style={{...styles.txtcolor,color:Colors.balckText}}>
              {'Judgement:'}
            </ResponsiveText>
          </View>
<View style={styles.row3}>
  


  <TouchableOpacity
    onPress={() => pushMentalStatus('Judgement poor')}
    style={styles.renderview1}>
    {MentalStatus.includes('Judgement poor') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'poor'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('Judgement fair')}
    style={styles.renderview1}>
    {MentalStatus.includes('Judgement fair') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'fair'}
    </ResponsiveText>
  </TouchableOpacity>
  

  <TouchableOpacity
    onPress={() => pushMentalStatus('other Judgement')}
    style={styles.renderview1}>
    {MentalStatus.includes('other Judgement') == true ? (
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
    <ResponsiveText style={{...styles.text2}}>
      {'other'}
    </ResponsiveText>
  </TouchableOpacity>
  

  </View>

  <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Working Diagnosis'}
            </ResponsiveText>
          </View>
 
 <View style={styles.startext}>

 <TouchableOpacity
    onPress={() => pushMentalStatus('Encounter')}
    style={styles.renderview1}>
    {MentalStatus.includes('Encounter') == true ? (
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
  <ResponsiveText style={{...styles.text2,fontSize:13}}>
      {'Z51.81 Encounter for therapeutic drug level monitoring'}
    </ResponsiveText>
    <Icons icon={Images.Star}
    style={{width:20,height:20}}/>

  
 </View>

 <View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Working Diagnosis'}
            </ResponsiveText>
          </View>

          <View style={styles.textinput}>
      
         
      <InputField
    placeholder={'From Admin'}
    // value={''}
    onChangeText={(text)=>console.log(text)}
    placeholderTextColor={Colors.txtgray}
    height={hp(5)}
    width={wp(93)}
    />
      </View>

      <View style={{...styles.startext,alignItems:'flex-start',marginTop:hp(2)}}>

<TouchableOpacity
   onPress={() => pushMentalStatus('Treatment/Therapy')}
   style={styles.renderview1}>
   {MentalStatus.includes('Treatment/Therapy') == true ? (
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
 <ResponsiveText style={{...styles.text2,fontSize:13,width:wp(90)}}>
     {`Treatment/Therapy options, labs, medications risks/SE, safety plan, & emergency
procedures discussed with the patient`}
   </ResponsiveText>
 
 
</View>


<View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Add On'}
            </ResponsiveText>
          </View>
          <View style={styles.row3}>

<TouchableOpacity
   onPress={() => pushMentalStatus('Injection')}
   style={styles.renderview1}>
   {MentalStatus.includes('Injection') == true ? (
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
 <ResponsiveText style={{...styles.text2,fontSize:13}}>
     {'Injection'}
   </ResponsiveText>

 
</View>
<View style={styles.row3}>

<TouchableOpacity
   onPress={() => pushMentalStatus('psychotherapy')}
   style={styles.renderview1}>
   {MentalStatus.includes('psychotherapy') == true ? (
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
 <ResponsiveText style={{...styles.text2,fontSize:13}}>
     {'≥ 16 mins spent on psychotherapy discussing'}
   </ResponsiveText>

 
</View>



<View style={styles.textheading}>
            <ResponsiveText style={styles.txtcolor}>
              {'Medications'}
            </ResponsiveText>
          </View>
<View style={styles.textinput}>
      
         
      <InputField
    placeholder={'From Admin'}
    // value={''}
    onChangeText={(text)=>console.log(text)}
    placeholderTextColor={Colors.txtgray}
    height={hp(5)}
    width={wp(93)}
    />
      </View>

 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
 <FlatList
               showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            
               data={conceltent}
               renderItem={renderConceltent}
               ListHeaderComponent={ConceltentHeader}
               ListFooterComponent={ConceltentFooter}
               keyExtractor={(item, index) => index.toString()}
             />
 </ScrollView>

 {/* rbs sheeettt */}

 <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={hp(50)}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            draggableIcon: {
              backgroundColor: `${'transparent'}`,
              width: wp('30%'),
            },
                   
          }}>
      <View style={{marginBottom:hp(2)}}>
      <Simpleheader title={'Note Detail'} onPress={()=>refRBSheet.current.close()} 
         headercontainer={{backgroundColor:Colors.textColorWhite}}/>
          
      <View style={{...styles.graybckground,marginHorizontal:wp(4)}}>
            <View style={styles.rowview}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Prescriber:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'DR DRTEST1, MD'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Title:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.textVisit,paddingLeft:wp(6)}}>
                {'Psychiatric Evaluation'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Service Date:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'08-05-2022'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Service Time:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'02:46:00'}
              </ResponsiveText>
            </View>

          </View>

          <View style={{...styles.textinput,marginTop:hp(3)}}>
      
         
      <InputField
    placeholder={'Addendum Text'}
    // value={''}
    onChangeText={(text)=>console.log(text)}
    placeholderTextColor={Colors.txtgray}
    height={hp(6)}
    width={wp(93)}
    />
      </View>
      <TouchableOpacity style={{...styles.btnstyle,flexDirection:'row',marginTop:hp(3), width:wp(93),marginHorizontal:wp(3)}}>


<Icons icon={Images.signpen}
style={{width:wp(5),height:wp(5)}}/>
<ResponsiveText style={styles.btntext}>
              {'Sign'}
            </ResponsiveText>
</TouchableOpacity>
</View>
        </RBSheet>

        </ScrollView>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  textheading: {
    borderWidth: 0,
    marginTop: hp(2),
    marginHorizontal: wp(3),
  },
  startext:{
    borderWidth:0,
    flexDirection:'row',
    alignContent:"center",
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp(2),
    marginTop:10
  },
  familytextview:{
    alignItems:"center",
    flexDirection:'row',
    borderWidth:0,
    marginRight:8

  },
  yesno:{
    fontSize:14,fontWeight:'400',color:Colors.balckText,marginLeft:5
  },
  radiotext:{
    flexDirection:'row',alignItems:"center",justifyContent:'space-between',borderWidth:0
  },
  textheading1:{
    fontSize:14,fontWeight:'400',color:Colors.balckText,width:wp(68),borderWidth:0
  },
  familytext:{
    fontSize:14,fontWeight:'400',color:Colors.balckText,borderWidth:0,marginRight:10
  },
  textinput:{
    borderWidth:0,alignItems:'center',flexDirection:'row',
    marginHorizontal:wp(3),marginTop:hp(1.5),justifyContent:'space-between'
  },
  textradio:{
    borderWidth:0,alignItems:'center',flexDirection:"row",

    marginHorizontal:wp(3),marginTop:hp(1.5),justifyContent:'space-between',
  },
  inputview:{
    borderWidth:0,
    justifyContent:'center',
    alignContent:'center'  },

    radioview:{borderWidth:0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'  },
  btnstyle:{
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:5,
    padding:15,
    borderColor:Colors.borderColor,
    width:wp(45)
  },
  flotingbtn:{
    borderWidth:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:wp(4),marginTop:hp(3)
  },
  row3:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0,
    marginHorizontal:wp(1.5),
    marginTop:10
  },

  rowspacebetween:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0,
    marginHorizontal:wp(1.5),
    marginTop:10,
    justifyContent:'space-between'

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
  renderview: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderWidth:0,
    marginLeft:3,
    marginTop: 10,
  },
  checkbox:{
    marginLeft:4,
    borderWidth:0
  },
  renderview1: {
    flexDirection: 'row',
   alignItems: 'center',
   borderWidth:0
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.balckText,
  },
  btntext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.balckText,
  },
  txtcolor: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.balckText,
  },
  textVisit: {
    fontSize: 16,
    fontWeight: '500',
   
    alignSelf:"flex-end",
   paddingLeft:wp(4),
  
     borderWidth:0,
    color: Colors.balckText,
  },
  text1: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.balckText,
    borderWidth: 0,
    marginLeft: 0,
  },
  text2: {
    fontSize: 13.5,
    fontWeight: '400',
    color: Colors.balckText,
    borderWidth: 0,
    marginLeft: 0,
    // alignSelf: 'center',
  },
  graybckground: {
    borderWidth: 0,
    marginHorizontal: wp(3),
    marginTop: hp(2),
    padding: 10,
    backgroundColor: '#EFF2F8',
    borderRadius: 5,
  },
  rowview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:0
  },
  btnview:{
    borderWidth:0,
    padding:10,
    backgroundColor:Colors.borderColor,
    borderRadius:8,
    paddingHorizontal:20
  },

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
    borderRightWidth:1,

  },
  datetxt:{fontSize:16,color:Colors.balckText,fontWeight:'600'},
  headinsg:{
    borderWidth:1,
    borderBottomWidth:0,
    backgroundColor:Colors.primary,
    marginHorizontal:wp(3),marginTop:hp(3),
    borderRightWidth:0,
    flexDirection:'row',
    borderColor:Colors.borderColor

  },
  headinsgvitals:{
    borderWidth:0,
  
    flexDirection:'row',
   
    marginHorizontal:wp(3),
    borderColor:Colors.borderColor
  },
  datevie:{
    borderWidth:1,
    paddingVertical:2,
    width:wp(22),
    alignItems:'center',
    borderColor:Colors.borderColor
  },
  headingtxt:{
    fontSize:14,fontWeight:'700',color:'white'
  },
  headingtxt1:{
    fontSize:14,fontWeight:'400',color:'black'
  },
  /////table end
});
