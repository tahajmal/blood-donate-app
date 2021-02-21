import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { useState } from 'react/cjs/react.development'
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseUrl from '../config/BaseUrl'

const LoginCnic = ({nav}) => {
    const [cnic, setCnic] = useState()
    const [Password, setPassword] = useState()

    const login = async () =>{
        let formData = new FormData();    
        formData.append('cnic', cnic)
        formData.append('password', Password)
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        }
        const response = await fetch(`${baseUrl}login_with_cnic/`, requestOptions);
        const data = await response.json();
        console.log(data.resp)

        if (data.resp === 2)
            alert("User not exit!")
        else if (data.resp === 1)
            alert("Wrong Password")
        else if (data.resp === 0){
            nav.reset({
                index: 0,
                routes: [{ name: 'Home' , param: {data}}],
            });
        }
          
      }

    return (
        <>
            <View style={styles.loginSec}>

                <View>
                <Text style={styles.label}>
                    CNIC#
                </Text>
                <TextInput
                    style={styles.loginField}
                    placeholder='________-____________-__'
                    keyboardType={"phone-pad"}
                    onChangeText={(text) =>{
                        setCnic(text)
                    }}
                />
                </View>

                <View>
                <Text style={styles.label}>
                    PASSWORD
                </Text>
                <TextInput
                    style={styles.loginField}
                    placeholder='Enter Password here..'
                    secureTextEntry={true}
                    inlineImageLeft='search_icon'
                    onChangeText={(text) =>{
                        setPassword(text)
                    }}
                />
                </View>

                <Text style={styles.bottomTxt}>
                    Don't have an account? <Text onPress={() => nav.navigate('register_number')} style={{color: '#002B5F'}}>REGISTER</Text>
                </Text>
                </View>

                <View style={{alignItems: 'center', margin: 20}}>
                <TouchableOpacity 
                    style={styles.sinBtn}
                    onPress={() =>{
                        login()
                    }}
                >
                    <Text style={styles.btn_sigin}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default LoginCnic

const styles = StyleSheet.create({
    loginSec: {
        padding: 18,
        marginTop: 10
    },
    label: {
        color: '#002B5F',
        fontSize: 15,
        paddingLeft: 3
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
    bottomTxt: {
        textAlign: 'center', 
        fontSize: 12,
        marginTop: -10
    },
    sinBtn: {
        backgroundColor: '#002B5F',
        width: 170,
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
    }

})