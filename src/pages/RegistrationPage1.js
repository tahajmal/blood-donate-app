import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

// import Component
import HeaderPage from '../components/HeaderPage'

const errVal = {
    borderWidth: 1,
    borderColor: 'red'
}
const RegistrationPage1 = (props) => {
    const [contactNumber, numChng] = useState()
    const [err, errStatus] = useState(null)

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderPage title="Registration"/>
                
                <Text style={styles.instText}>
                    Enter your phone number for registration
                </Text>

                <View style={styles.head_btn_div}>
                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            YOUR PHONE <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={contactNumber}
                            onChangeText={(text)=>{numChng(text)}}
                            style={[styles.loginField, err]}
                            placeholder='Enter Phone number'
                            keyboardType={"phone-pad"}
                        />
                    </View>
                </View>

                <View style={styles.btnLoc}>
                    <TouchableOpacity 
                        onPress={() => {
                            contactNumber ? 
                            props.navigation.navigate('reg_credential', {number: contactNumber}) :
                            errStatus(errVal)
                        }} 
                        style={styles.sinBtn}
                    >
                        <Text style={styles.btn_sigin}>
                            CONTINUE
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default RegistrationPage1

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    instText: {
        color: 'lightgray',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
    loginField: {
        backgroundColor: 'lightgray',
        height: 40,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 25,
        fontSize: 15,
        marginBottom: 20
    },
    label: {
        color: '#002B5F',
        fontSize: 13,
        paddingLeft: 3,
        fontWeight: 'bold'
    },
    mg20: {
        margin: 20
    },
    colRed: {
        color: 'red'
    },
    bottomTxt: {
        textAlign: 'center', 
        fontSize: 12,
        marginTop: -10
    },
    sinBtn: {
        backgroundColor: '#002B5F',
        width: 140,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center'
    },
    btn_sigin: {
        color: '#9FE5FF',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignContent: 'center'
    },
    btnLoc: {
        marginTop: 150,
        alignItems: 'center',
        margin: 20
    }
})