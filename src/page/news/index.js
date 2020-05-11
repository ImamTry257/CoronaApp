import React, { useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import { satu, dua, tiga, empat, lima, hoax1, hoax2, hoax3, hoax4, hoax5, hoax6, hoax7, hoax8 } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    { text: satu },
    { text: dua },
    { text: tiga },
    { text: empat },
    { text: lima },
];

const DATAH = [
    { text: hoax1 },
    { text: hoax2 },
    { text: hoax3 },
    { text: hoax4 },
];

const DATAF = [
    { text: hoax5 },
    { text: hoax6 },
    { text: hoax7 },
    { text: hoax8 },
];

const News = ({navigation}) => {
    useEffect(() => {
       setTimeout(function(){
        // navigation.replace('Home')
        console.log('reload news page')
       },500)
    }, [])

    const renderItem = data => (
        <View key={data.text} style={styles.item}>
          <Image source={data.text} style={{width:'100%', resizeMode:'contain'}}/>
        </View>
      );

    const renderItemH = data => (
        <View key={data.text} style={styles.item}>
            <Image source={data.text} style={{width:'100%', resizeMode:'contain'}}/>
        </View>
    );

    const renderItemF = data => (
        <View key={data.text} style={styles.item}>
            <Image source={data.text} style={{width:'100%', resizeMode:'contain'}}/>
        </View>
    );

    return (
       <ScrollView style={{backgroundColor: 'white'}}>   
           {/* <View> */}
                <View style={{marginTop: 15, marginBottom: 10, marginHorizontal: 5}}>
                    <View style={{paddingBottom: 10}}>
                        <Text style={{fontSize: 11, color:'#545454'}}>Home >> Info Edukasi</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text>Tindakan Preventif</Text>
                        <Image source={require('../../assets/img/dirumahaja.png')} style={{width: '40%', height: '100%', resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Carousel
                        pagination={Pagination}
                        renderItem={renderItem}
                        data={DATA}
                    />
                </View>

                <View style={{ alignItems: 'stretch'}}>
                    <Image source={require('../../assets/img/gejala-klinis.png')} style={{width:'100%', height: 180, resizeMode: 'contain'}}/>
                </View>

                <View style={{marginHorizontal: 5, marginBottom: -10}}>
                    <Text>Fakta x Hoax</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: -20}}>
                    <Carousel
                        pagination={Pagination}
                        renderItem={renderItemH}
                        data={DATAH}
                    />
                </View>

                <View style={{alignItems: 'center', marginTop: -20}}>
                    <Carousel
                        pagination={Pagination}
                        renderItem={renderItemF}
                        data={DATAF}
                    />
                </View>
            {/* </View> */}
       </ScrollView>
   );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: 350,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: '#dbf3fa',
    },
  });

export default News;