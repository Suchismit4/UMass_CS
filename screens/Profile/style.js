import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1', // off-white color   
    },
    profileContainer: {
        backgroundColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    profileImg: {
        width: 70,
        height: 70
    },
    profInfoContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 20
    },
    infoContainer: {
        paddingRight: 30
    },
    bio: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
    },
    headText: {
        fontSize: 18,
        paddingBottom: 10
    },
    widget: {
        height: 170,
        width: 310,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
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
    slidingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles