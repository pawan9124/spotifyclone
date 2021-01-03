import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:"absolute",
        bottom:'6.7%',
        backgroundColor:'rgb(18,18,18)',
        width:'100%',
        borderWidth:1,
        borderColor:'rgb(35,35,35)',
        alignItems:'center'

    },
    image:{
        width:75,
        height:75,
        margin:3
    },
    rightContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
iconContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:100,
    justifyContent:'space-around',
    marginRight:5
},
    title:{
        color:'white',
        fontSize:14,
        margin:7
    },
    artist:{
        color:'lightgray',
        fontSize:14,
    }
})

export default style;