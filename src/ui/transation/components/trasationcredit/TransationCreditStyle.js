import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../assets/colors/Colors';

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        backgroundColor: colors.black

    },
    block:{
        backgroundColor: 'transparent',
        borderColor: colors.border,
        borderRadius: 6,
        borderWidth: 1,
        opacity: 50,
        height: 78,
        marginLeft: 20,
        marginRight: 20,
        marginTop: '5%',
    },
    title:{
        fontSize: 16,
        letterSpacing: 0.36,
        color: colors.white,
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    date:{
        opacity: 0.5,
        fontSize: 12,
        letterSpacing: 0.37,
        textAlign: 'left',
        color: colors.light_gray,
        marginTop: 8,
    },
    value:{
        fontSize: 14,
        letterSpacing: 0.28,
        textAlign: 'right',
        color: colors.green,
    },
    category:{
        opacity: 0.5,
        fontSize: 14,
        letterSpacing: 0.28,
        textAlign: 'right',
        color: colors.green,
        marginTop: 8,
        textTransform: 'uppercase',
    }

});