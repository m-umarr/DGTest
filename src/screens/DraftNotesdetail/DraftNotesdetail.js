import { View, StyleSheet, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Container, Colors, CommentsInput, Simpleheader, ResponsiveText, Images, InputField, Icons, Dropdown, Button } from '../../components/index'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import moment from 'moment';


const DraftNotedetail = (props) => {
const {DATA}=props.route.params;
console.log('DATA', DATA);
    return (
        <Container backgroundColor={Colors.textColorWhite}>
            <Simpleheader
                title={'Note Details'}
                navigation={props.navigation}
                headercontainer={{ backgroundColor: Colors.textColorWhite }}
            />
            <View style={{borderWidth:0,marginHorizontal:wp(12),flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',  marginTop: hp(5),}}>
            <TouchableOpacity
                style={styles.btnciew}>


                <Icons icon={Images.trash}
                    style={{ width: wp(5), height: wp(5) }} />


                <ResponsiveText style={{ ...styles.textbtn }}>
                    {
                        'Delete'
                    }
                </ResponsiveText>


            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnciew}>


                <Icons icon={Images.signpen}
                    style={{ width: wp(5), height: wp(5) }} />


                <ResponsiveText style={{ ...styles.textbtn }}>
                    {
                        'Sign'
                    }
                </ResponsiveText>


            </TouchableOpacity>
            
            </View>
            <View style={{borderWidth:0,marginHorizontal:wp(5),marginTop:20}}> 
                <ResponsiveText style={{ ...styles.text, color: Colors.primary }}>
                        {'Psychiatric Evaluation:'}
                    </ResponsiveText>
                    </View>
            <View style={{ ...styles.graybckground, marginHorizontal: wp(4) }}>
                <View style={styles.rowview}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Title:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {DATA.title}
                    </ResponsiveText>
                </View>

                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Visit Type:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text, paddingLeft: wp(6) }}>
                        {'New Pt, Outpatient Office Visit'}
                    </ResponsiveText>
                </View>

                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Provider:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {'DR DRTEST1, MD'}
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Location:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {DATA.clinic_name}
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Date:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                    {moment(DATA.service_datetime).format('l') }
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Time:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {moment(DATA.service_datetime).format('LT')}
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Patient:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {DATA.pFname} {DATA.pLname}
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'DOB:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {' 21/04/1997'}
                    </ResponsiveText>
                </View>
                <View style={{ ...styles.rowview, marginTop: 10 }}>
                    <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                        {'Co-Signer:'}
                    </ResponsiveText>
                    <ResponsiveText style={{ ...styles.text }}>
                        {'---'}
                    </ResponsiveText>
                </View>
            </View>
            <View style={styles.inputview}>
            <ResponsiveText style={{ ...styles.text }}>
                        {'Test As Draft 1'}
                    </ResponsiveText>
             
            </View>
            <View style={styles.rowtext}>
                <ResponsiveText style={{ ...styles.text, color: '#646464' }}>
                    {'Created By:'}
                </ResponsiveText>

                <ResponsiveText style={{ ...styles.text, marginLeft: 5, fontWeight: '500', }}>
                    {'DR DRTEST1, MD'}
                </ResponsiveText>


                <ResponsiveText style={{ ...styles.text, marginLeft: 5, color: '#646464' }}>
                    {'at 8/17/2022'}
                </ResponsiveText>


            </View>
        </Container>
    )
}

export default DraftNotedetail

const styles = StyleSheet.create({

    btnciew: {
        borderWidth: 1,
      width:wp(30),
        marginHorizontal: wp(5),
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        borderColor: Colors.borderColor
    },
    rowtext: {
        borderWidth: 0,
        marginTop: hp(2),
        marginHorizontal: wp(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputview: {
        borderWidth: 0, marginTop: hp(4.5), marginHorizontal: wp(5),
        marginHorizontal: wp(5),
        justifyContent: 'center',
        alignContent: 'center'
    },
    graybckground: {
        borderWidth: 0,
        marginHorizontal: wp(3),
        marginTop: hp(3),
        padding: 10,
        backgroundColor: '#F6FAFF',
        borderRadius: 5,
    },
    rowview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.balckText,
    },
    textbtn: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.balckText,
        marginLeft: 10
    }
})
