import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Searching = ({onPressProps, title}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.content.title}>{title}</Text>
            <TextInput 
                style={styles.content.search} 
                placeholder="Nama Provinsi" 
                placeholderTextColor="black"
            />
            <TouchableOpacity 
                style={styles.content.button} 
                onPress={onPressProps}
                >
                <Text style={styles.content.buttonTitle}>Cari</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    content : {
        title : {
            fontSize: 20, 
            fontWeight: 'bold', 
            paddingTop: 30
        },
        search : {
            padding: 10, 
            backgroundColor: '#DDD0D0',
            width: 257,
            height: 40,
            borderRadius: 25,
            marginTop: 9
        },
        button : {
            width: 257, 
            height: 40, 
            backgroundColor: '#FF4343', 
            marginTop: 12,
            alignItems: 'center',
            borderRadius: 25
        },
        buttonTitle : {
            marginTop:9, 
            fontSize:16, 
            fontWeight: 'bold', 
            borderBottomColor:'black'
        },
        dataTitle : {
            fontSize: 20, 
            fontWeight: 'bold', 
            paddingTop: 40,
            textAlign: 'center'
        },
    }
}

export default Searching;