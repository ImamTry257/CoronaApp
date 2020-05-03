import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { homeImg } from '../../assets';
import { Searching } from '../../components';
import { setDataCorona, setKeyword, setLoading } from '../../redux';
import InfoData from '../info';
import HeaderHome from './headerHome';


const Home = ({navigation, onPress}) => {
    const HomeState = useSelector( (state) => {
        return state.HomeReducer
    })

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('reload Home Page')
        console.log(HomeState)

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
        .finally(() => console.log('getting data berhasil'));

    }, [])

    const goTo = () => {
        navigation.navigate("Detail")
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

    return (
        <View style={styles.wrapper}>
            {/* Header Section */}
            <HeaderHome img={homeImg} title={HomeState.titlePage} />
            
            {/* Searching Section */}
            <Searching 
                title={HomeState.titleSearch} 
                onPressProps={() => {senData()}}
                inputChange={(data) => {onInputChange(data)}}
                value={HomeState.form}
                changeButtonColor={HomeState.runChangeButtonColor}
            />

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