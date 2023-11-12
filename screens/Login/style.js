import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ecf0f1"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        
      },
    loginBox: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#881D1C",        
        paddingTop: 35,
        paddingBottom: 35,
        borderRadius: 8
    },

    inputView: {
        width: '80%',
        backgroundColor: "#ECF0F1",
        borderRadius: 8,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        width: '100%',
        color:"black"
    },
    forgotAndSignUpText:{
        color: '#815de3',
        fontSize:11
        },
    loginBtn:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
        },
})

export default styles