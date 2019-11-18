import React  from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const EmptyList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Não há tarefas cadastradas no momento</Text>
  </View>
)

const styles = ScaledSheet.create({
  container: {
    marginTop: '50@ms'
  },
  text: {
    textAlign: 'center'
  }
})

export default EmptyList;