import React from 'react';
import { Image, Text, View } from 'react-native';

const HeaderHome = ({img, title}) => {
    return (
        <View style={styles.header.main}>
            <Image source={img}  style={styles.header.logo}/>
            <Text style={styles.header.title}>{title}</Text>
        </View>
    );
}

const styles = {
    header:{
        main : {
            alignItems: 'center', 
            backgroundColor:"#FFFFFF", 
            paddingBottom: 10
        },
        logo : {
            width:257, 
            height:189, 
            marginTop: 30
        },
        title: {
            fontSize: 30, 
            fontWeight: 'bold'
        }
    },
}

export default HeaderHome;