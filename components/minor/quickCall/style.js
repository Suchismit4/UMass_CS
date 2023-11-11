import { StyleSheet} from 'react-native';


// Styling for the main window that covers everything
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#881D1C",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 1,
        height: 1,
        },
        shadowOpacity:  0.2,
        shadowRadius: 1.51,
        elevation: 2
    },
    header: {
        fontSize: 17,
        fontFamily: 'ClashDisplay',
        color: "#fff",
        letterSpacing: 0.0166666
    },
    subHeader: {
        color: "#ecf0f1",
        opacity: 0.71273,
        fontSize: 12,
        marginTop: 4,
        width: 200, 
        
    }
})  

export default styles