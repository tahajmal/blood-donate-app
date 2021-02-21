import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'

const LoginAnon = ({nav}) => {
    return (
        <>
            <View style={{alignItems: 'center', marginTop: 70}}>
                <TouchableOpacity 
                    style={styles.sinBtn}
                    onPress={() =>{
                        nav.reset({
                            index: 0,
                            routes: [{ name: 'Home', param: {'data': {"uid": 0, "name": "Anonyamous"}} }],
                        });
                    }}
                >
                    <Text style={styles.btn_sigin}>
                        Let Start
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default LoginAnon

const styles = StyleSheet.create({
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