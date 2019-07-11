import { StyleSheet } from 'react-native';
import colors from '../../assets/colors'

export default StyleSheet.create({

    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        width: '100%',
        marginTop: 80,
        flex: 1,
        alignItems: 'center'
    },
    roundButton:
    {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
        colors.darkBlue,
        borderRadius: 20,
        backgroundColor:colors.darkBlue
    }

});


