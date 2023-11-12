import { StyleSheet} from 'react-native';



// Styling for the main window that covers everything
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1', // off-white color
    },
    widgetContainer: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    sectionHeader: {
        fontFamily: 'ClashDisplay',
        fontSize: 20
    },
    sectionSubText: {
        fontSize: 15,
        marginTop: 7,
        marginBottom: 30
    },
    widget: {
        height: 170,
        width: 310,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
    }
})

export default styles