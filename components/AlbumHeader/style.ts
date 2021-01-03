import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    container:{
        alignItems:'center',
        padding:10
    },
    image:{
        width:175,
        height:175,
        margin:10
    },
    name:{
        color:'white',
        fontSize:22,
        fontWeight:'bold'
    },
    creatorContainer:{
        flexDirection:'row',
    },
    creator:{
        color:'lightgray',
        margin:5,
    },
    likes:{
        color:"lightgray",
        margin:5
    },
    button:{
        backgroundColor:'#1CD05D',
        height:50,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        color:'white',
        margin:5
    },
    buttonText:{
        color:"lightgray",
        fontWeight:'bold',
        fontSize:18
    }
});

export default style;