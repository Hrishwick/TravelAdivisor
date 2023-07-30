import React from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Share, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import ImgToBase64 from 'react-native-image-base64';
import Share from 'react-native-share';
import styles from './styles';
import Title from '../../components/Title';
import Infocard from '../../components/infocard';


const AttractionDetails = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;
    const openingHours  = `OPEN
    ${item?.opening_time} - ${item?.closing_time}`
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.long,
        longitudeDelta : 0.009,
        latitudeDelta  : 0.009,
   
        };
         
     const onBack = () => {
        navigation.goBack();
     };

     const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images });
     };
     const onshare = async () => {
        try{
            const imageWithoutParams = mainImage?.split('?')[0];
            const imageParts = imageWithoutParams?.split('.');
            const imageExtension = imageParts[imageParts?.length-1];
            console.log('imageExtension :>>',imageExtension)
            const base64Image  = await   ImgToBase64.getBase64String(mainImage);
              console.log('mainImage :>>',mainImage);
              Share.open ({
            title : item?.name,
            message : 'Hey hope everyone is doing great',
            url:`data:/image/${imageExtension || 'jpg'};base64,${base64Image}`
        })
        
     .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
    }catch (e){
        console.log('sharinferror : >>',e);
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false}>
            <ImageBackground
            style={styles.mainImage}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: mainImage }}
            >
                <View style={styles.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                    <Pressable onPress={onshare} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/share.png')} />
                     </Pressable>
                     </View>

                     <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                     {slicedImages?.map((image, index) => (
                         <View key={image}>
                             <Image source={{ uri: image }} style={styles.miniImage} />
                             {diffImages > 0 && index === slicedImages?.length - 1 ? (
                                 <View style={styles.moreImagesContainer}>
                                 <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                 </View>
                             ):null}
                         </View>
                         ))}
                         </Pressable>
                         </ImageBackground>
                         <View style = {styles.headContainer}>
                          <View style = {{maxWidth : '70%'}}>
                          <Title style = {styles.title} text = {item?.title}/>
                          <Text style = {styles.city}>{item?.city}</Text>
                           </View>
                          <Title style = {styles.title}>{item?.entry_price}</Title>
                           </View>
                          <Infocard text = {item?.address} icon = {require ('../../assests/location_circle.png')}/>
                          <Infocard
                          text = {openingHours}
                          icon = {require ('../../assests/shedule.png')}/>

                          <MapView
                          style = {styles.map} initialRegion= {coords}>
                          <Marker coordinate={item?.coords} title={item?.name}/>
                          </MapView>
                          <Text style = {styles.mapText} onPress = {() => navigation.navigate ('Map',{item})}
                          >Show full screen map</Text>
                         </ScrollView>
                         </SafeAreaView>
                          );

                        };
                         export default React.memo(AttractionDetails);