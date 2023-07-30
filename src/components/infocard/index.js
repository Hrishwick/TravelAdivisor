import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const infocard = ({ text, style,icon }) => {
    return (
        <View style = {styles.container}>
        <Image style = {styles.icon} source = {icon}/>
         <Text style={[styles.title, style]}>{text}</Text>
        </View>      
    );
};

export default React.memo(infocard);