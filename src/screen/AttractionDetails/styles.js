import { StyleSheet,Dimensions } from 'react-native';
const{height} = Dimensions.get('window');
const styles = StyleSheet.create({
     
    container:{
        margin :32
    },

    mainImage:{
        width:'100%',
        height:height/2,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    header:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    icon:{
        width:36,
        height:36,
        margin:16,
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'rgba(256,256,256,0.31)',
        margin:16,
        paddingHorizontal:8

    },
    miniImage:{
        width:40,
        height:40,
       marginHorizontal :4,
       marginVertical   :8,
        borderRadius:10,  
    },
    moreImages:{
        
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        
    },
    moreImagesContainer:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.38)',
        top:8,
        left:4,
        width:40,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    headContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:40,
    },
    title:{
        color:'#000000',
    },
    city:{
        fontSize:20,
        color:'#000000',
        marginTop:8,
        fontWeight:'400',
        map:{
            width:'100%',
            height:200,
            borderRadius:10,                  
           },
    },
    mapText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#4681A3',
        textAlign:'center',
        marginBottom:60,
    }
});

export default styles;