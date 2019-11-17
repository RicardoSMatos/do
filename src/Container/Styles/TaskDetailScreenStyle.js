import { ScaledSheet } from 'react-native-size-matters'

export default ScaledSheet.create({
  container: {
    padding: '20@ms',
    flex: 1
  },
  fieldContainer: {
    marginTop: '15@ms'
  },
  fieldName: {
    textAlign: 'center',
    fontSize: '12@ms'
  },
  fieldValue: {
    textAlign: 'center',
    fontSize: '25@ms'
  },
  actionsContainers: {
    paddingHorizontal: '20@ms',
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnAction: {
    marginBottom: '4@ms'
  }
})
