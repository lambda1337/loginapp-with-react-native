import { StyleSheet } from 'react-native'
import { wp, hp } from './general_style'


export const register_style = StyleSheet.create({
    background:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'top',
        flex:1
    },
    title:{
        fontSize:wp(2)+hp(2),
        color:'#6125E4',
        fontWeight:'bold',
        marginBottom:hp(5),
        marginTop:hp(7)
    },
    buttons:{
        borderRadius:5,
        backgroundColor:'#6125E4',
        width:wp(60),
        height:hp(7),
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(10),
        borderWidth:1
    },
    inputs:{
        width:wp(65),
        height:hp(8),
        backgroundColor:'gray',
        color:'black',
        textAlign:'center',
        borderRadius:5,
        marginTop:hp(5),
        fontSize:wp(1.8)+wp(1.8)

    }

})