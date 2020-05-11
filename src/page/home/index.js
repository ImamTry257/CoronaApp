import React, { useState, useEffect } from 'react';
import { Image, Text, View, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from '../../redux';
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';


const Home = ({navigation, onPress}) => {
    const HomeState = useSelector( (state) => {
        return state.HomeReducer
    })

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('reload Home Page')
    //     console.log(HomeState)

    //     // set loading
    //     dispatch(setLoading(true, true))

    //     // getting data
    //     fetch('https://api.kawalcorona.com/indonesia')
    //     .then((response) => response.json())
    //     .then((json) =>
    //         dispatch(setDataCorona(true,json[json.length - 1])),
    //         dispatch(setLoading(true, false)),
    //     )
    //     .catch((error) => console.error(error))
    //     .finally(() => console.log('getting data berhasil'));

    }, [])

    const goTo = () => {
        navigation.navigate("News")
    }

    const senData = () => {
        // getting data
        fetch('https://api.kawalcorona.com/indonesia/provinsi/')
        .then((response) => response.json())
        .then((json) =>
            console.log(json)
        )
        .catch((error) => console.error(error))
        .finally(() => console.log('getting data berhasil'));
    }

    const onInputChange = (data) => {

        // change color button 
        if(data != ''){
            HomeState.runChangeButtonColor = true
        }else{
            HomeState.runChangeButtonColor = false
        }

        // set keyword
        dispatch(setKeyword(true, data))

        console.log(HomeState)
    }

    const listData = [{value: 'DKI Jakarta',}, {value: 'Jawa Barat',}, {value: 'Sumatera Barat'}];

    return (
        <View style={styles.wrapper}>
            <View style={{flex:1}}>
                {/* header */}
                <View style={{backgroundColor: '#2CB575', paddingTop: 40}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold', paddingBottom: 5}}>SIAP SIAGA</Text>
                        <Image source={require('../../assets/img/judul-covid.png')} style={{paddingBottom: 5}}/>
                        <Text style={{color: 'black', fontSize: 12, fontWeight: 'normal', paddingTop: 5}}>Update terakhir : 4 Mei - 15.00 WIB</Text>
                        <Image source={require('../../assets/img/layar-atas.png')} style={{ width: '100%'}}/>
                    </View>
                </View>

                {/* Content */}
                <View style={{marginHorizontal: 10}}>
                    {/* provinsi choise */}
                    <Text style={{fontSize: 12}}>Kasus COVID-19 di Indonesia</Text>
                    <View style={{ width: '40%'}}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'DKI Jakarta', value: 'DKI Jakarta' },
                                { label: 'Banten', value: 'Banten' },
                                { label: 'Jawa Barat', value: 'Jawa Barat' },
                            ]}
                        />
                    </View>

                    {/* informasi */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, height: 100}}>

                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", borderRadius:15, elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={require('../../assets/img/total-positif.png')} style={{width: 30}} />
                            </View>
                            <Text style={{fontSize:12, marginVertical:3}}>Total Positif</Text>
                            <Text style={{fontSize:24, color:'#2CB575'}}>11192</Text>
                        </View>

                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", borderRadius:15, elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={require('../../assets/img/total-sembuh.png')} style={{width: 30}} />
                            </View>
                            <Text style={{fontSize:12, marginVertical:3}}>Total Sembuh</Text>
                            <Text style={{fontSize:24, color:'#2CB575'}}>1876</Text>
                        </View>

                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", borderRadius:15, elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={require('../../assets/img/total-meninggal.png')} style={{width: 30}} />
                            </View>
                            <Text style={{fontSize:12, marginVertical:3}}>Total Meninggal</Text>
                            <Text style={{fontSize:24, color:'#2CB575'}}>845</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{fontSize:10, marginVertical:3}}>Sumber : kawalcorona.com</Text>
                        <View style={{width:'100%',height:2,backgroundColor:'#eeecec',marginTop:10}}></View>
                    </View>

                    {/* Info Edukasi */}
                    <View>
                        <Text style={{fontSize:16, marginVertical:5}}>Info Edukasi</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5,height: 100}}>
                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => goTo()}>
                                <View>
                                    <Image source={require('../../assets/img/tindakan-preventif.png')} style={{width:102, height:80}} />
                                </View>
                                <Text style={{fontSize:11, marginVertical:3}}>Tindakan Preventif</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={require('../../assets/img/gejala.png')} style={{width:102, height:80}} />
                            </View>
                            <Text style={{fontSize:11, marginVertical:3}}>Gejala</Text>
                        </View>

                        <View style={{height:150,width:"30%", height: '100%', backgroundColor:"white", elevation:20, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5,justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={require('../../assets/img/fakta-vs-hoax.png')} style={{width:102, height:80}} />
                            </View>
                            <Text style={{fontSize:11, marginVertical:3}}>Fakta x Hoax</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2CB575' }}>
                <Text style={{fontSize: 12, color: '#545454'}}>supported By</Text>
                <Text style={{fontSize: 12, color: '#545454'}}>IYA.DIGITAL</Text>
            </View>
        </View>
    );
}

const styles = {
    wrapper : {
        backgroundColor: 'white', 
        height:100, 
        flex: 1,
    },
    content : {
        dataTitle : {
            fontSize: 20, 
            fontWeight: 'bold', 
            paddingTop: 40,
            textAlign: 'center'
        },
    }

}

export default Home;