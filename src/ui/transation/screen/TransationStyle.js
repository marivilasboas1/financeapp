import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/Colors';

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        backgroundColor: colors.black, 
        height: height,
    },
    titleHeader: {
        marginTop: 15,
        color: colors.white
    },
    header: {
        backgroundColor: colors.black,
    },
    flatListRow:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    }

});