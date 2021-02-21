
import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../pages/Login'
import RegistrationPage1 from '../pages/RegistrationPage1'
import RegistrationPage2 from '../pages/RegistrationPage2'
import RegistrationPage3 from '../pages/RegistrationPage3'
import RegistrationPage4 from '../pages/RegistrationPage4'
import Home from '../pages/Home'
import Complainstatus from '../pages/Complainstatus'
import Profile from '../pages/Profile'
import UploadPage from '../pages/UploadPage'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{
                        headerShown: false,
                        title: 'Login',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                />

                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        // headerShown: false,
                        title: 'Home',
                        headerStyle: {
                          backgroundColor: '#002B5F',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignSelf: 'center',
                          fontSize: 25
                        },
                    }}

                />

                <Stack.Screen 
                    name="register_number" 
                    component={RegistrationPage1} 
                    options={{
                        headerShown: false,
                        title: 'Registration',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                />

                <Stack.Screen 
                    name="reg_credential" 
                    component={RegistrationPage2} 
                    options={{
                        headerShown: false,
                        title: 'Registration',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}
                />

                <Stack.Screen 
                    name="reg_bio" 
                    component={RegistrationPage3} 
                    options={{
                        headerShown: false,
                        title: 'Registration',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}
                />

                <Stack.Screen 
                    name="reg_bio2" 
                    component={RegistrationPage4} 
                    options={{
                        headerShown: false,
                        title: 'Registration',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                />

                <Stack.Screen 
                    name="complainStatus" 
                    component={Complainstatus} 
                    options={{
                        title: 'Status',
                        headerStyle: {
                          backgroundColor: '#002B5F',
                      },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                    }}
                />

                <Stack.Screen 
                    name="profile" 
                    component={Profile} 
                    options={{
                        title: 'My Profile',
                        headerStyle: {
                          backgroundColor: '#002B5F',
                      },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                    }}
                />

                <Stack.Screen 
                    name="Upload Video" 
                    component={UploadPage} 
                    options={{
                        title: 'Upload',
                        headerStyle: {
                          backgroundColor: '#002B5F',
                      },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                    }}
                />
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
