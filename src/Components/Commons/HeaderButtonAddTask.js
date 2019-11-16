import React from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import styles from './Styles/HeaderButtonAddTaskStyle'

const HeaderButtonAddTask = ({  }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
          <Ionicons name="ios-add" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

HeaderButtonAddTask.propTypes = {
  event: PropTypes.func.isRequired,
}

export default HeaderButtonAddTask