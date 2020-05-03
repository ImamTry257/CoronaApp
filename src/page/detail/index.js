import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { detailImg, iconBack } from '../../assets';

const Detail = ({navigation, onPress}) => {

    const DetailState = useSelector((state) => {
        return state.DetailReducer
    })

    useEffect(() => {
        console.log('reload Detail Page')
        console.log(DetailState)
    }, [])

    const goTo = () => {
        navigation.navigate("Detail")
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header.backContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={iconBack} style={styles.header.back}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header.main}>
                <Image source={detailImg} style={styles.header.logo}/>
                <Text style={styles.header.title}>{DetailState.titlePage}</Text>
            </View>

            <View>
                <Text style={styles.content.title}>{DetailState.titleSearch}{DetailState.dataCoronaDetail.Provinsi}</Text>
                <View style={{marginLeft: 80}}>
                    <Text style={styles.content.dataCorona}>Pasien Positif    :    10551 orang</Text>
                    <Text style={styles.content.dataCoronaa}>Sembuh              :    1591 orang</Text>
                    <Text style={styles.content.dataCoronaa}>Meninggal          :    800 orang</Text>
                </View>
            </View>

            <View style={styles.footer.main}>
                <Text style={styles.footer.desc}>{DetailState.descNoted}</Text>
            </View>
        </View>
    );
}

const styles = {
    wrapper : {
        backgroundColor: '#20C4DB', 
        height:100, 
        flex: 1
    },
    header : {
        main: {
            alignItems: 'center', 
            backgroundColor:"#FFFFFF", 
            paddingBottom: 10
        },
        backContainer : {
            backgroundColor:"#FFFFFF"
        },
        back : {
            width: 30, 
            height: 30, 
            marginTop: 30, 
            marginLeft: 20
        },
        logo : {
            width:257, 
            height:189, 
            marginTop: 30
        },
        title : {
            fontSize: 30, 
            fontWeight: 'bold'
        },
    },
    content : {
        title : {
            fontSize: 20, 
            fontWeight: 'bold', 
            paddingTop: 40,
            textAlign: 'center'
        },
        dataCorona: {
            marginTop: 10, 
            borderBottomWidth: 1, 
            borderBottomColor: 'black', 
            width: 210, 
            paddingBottom: 3
        },
        dataCoronaa: {
            marginTop: 5, 
            borderBottomWidth: 1, 
            borderBottomColor: 'black', 
            width: 210, 
            paddingBottom: 3
        }
    },
    footer : {
        main : {
            marginTop: 81, 
            height: 57, 
            alignItems:'center'
        },
        desc : {
            textAlign:"center", 
            color: 'red', 
            width: 329, 
            fontSize: 14
        },
    }
}

export default Detail;