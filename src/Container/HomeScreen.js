import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Modal, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals'
import { showMessage } from 'react-native-flash-message'

import TaskActions from '../Redux/TaskRedux'
import AuthActions from '../Redux/AuthRedux'
import styles from './Styles/HomeScreenStyles'

import { HeaderButtonAddTask, TaskList, TaskForm, LoginForm } from '../Components'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const logged = navigation.getParam('logged')
    return {title: 'Bem vindo',
      headerRight: logged ? <HeaderButtonAddTask event={navigation.getParam('addTaskFunc')}/> : null,
      headerStyle: {
        backgroundColor: '#db3c39',
        color: '#FFF'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
      },
    }
  }

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
    this.props.navigation.setParams({ logged: this.props.logged })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.logged !== this.props.logged) {
      this.props.navigation.setParams({ logged: nextProps.logged })
    }
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

  componentWillUnmount() {
    this.props.logout()
  }

  render() {
    const { tasks, logged } = this.props

    if(logged) {
      return (
        <View style={styles.screenContainer}>
          <TaskList 
            tasks={tasks}
            navigation={this.props.navigation}
          />
          <Button 
            color="#db3c39"
            title="Sair"
            onPress={() => this.props.logout()}
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
    } else {
      return (
        <View>
          <LoginForm />
        </View>
      )
    }
  }
}

const mapStateToProps = ({ task, auth }) => ({
  tasks: task.tasks,
  logged: auth.logged,
})

const mapDispathToProps = dispatch => ({
  setTask: (task) => dispatch(TaskActions.saveTask(task)),
  logout: () => dispatch(AuthActions.logout())
})

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);