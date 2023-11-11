import { StyleSheet} from 'react-native';


// Styling for the main window that covers everything
const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingTop: 50,
        paddingRight: 30,
        paddingBottom: 40,
    },
    logo: {
        width: 159,
        height: 63
    },
    searchIcon: {
        width: 40,
        height: 40,
    }
})  

export default styles