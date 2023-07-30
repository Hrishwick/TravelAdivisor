import { StyleSheet , Dimensions  } from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({


    container: {
        flex: 1,
    
    },
    map:{
      width:'100%',
      height:'100%'
    },
    header:{
      position:'absolute',
      margin:24,
      padding:16,
      top:40,
      width:'100%',
      backgroundColor:'white',
      borderRadius:15,
      alignItems:'center',
      flex:1,
      flexDirection:'row',
    },
    title:{
      color:'#000',
      fontSize:20
    },
    back:{
      
      width:40,
      height:40,
      marginRight : 16,  
      }
      
});

export default styles;