import { ScaledSheet } from 'react-native-size-matters'

import { Colors } from '../../../Themes'

export default ScaledSheet.create({
  container: {
    height: '70%',
    width: '50@ms',
    marginRight: '4@ms',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#991afc'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 50,
    backgroundColor: '#48c75d'
  },
  icon: {
    color: '#FFF',
    fontSize: '30@ms',
  }
});
