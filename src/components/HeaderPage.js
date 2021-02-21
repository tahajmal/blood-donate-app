import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'

const HeaderPage = ({title}) => {
    return (      
        <View style={styles.pgHeader}>
            <Image 
                source={require('../media/logo-c.png')}
                style={styles.headLogo}
            />
            <Text style={styles.headTxt}>
                {title}
            </Text>
        </View>
    )
}

export default HeaderPage



const styles = StyleSheet.create({
    pgHeader: {
        height: 170,
        backgroundColor: '#9FE5FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headLogo: {
        resizeMode: 'contain',
        width: 120,
        height: 120,
        marginTop: 6,
    },
    headTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5
    },
})
