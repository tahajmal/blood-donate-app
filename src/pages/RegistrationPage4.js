import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

const errVal = {
    borderWidth: 1,
    borderColor: 'red'
}
// import Component
import HeaderPage from '../components/HeaderPage'

const RegistrationPage4 = (props) => {
    const [userData, addUserData] = useState(props.route.params)
    const [cnic, setCnic] = useState()
    const [province, setProvince] = useState()
    const [disrict, setDisrict] = useState()
    const [tehsil, setTehsil] = useState()
    const [address, setAddress] = useState()
    const [cnicAct, setCnicAct] = useState(null)

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderPage title="Registration"/>
                
                <Text style={styles.instText}>
                        Create your account in just few easy steps
                </Text>

                <View style={styles.head_btn_div}>
                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            CNIC <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={cnic}
                            onChangeText = {(text)=>{setCnic(text)}}
                            style={[styles.loginField, cnicAct]}
                            placeholder='______-___________-__'
                            keyboardType={"phone-pad"}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            PROVINCES <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={province}
                            onChangeText = {(text)=>{setProvince(text)}}
                            style={styles.loginField}
                            placeholder='Enter Province here...'
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            DISTRICT <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={disrict}
                            onChangeText = {(text)=>{setDisrict(text)}}
                            style={styles.loginField}
                            placeholder='Enter District here...'
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            TEHSIL <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={tehsil}
                            onChangeText = {(text)=>{setTehsil(text)}}
                            style={styles.loginField}
                            placeholder='Enter Tehsil here...'
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            ADDRESS <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={address}
                            onChangeText = {(text)=>{setAddress(text)}}
                            style={styles.loginField}
                            placeholder='Enter Address here...'
                        />
                    </View>
                </View>

                <View style={styles.btnLoc}>
                    <TouchableOpacity 
                        onPress={()=>{
                            if (cnic === undefined){
                                setCnicAct(errVal)
                            }
                            else {
                                alert('Register Successfully!')
                                props.navigation.navigate('Login')
                            } 
                        }}
                        style={styles.sinBtn}>
                        <Text style={styles.btn_sigin}>
                            FINISH
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default RegistrationPage4

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
        backgroundColor: '#d6d6d6',
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
        marginLeft: 20,
        marginRight: 20,
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
        width: 170,
        height: 40,
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
        margin: 20,
        alignItems: 'center',
        
    }
})