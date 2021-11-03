import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent: 'center',
        alignContent: 'center',
    },
    scrollview:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    image_header:{
        width: 80,
        height: 80, 
        margin:20
    },
    view_email:{
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    view_password:{
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    bouton_connexion:{
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    text_connexion:{
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    forgot_password_text:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    text_error:{
        fontSize:14,
        color:'red',
        textAlign: 'center',
        width:'100%',
    },
    text_input_login:{
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    }
})