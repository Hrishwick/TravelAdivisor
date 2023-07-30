import React from 'react';
import {  FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import { View } from 'react-native';

const Gallery = ({navigation,route}) => {
    const {images} = route?.params || {};
    const onBack = () =>{
        navigation.goBack();
    }
         return(
            <SafeAreaView style = {styles.container}>
            <View>
            <FlatList
           style = {{padingHorizontal:24,marginBottom:24}}
            data = {images}
            renderItem = {({item}) => (
                <Image source = {{uri:item}} style = {styles.image}/>
            )}
           />
           <TouchableOpacity onPress = {onBack}  style = {styles.BackContainer}>
            <Image source = {require('../../assests/Back.png')} style = {styles.BackIcon}/>
            </TouchableOpacity>
            </View> 
        </SafeAreaView>
    );
};

export default React.memo(Gallery);