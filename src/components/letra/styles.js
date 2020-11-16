import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({

    letraP: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 15,
        backgroundColor: '#DCDCDC',
        borderRadius: 5,
        margin: 10,
        justifyContent: 'space-between',
    },

    divLetras: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        maxWidth: Dimensions.get('window').width,
    },

});

export default styles;