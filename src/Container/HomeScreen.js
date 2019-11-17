import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Modal, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals'
import { showMessage } from 'react-native-flash-message'

import TaskActions from '../Redux/TaskRedux'
import styles from './Styles/HomeScreenStyles'

import { HeaderButtonAddTask, TaskList, TaskForm } from '../Components'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bem vindo',
    headerRight: <HeaderButtonAddTask event={navigation.getParam('addTaskFunc')}/>
  })

  constructor(props) {
    super(props)

    this.openTaskForm = this.openTaskForm.bind(this);
    this.addTask = this.addTask.bind(this);

    this.state = {
      modalAddTaskVisible: false,
    }
  } 

  componentDidMount() {
    this.props.navigation.setParams({ addTaskFunc: this.openTaskForm })
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addTaskFunc: null })
  }

  openTaskForm() {
    console.log('Adicionar task')
    this.setState({ modalAddTaskVisible: true })
  }

  addTask(task) {
    this.props.setTask(task);
    this.setState({ modalAddTaskVisible:  false })
    showMessage({
      message: 'Tarefa cadastrada com sucesso',
      type: 'success'
    })
  }

  render() {
    const { tasks } = this.props

    return (
      <View style={styles.screenContainer}>
        <TaskList 
          tasks={tasks}
        />
        <Modal
          width={0.9}
          style={styles.modal}
          visible={this.state.modalAddTaskVisible}
          onTouchOutside={() => this.setState({modalAddTaskVisible: false })}
          footer={
            <ModalFooter>
              <ModalButton
                text="Cancelar"
                onPress={() => { this.setState({ modalAddTaskVisible: false }) }}
              />
            </ModalFooter>
          }
        >
          <ModalContent>
            <TaskForm
              saveTask={this.addTask}
            />
          </ModalContent>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  tasks: task.tasks,
})

const mapDispathToProps = dispatch => ({
  setTask: (task) => dispatch(TaskActions.saveTask(task)),
})

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);