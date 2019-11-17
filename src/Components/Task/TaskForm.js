import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './Styles/TaskFormStyle'

export class TaskForm extends Component {
  static propTypes = {
    saveTask: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      taskName: '',
      taskDescription: '',
    }
  }

  cadastrarTarefa() {
    const { saveTask } = this.props

    if(this.state.taskName.length === 0) {
      console.log('exibir mensagem')
      showMessage({
        type: 'info',
        message: 'É necessário inserir o nome da tarefa'
      })
      return;
    }

    const task = {
      id: new Date().getTime(),
      name: this.state.taskName,
      description: this.state.taskDescription,
      finished: false,
    }

    saveTask(task)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastrar Nova Tarefa</Text>
        <View style={styles.inputFieldContainer}>
          {/* Task Name */}
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Nome:</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.taskName}
              onChangeText={(text) => { this.setState({ taskName: text }) }}
            />
          </View>
        </View>
        <View style={styles.inputFieldContainer}>
          {/* Task Description */}
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Descrição:</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.input}
              value={this.state.taskDescription}
              onChangeText={(text) => { this.setState({ taskDescription: text }) }}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button 
            title="Cadastrar tarefa"
            onPress={() => this.cadastrarTarefa()}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default TaskForm
