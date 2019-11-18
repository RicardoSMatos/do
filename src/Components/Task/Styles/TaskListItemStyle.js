import { ScaledSheet } from 'react-native-size-matters'
import { Platform } from 'react-native'

import Colors from '../../../Themes/Colors';

export default ScaledSheet.create({
  container: {
    flexDirection: 'row',
    height: '45@ms',
    marginTop: '5@ms',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    
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
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    color: '#FFF',
    fontSize: '22@ms',
  },
  nameContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: '15@ms',
    color: '#FFF'
  },
  detailContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailBtn: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailIcon: {
    color: '#FFF',
    fontSize: '15@ms',
  },
  detailText: {
    color: '#FFF',
    fontSize: '10@ms'
  }
});