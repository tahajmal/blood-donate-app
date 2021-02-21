import React, {useState} from 'react'
import { TextInput, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import BottomNavigator from '../components/BottomNavigator'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Profile = (props) => {
    const [name, changeName] = useState()
    const [DOB, changeDOB] = useState()
    const [number, changeNumber] = useState()
    const [address, changeAddress] = useState()
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    
                    <FontAwesome5 style={styles.headLogo} name={'user'} color={'black'} size={70} solid/>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            FULL NAME <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeName(text)}}
                            style={styles.loginField}
                            placeholder='Enter username here... '   
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            PHONE NUMBER 
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeNumber(text)}}
                            style={styles.loginField}
                            keyboardType={"email-address"}
                            editable={false}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            DATE OF BIRTH <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeDOB(text)}}
                            style={styles.loginField}
                            placeholder='Enter email here...'
                            keyboardType={"email-address"}
                        />
                    </View>

                    <View style={styles.mg20}>
                        <Text style={styles.label}>
                            ADDRESS <Text style={styles.colRed}>*</Text>
                        </Text>
                        <TextInput
                            onChangeText = {(text)=>{changeAddress(text)}}
                            style={styles.loginField}
                            placeholder='Enter email here...'
                            keyboardType={"email-address"}
                        />
                    </View>

                    <View style={styles.btnLoc}>
                        <TouchableOpacity onPress={() => {
                                // name === undefined 
                                // && cNf(errVal)
                                // email === undefined 
                                // && cEf(errVal)
                                // password === undefined 
                                // && cPf(errVal)
                                // conPass === undefined 
                                // && cCpf(errVal)  
                                
                                // password !== conPass ? alert("Passwords are not match") :
                                // name !== undefined 
                                // && email !== undefined 
                                // && password !== undefined 
                                // && conPass !== undefined 
                                // && props.navigation.navigate('reg_bio', {...userData, username: name, email: email, password: password})
                                
                            }} 
                            style={styles.sinBtn}
                        >
                            <Text style={styles.btn_sigin}>
                                Save
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>    
            </ScrollView>
            <BottomNavigator pageState={3} nav = {props.navigation}/>
        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginRight: 30,
      marginLeft: 30,
    },
    headLogo: {
        // height: 110,
        // width: 110,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 70, 
        paddingHorizontal: 20,
        paddingVertical: 15
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
    btnLoc: {
        marginTop: 20,
        marginBottom: 70,
        alignItems: 'center',
    },
    btn_sigin: {
        color: '#9FE5FF',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignContent: 'center'
      },
      sinBtn: {
        backgroundColor: '#002B5F',
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center'
      },
      colRed: {
          color: 'red'
      }
})
