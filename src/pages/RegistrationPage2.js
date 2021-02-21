import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import baseUrl from '../config/BaseUrl'

// import Component
import HeaderPage from '../components/HeaderPage'
const errVal = {
    borderWidth: 1,
    borderColor: 'red'
}
const RegistrationPage2 = (props) => {
    const [userData, addUserData] = useState(props.route.params)
    const [cnic, setCnic] = useState()
    const [name, changeName] = useState()
    const [email, changeEmail] = useState()
    const [password, changePassword] = useState()
    const [conPass, changeConPass] = useState()

    // const [nav, setNav] = useState(undefined)

    const [nf, cNf] = useState(undefined)
    const [ef, cEf] = useState(undefined)
    const [pf, cPf] = useState(undefined)
    const [cpf, cCpf] = useState(undefined)
    const [cnicf, ccnicf] = useState(undefined)

    const authenticate = async () => {
        let formData = new FormData();    

        formData.append('username', name)
        formData.append('cnic', cnic)
        formData.append('email', email)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        }
        const response = await fetch(`${baseUrl}auth_user_email/`, requestOptions);
        const data = await response.json();
        
        if (data.status === 0){
            props.navigation.navigate('reg_bio', {...userData, username: name, 
                                                    email: email, password: password,
                                                    cnic: cnic})
        }
        else{
            data.credStatus[0] !== 0 && alert('Username is already present!') 
            data.credStatus[1] !== 0 && alert('Cnic is already present!') 
            data.credStatus[2] !== 0 && alert('Email is already present!') 
        }
        
    }    

    // useEffect(() => {
        // props.navigation.navigate('reg_bio', {...userData, username: name, email: email, password: password})
    // }, [nav])

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
                            USERNAME <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeName(text)}}
                            style={[styles.loginField, nf]}
                            placeholder='Enter username here... '   
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            CNIC <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            value={cnic}
                            onChangeText = {(text)=>{setCnic(text)}}
                            style={[styles.loginField, cnicf]}
                            placeholder='______-___________-__'
                            keyboardType={"phone-pad"}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            EMAIL <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeEmail(text)}}
                            style={[styles.loginField, ef]}
                            placeholder='Enter email here...'
                            keyboardType={"email-address"}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            PASSWORD <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changePassword(text)}}
                            style={[styles.loginField, pf]}
                            placeholder='Enter Password...'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            CONFIRM PASSWORD <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeConPass(text)}}
                            style={[styles.loginField, cpf]}
                            placeholder='Enter Again Password...'
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={styles.btnLoc}>
                    <TouchableOpacity onPress={() => {
                            name === undefined 
                            && cNf(errVal)
                            email === undefined 
                            && cEf(errVal)
                            password === undefined 
                            && cPf(errVal)
                            conPass === undefined 
                            && cCpf(errVal)
                            cnic === undefined 
                            && ccnicf(errVal)  
                            
                            password !== conPass ? alert("Passwords are not match") :
                            name !== undefined 
                            && email !== undefined 
                            && password !== undefined 
                            && conPass !== undefined 
                            && authenticate()
                            // authenticate()  
                            
                        }} 
                        style={styles.sinBtn}
                    >
                        <Text style={styles.btn_sigin}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default RegistrationPage2

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
        flexDirection: 'row-reverse'
        
    }
})