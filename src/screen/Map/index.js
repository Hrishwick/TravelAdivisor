import React from 'react';
import MapView from 'react-native-maps';
import styles from './styles';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

     const Map = ({navigation,route}) => {
     const {item} = route?.params || {};
     const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.long,
        longitudeDelta : 0.009,
        latitudeDelta  : 0.009,  
         }
         const onBack = () => {
            navigation.goBack();
         };
   
         return(
            <View style = {styles.container}>
          <MapView
         style = {styles.map} initialRegion= {coords}>
         <Marker coordinate={item?.coords} title={item?.name}/>
             </MapView> 
             <View style = {styles.header}>
             <TouchableOpacity onPress = {onBack}>
             <Image source = {require('../../assests/Back.png')} style = {styles.back}/>
             </TouchableOpacity>            
             <Text style = {styles.title} >{`${item?.name}, ${item?.city}`}</Text>
             </View>
                    
            </View>
            
    );
};

export default React.memo(Map);