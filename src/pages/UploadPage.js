import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import baseUrl from '../config/BaseUrl'
import BottomNavigator from '../components/BottomNavigator'

import ImagePicker from 'react-native-image-crop-picker';

const error = {
    borderWidth: 1,
    borderColor: 'red'
}
const success = {
    borderWidth: 1,
    borderColor: 'green'
}

const UploadPage = (props) => {
    const [description, setDescription] = useState(undefined)
    const [videoBtn, setVideoBtn] = useState('Upload Video Here')
    const [video, setVideo] = useState(undefined)
    const [desStatus, setdesStatus] = useState(error)
    const [videoStatus, setvideoStatus] = useState(error)
    const [uploadStatus, setuploadStatus] = useState(0)

    useEffect(() => {
        video === undefined ? setvideoStatus(error) : setvideoStatus(success)
    }, [video])

    useEffect(() => {
        description === undefined || description.length === 0 ? setdesStatus(error) : setdesStatus(success)
    }, [description])

    const [user, setUser] = useState(props.route.params.globalData)

    const uploadVideo = ()=> {
        // const options = {
        //     noData: true,
        //     mediaType: 'photo'
        // }
        // launchImageLibrary(options, response => {
        //     console.log("response", response)
        //     setPhoto(response.uri)
        // })
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            setVideo(video)
            setVideoBtn('Uploading Done!')
          });
    }

    const uploadSuspectVideo = async () =>{
        setuploadStatus(1)
        let formData = new FormData(); 
        
        if (user.uid === 0) {
            formData.append('description', description)
            formData.append('suspect_video', {
                name: 'suspect01.mp4',
                uri: video.path,
                type: 'video/mp4'
            })
        }
        else if (user.uid === 1){
            formData.append('user_id', user.uid)
            formData.append('description', description)
            formData.append('suspect_video', {
                name: 'suspect01.mp4',
                uri: video.path,
                type: 'video/mp4'
            })
        }
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        }

        if (user.uid === 0) {
            const response = await fetch(`${baseUrl}upload_anonymously/`, requestOptions);
            const data = await response.json();
            
            if (data.response === 0){
                alert('Video upload Successfully!')
                setDescription('') 
                setVideoBtn('setVideoBtn')
                setVideo(undefined)
                setuploadStatus(0)
            }
            else if (data.response === 1){
                alert('unable to upload')
                setuploadStatus(0)
            }
            else {
                alert('Something wrong try again')
                setuploadStatus(0)
            }
        }       
        else {
            const response = await fetch(`${baseUrl}uploadSuspect/`, requestOptions);
            const data = await response.json();
            if (data.response === 0){
                alert('Video upload Successfully!')
                setDescription() 
                setVideoBtn('Upload Video Here')
                setVideo(undefined)
                setuploadStatus(0)
            }
            else {
                alert('unable to upload')
                setuploadStatus(0)
            }
        }
        

        // if (data.resp === 2)
        //     alert("User not exit!")
        // else if (data.resp === 1)
        //     alert("Wrong Password")
        // else if (data.resp === 0){
        //     // storeData(data.uid)
        //     nav.reset({
        //         index: 0,
        //         routes: [{ name: 'Home', param: {data}}],
        //     });
            
        // }
          
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.mainForm}>

                    <View>
                        <Text style={styles.label}>
                            DESCRIPTION 
                        </Text>
                        <TextInput
                            value={description}
                            placeholder={'Enter Something'}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText = {(text)=>{
                                setDescription(text)
                                text.length === 0 ? setdesStatus(error) : setdesStatus(success)
                            }}
                            style={[styles.loginField, desStatus]}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Upload Video 
                        </Text>

                        <TouchableOpacity 
                            onPress={()=> {
                                uploadVideo()
                            }}
                            style={[styles.UploadBtn, videoStatus]}>
                            <Text style={styles.upTxt}>
                                {videoBtn}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {uploadStatus === 0 ?
                        <View>
                            <TouchableOpacity 
                                style={styles.submitBtn} 
                                onPress={() =>{
                                    description !== undefined 
                                    && video !== undefined 
                                    ? uploadSuspectVideo()
                                    : alert("Enter Required Information")
                                    
                                }}
                            >
                                <Text style={[styles.upTxt, {color: 'white'}]}>
                                    Upload
                                </Text>
                            </TouchableOpacity>
                        </View>
                    :
                    <Text style={[styles.upTxt, {color: '#002B5F', marginTop: 30, fontSize: 20}]}>
                        Upload ...
                    </Text>
                    }
                    <View>
                        {/* { console.log(video.path) } */}
                        
                    </View>

                </View>
            </ScrollView>
            <BottomNavigator pageState={1} nav = {props.navigation}/>
        </View>
    )
}

export default UploadPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainForm: {
        margin: 20
    },
    loginField: {
        textAlignVertical: 'top',
        backgroundColor: 'lightgray',
        height: 150,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 15,
        marginBottom: 20,
    },
    label: {
        color: '#002B5F',
        fontSize: 15,
        paddingLeft: 3,
        fontWeight: 'bold'
    },

    UploadBtn: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5
    },
    upTxt: {
        alignSelf: 'center',
        fontSize: 17,
        color: 'gray',
        fontWeight: 'bold'
    },
    submitBtn: {
        marginTop: 30,
        width: 150,
        backgroundColor: '#002B5F',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    }
    

})