import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { titleApp } from '../../assets';

const SplashPage = ({navigation}) => {
    useEffect(() => {
       setTimeout(function(){
        navigation.navigate('Home')
       },500)
    }, [])

   return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{alignContent: 'center', alignItems: 'center'}}>
                <View style={{marginHorizontal: 100, marginTop: 150, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={titleApp} style={{width: 100}} />
                </View>
                <View style={{marginTop: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 180}}>
                    <Image source={require('../../assets/img/pro-man.png')} style={{width: 70}} />
                    <Image source={require('../../assets/img/pro-woman.png')} style={{width: 70}} />
                </View>
            </View>
        </View>
        <View style={{height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingBottom: 30, }}>
            <Text style={{fontSize: 12, color: '#545454'}}>supported By</Text>
            <Text style={{fontSize: 12, color: '#545454'}}>IYA.DIGITAL</Text>
        </View>
    </View>
   );
}

export default SplashPage;