import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import baseUrl from '../config/BaseUrl'


// import Component
import HeaderPage from '../components/HeaderPage'

const btnActive = {
    backgroundColor: '#002B5F'
}
const errVal = {
    borderWidth: 1,
    borderColor: 'red'
}

const RegistrationPage3 = (props) => {

    const [mBtn, mBtnChange] = useState(null)
    const [fBtn, fBtnChange] = useState(null)
    const [oBtn, oBtnChange] = useState(null)
    const [userData, addUserData] = useState(props.route.params)
    const [city, changeCity] = useState('unknown')
    const [gender, changeGender] = useState('unknown')
    const [DOB, changeDOB] = useState()

    const Register = async () =>{

        let formData = new FormData();    
        formData.append('cnic', userData.cnic)
        formData.append('email', userData.email)
        formData.append('number', userData.number)
        formData.append('password', userData.password)
        formData.append('full_name', userData.username)
        formData.append('gender', gender)
        formData.append('DOB', DOB)
        formData.append('city', city)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        }
        const response = await fetch(`${baseUrl}creat_app_user/`, requestOptions);
        const data = await response.json();
        
        if (data.resp === 0) {
            alert('Register Successfully')
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
        else if (data.resp === 1) {
            alert('Something Wrong Unable to register!')
        }

    }

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
                            GENDER 
                        </Text>
                        <View style={styles.genderBtn}>
                            <TouchableOpacity 
                                onPress={()=>{
                                    mBtn === null 
                                    &&  mBtnChange(btnActive) 
                                        fBtnChange(null)
                                        oBtnChange(null)
                                        changeGender('Male')

                                }} 
                                style={[styles.gBtn1, mBtn]}
                            >
                                <Text style={styles.btn_sigin}>
                                    MALE
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={()=>{
                                    fBtn === null 
                                    &&  mBtnChange(null) 
                                        fBtnChange(btnActive)
                                        oBtnChange(null)
                                        changeGender('Female')
                                }} 
                                style={[styles.gBtn2, fBtn]}
                            >
                                <Text style={styles.btn_sigin}>
                                    FEMALE
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={()=>{
                                    oBtn === null 
                                    &&  mBtnChange(null) 
                                        fBtnChange(null)
                                        oBtnChange(btnActive)
                                        changeGender('Other')
                                }} 
                                style={[styles.gBtn3, oBtn]}
                            >
                                <Text style={styles.btn_sigin}>
                                    OTHER
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            DATE OF BIRTH 
                        </Text>
                        <TextInput
                            style={styles.loginField}
                            placeholder='yyyy - MM - YY'
                            keyboardType={"decimal-pad"}
                            onChangeText={(text)=> {changeDOB(text)}}
                        />
                    </View>

                </View>

                <View style={styles.mg20}>
                        <Text style={styles.label}>
                            City
                        </Text>
                        <TextInput
                            style={styles.loginField}
                            placeholder='Enter your name...'
                            onChangeText={(text)=> {changeCity(text)}}
                        />
                </View>

                <View style={styles.btnLoc}>
                    <TouchableOpacity 
                        onPress={()=>{
                            Register()
                        }}
                        style={styles.sinBtn}>
                        <Text style={styles.btn_sigin}>
                            FINISH
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.btnLoc}>
                    <TouchableOpacity 
                        onPress={() =>{
                            props.navigation.navigate('reg_bio2', {...userData, fullName: fullName, gender: gender, DOB: DOB})
                        }} 
                        style={styles.sinBtn}
                        >
                        <Text style={styles.btn_sigin}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View> */}

            </View>
        </ScrollView>
    )
}

export default RegistrationPage3

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
        width: 100,
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
        // flexDirection: 'row-reverse'
    },
    genderBtn: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    gBtn1: {
        backgroundColor: 'white',
        padding: 5,
        width: 105,
        height: 35,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    gBtn2: {
        backgroundColor: 'white',
        padding: 5,
        width: 105,
    },
    gBtn3: {
        backgroundColor: 'white',
        padding: 5,
        width: 105,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    }
})