import React, { useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { homeImg } from '../../assets';
import { setDataCorona, setLoading } from '../../redux';
import InfoData from '../info';
import HeaderHome from './headerHome';
import { Searching } from '../../components';


const Home = ({navigation, onPress}) => {
    const HomeState = useSelector( (state) => {
        return state.HomeReducer
    })

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('reload Home Page')

        // set loading
        dispatch(setLoading(true, true))

        // getting data
        fetch('https://api.kawalcorona.com/indonesia')
        .then((response) => response.json())
        .then((json) =>
            dispatch(setDataCorona(true,json[json.length - 1])),
            dispatch(setLoading(true, false)),
        )
        .catch((error) => console.error(error))
        .finally(() => console.log('berhasil'));

    }, [])

    const goTo = () => {
        navigation.navigate("Detail")
    }

    return (
        <View style={styles.wrapper}>
            {/* Header Section */}
            <HeaderHome img={homeImg} title={HomeState.titlePage} />
            
            {/* Searching Section */}
            <Searching title={HomeState.titleSearch} onPressProps={() => {goTo()}} />

            {/* Data Section */}
            {HomeState.isLoading ? <ActivityIndicator style={{marginTop: 10}}/> : (
            <View>
                <Text style={styles.content.dataTitle}>Data Korona di Indonesia</Text>
                <InfoData infoCorona={HomeState.dataCoronaHome} />
            </View>
            )}
        </View>
    );
}

const styles = {
    wrapper : {
        backgroundColor: '#20C4DB', 
        height:100, 
        flex: 1
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