import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BottomNavigator from '../components/BottomNavigator'

const Complainstatus = (props) => {
    return (
        <View style={{flex: 1}}>

            <ScrollView style={{height: 415}}>   

                <View style={styles.heading}>
                    <Text style={styles.headingTxt}>
                        Complains    
                    </Text>    
                </View> 
                
                <View style={styles.actions}>
                    <View style={styles.actionBtn}>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text style={styles.actionTxt}>
                                Complain No: 
                            </Text>
                            <Text style={styles.actionTxt}>
                                Status: 
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.detailBtn}>
                            <Text style={styles.detailBtnTxt}>
                                Detail
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

            <BottomNavigator pageState={2} nav = {props.navigation}/>
        </View>
    )
}

export default Complainstatus

const styles = StyleSheet.create({
    bottomHead: {
        justifyContent: 'flex-end',
    },
    bottomNav: {
        backgroundColor: '#002B5F',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10       
    },
    actionBtn: {
        backgroundColor: 'white',
        width: 340,
        height: 65,
        borderRadius: 5,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 2,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    actionTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray', 
    },
    detailBtn: {
        flex: 1, 
        justifyContent: 'center',
    },
    detailBtnTxt: {
        textDecorationLine: 'underline',
        color: 'blue'
    },
    heading: {
        margin: 10
    },
    headingTxt: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'gray'
    }
})