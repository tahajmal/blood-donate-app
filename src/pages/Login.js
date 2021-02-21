import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

// import components
import HeaderPage from '../components/HeaderPage'
import LoginEmail from '../components/LoginEmail'
import LoginCnic from '../components/LoginCnic'
import LoginAnon from '../components/LoginAnon'

const btn_active = {
    borderColor: '#002B5F',
    backgroundColor: '#002B5F',
}

const Login = (props) => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const [cnicBtn, cnicBtnChange] = useState(btn_active)
    const [emailBtn, emailBtnChange] = useState(null)
    const [anonBtn, anonBtnChange] = useState(null)

    const [pageState, setPageState] = useState(0)

    
    return (
      <ScrollView>
        <View style={styles.container}>

        <HeaderPage title="Login"/>

        <View style={styles.head_btn_div}>
          <TouchableOpacity
            onPress={()=>{
              setPageState(0)
              cnicBtn === null 
              &&  anonBtnChange(null) 
                  cnicBtnChange(btn_active)
                  emailBtnChange(null)
            }}
            style={[styles.head_btn_c, cnicBtn]} 
            activeOpacity={0.6}
          >
            <Text style={styles.btn_txt}>
              CNIC#
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=>{
              setPageState(1)
              emailBtn === null 
              &&  anonBtnChange(null) 
                  cnicBtnChange(null)
                  emailBtnChange(btn_active)
            }} 
            style={[styles.head_btn_e, emailBtn]} 
            activeOpacity={0.6}
          >
            <Text style={styles.btn_txt}>
              EMAIL   
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=>{
              setPageState(2)
              anonBtn === null 
              &&  anonBtnChange(btn_active) 
                  cnicBtnChange(null)
                  emailBtnChange(null)
            }} 
            style={[styles.head_btn_anon, anonBtn]} 
            activeOpacity={0.6}
          >
            <Text style={styles.btn_txt}>
              ANONYMOUS   
            </Text>
          </TouchableOpacity>
        </View>

        {pageState === 0 && <LoginCnic nav={props.navigation}/>}
        {pageState === 1 && <LoginEmail nav={props.navigation}/>}
        {pageState === 2 && <LoginAnon nav={props.navigation}/>}


      </View>
      </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    head_btn_div: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15
    },
    // head_btn_c_active: {
    //   backgroundColor: '#002B5F',
    //   height: 35,
    //   width: 115,
    //   borderTopLeftRadius: 20,
    //   borderBottomLeftRadius: 20,
    //   justifyContent: 'center',
    //   marginRight: 1,
    //   borderWidth: 1,
    //   borderColor: '#002B5F'
    // },
    head_btn_c: {
      backgroundColor: 'white',
      height: 35,
      width: 115,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#9FE5FF'
    },
    head_btn_anon: {
      backgroundColor: 'white',
      height: 35,
      width: 115,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      marginLeft: 1,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#9FE5FF',
    },
    // head_btn_anon_active: {
    //   backgroundColor: '#002B5F',
    //   height: 35,
    //   width: 115,
    //   borderTopRightRadius: 20,
    //   borderBottomRightRadius: 20,
    //   marginLeft: 1,
    //   justifyContent: 'center',
    //   borderWidth: 1,
    //   borderColor: '#002B5F',
    // },
    head_btn_e: {
      backgroundColor: 'white',
      height: 35,
      width: 90,
      marginLeft: 1,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#9FE5FF',
    },
    // head_btn_e_active: {
    //   backgroundColor: '#002B5F',
    //   height: 35,
    //   width: 90,
    //   marginLeft: 1,
    //   justifyContent: 'center',
    //   borderWidth: 1,
    //   borderColor: '#002B5F',
    // },
    btn_txt: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#9FE5FF'
    },
    loginSec: {
      padding: 18,
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
      fontSize: 15,
      paddingLeft: 3
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
  });