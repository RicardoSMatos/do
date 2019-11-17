import { ScaledSheet } from 'react-native-size-matters'
import { Platform } from 'react-native'

import Colors from '../../../Themes/Colors';

export default ScaledSheet.create({
  container: {
    flexDirection: 'row',
    height: '35@ms',
    marginTop: '5@ms',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    backgroundColor: Colors.taskColor,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      }
    })
  },
  checkContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#678'
  },
  checkIcon: {
    color: Colors.checkColor,
    fontSize: '22@ms',
  },
  nameContainer: {
    flex: 8,
    alignItems: 'center'
  },
  name: {
    textAlign: 'center',
    fontSize: '15@ms',
  }
});