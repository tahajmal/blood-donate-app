import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomNavigator = (props) => {
    const [pageState, setPageState] = useState(props.pageState) 
    return (
        <View style={styles.bottomHead}>
            <View style={styles.bottomNav}>
                <TouchableOpacity 
                    onPress={()=>{
                        props.nav.navigate('Home')
                }}>
                        <FontAwesome5 name={'home'} color={pageState === 0 ? '#9FE5FF' : 'white'} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{
                        props.nav.navigate('Upload Video', {globalData: props.globalData})
                    }}>
                        <FontAwesome5 name={'upload'} color={pageState === 1 ? '#9FE5FF' : 'white'} size={25}/>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={()=>{
                        props.nav.navigate('complainStatus')
                    }}>
                        <FontAwesome5 name={'th-list'} color={pageState === 2 ? '#9FE5FF' : 'white'} size={25} solid/>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>{
                        props.nav.reset({
                            index: 0,
                            routes: [{ name: 'Login'}],
                        });
                    }}>
                        <FontAwesome5 name={'sign-out-alt'} color={pageState === 3 ? '#9FE5FF' : 'white'} size={25} solid/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    bottomHead: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bottomNav: {
        backgroundColor: '#002B5F',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})