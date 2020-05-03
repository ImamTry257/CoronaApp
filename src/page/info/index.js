import React from 'react';
import { Text, View } from 'react-native';

const InfoData = ({infoCorona}) => {
   return (
    <View style={{alignItems:'center'}}>
        <Text style={styles.content.dataCorona}>Pasien Positif    :    {infoCorona.positif} orang</Text>
        <Text style={styles.content.dataCoronaa}>Sembuh              :    {infoCorona.sembuh} orang</Text>
        <Text style={styles.content.dataCoronaa}>Meninggal          :    {infoCorona.meninggal} orang</Text>
    </View>
   );
}

const styles = {
    content : {
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
    }
}

export default InfoData;