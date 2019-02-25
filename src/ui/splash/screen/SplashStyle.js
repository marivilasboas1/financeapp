import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/Colors'

export default  StyleSheet.create({

    container: {
        backgroundColor: colors.white, 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 20,
        color: colors.red,
        textAlign: 'center',
    }

});