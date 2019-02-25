import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    logoContainer: {
        marginTop: 70,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 70
    },
    logo: {
        resizeMode: 'contain',
        width: 284,
        height: 127
    },
    input: {
        height: 44,
        backgroundColor: colors.white,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    signupText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    loading :{
        marginBottom: 10,
        marginTop: 10,
    },
    sessionButton:{
        justifyContent: 'center', 
        alignItems: 'center',
        top: '25%',
    },
    buttonGradient:{
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'transparent',
        width: 264,
        height: 49,
        backgroundColor: colors.red,
    },
    textButton:{
        color: colors.white,
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        letterSpacing: 0.47
    },
    form:{
        flexDirection: 'row',
    },
    inputTitle:{
        marginLeft: 13,
        textAlign: 'left',
        backgroundColor: 'transparent',
        fontSize: 16,
        color: colors.white,
        letterSpacing: 0.31,
        left: '10%',
    },
    line:{
        marginLeft:10,
        width: width - 20,
        height: 0.3,
        backgroundColor: colors.light_gray,
        justifyContent: 'center',
    }

});