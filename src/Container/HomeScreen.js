import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Modal, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals'

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

    this.addTask = this.addTask.bind(this);

    this.state = {
      modalAddTaskVisible: false,
    }
  } 
  
  

  componentDidMount() {
    this.props.navigation.setParams({ addTaskFunc: this.addTask })
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addTaskFunc: null })
  }

  addTask() {
    console.log('Adicionar task')
    this.setState({ modalAddTaskVisible: true })
  }

  render() {
    const { tasks } = this.props

    return (
      <View style={styles.screenContainer}>
        <TaskList 
          tasks={tasks}
        />
        <Modal
          // height={0.9}
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
              <ModalButton
                text="Cadastrar"
                onPress={() => {}}
              />
            </ModalFooter>
          }
        >
          <ModalContent>
            <TaskForm 

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