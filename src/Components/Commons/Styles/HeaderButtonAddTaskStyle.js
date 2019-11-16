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
    borderColor: Colors.default.textColor,
    borderRadius: 50,
  },
  icon: {
    color: Colors.default.textColor,
    fontSize: '30@ms',
  }
});
