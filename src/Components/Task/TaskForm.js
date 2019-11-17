import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Styles/TaskFormStyle'

export class TaskForm extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Formulario </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default TaskForm
