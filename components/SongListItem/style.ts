import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10
    },
    image:{
        width:75,
        height:75
    },
    rightContainer:{
        justifyContent:'space-around',
        marginLeft:15
    },
    title:{
        color:'white',
        fontSize:20
    },
    artist:{
        color:'lightgray',
        fontSize:16
    },
    optionContainer:{
        flex:1,
        flexDirection:'row-reverse',
        alignItems:'center',
        
    },
    options:{
       marginRight:5
    }
})

export default style;