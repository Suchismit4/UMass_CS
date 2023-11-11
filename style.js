import { StyleSheet} from 'react-native';


// Styling for the main window that covers everything
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1', // off-white color
    },
    widgetContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 70
    },
    sectionHeader: {
        fontFamily: 'ClashDisplay',
        fontSize: 20
    },
    sectionSubText: {
        fontSize: 15,
        marginTop: 7
    }
})

export default styles