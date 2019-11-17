import { ScaledSheet } from 'react-native-size-matters'
import Colors from '../../../Themes/Colors';

export default ScaledSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: '10@ms'
  },
  title: {
    marginVertical: '4@ms',
    marginBottom: '5@ms',
    fontSize: '20@ms',
    color: '#0793d9',
    textAlign: 'center'
  },
  inputFieldContainer: {
    flexDirection: 'row',
    marginTop: '8@ms',
  },
  inputLabelContainer: {
    flex: 2,
    justifyContent: 'center',
    
  },
  inputLabel: {
    textAlign: 'right',
    fontSize: '11@ms',
  },
  inputContainer: {
    flex: 8,
    marginLeft: '4@ms',
    borderBottomWidth: 1,
    borderBottomColor: '#a6e1ff'
  },
  input: {
    fontSize: '15@ms',
    color: Colors.checkedColor
  },
  btnContainer: {
    marginTop: '10@ms',
  }

});