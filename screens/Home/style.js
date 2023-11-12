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
        width: 330,
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        overflow: 'hidden'
    },
    image: {
        height: 170,
        paddingVertical: 26,
        paddingHorizontal: 35
    },
    textHeader: {
        fontFamily: 'ClashDisplay',
        color: "#fff",
        fontSize: 21
    },
    textOneliner: {
        fontSize: 16,
        color: "#ecf0f1",
        fontWeight: 600,
        opacity: 0.9,
        marginTop: 6
    },
    creatorContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconForMaker: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginTop: 10,
        borderWidth: 4,
        borderColor: '#881D1C'
    },
    whoMade: {
        fontFamily: 'ClashDisplay',
        fontSize: 16,
        color: "#fff",
        marginTop: 6,
        marginLeft: 10
    },
    whoAll: {
        fontSize: 13,
        opacity: 0.8,
        marginLeft: 10
    }
})

export default styles