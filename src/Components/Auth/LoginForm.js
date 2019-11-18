import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import AuthActions from '../../Redux/AuthRedux'
import TaskActions from '../../Redux/TaskRedux'
import styles from './Styles/LoginFormStyle'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      senha: '',
    }
  }

  cadastrar() {
    const { cadastraUsuario, clear } = this.props

    if(this.state.email === '' ||this.state.senha === '' ) {
      showMessage({
        message: 'É necessário inserir email e senha',
        type: 'info',
      })

      return;
    }

    clear()
    cadastraUsuario(this.state.email, this.state.senha)

  }

  login() {
    const { login } = this.props

    if(this.state.email === '' ||this.state.senha === '' ) {
      showMessage({
        message: 'É necessário inserir email e senha',
        type: 'info',
      })

      return;
    }

    login(this.state.email, this.state.senha)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={this.state.senha}
            secureTextEntry
            onChangeText={(text) => this.setState({ senha: text })}
          />
        </View>
        <Text style={{ color: 'red' }}>{this.props.error}</Text>
        <View style={styles.actionsContainer}>
          <View style={styles.btn}>
            <Button 
              title="Login"
              onPress={() => { this.login() }}
            />
          </View>
          <View style={styles.btn}>
            <Button 
              title="Cadastrar como novo usuário"
              onPress={() => this.cadastrar()}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
})

const mapDispatchToProps = dispatch => ({
  cadastraUsuario: (email, senha) => dispatch(AuthActions.cadastrar(email, senha)),
  clear: () => dispatch(TaskActions.clear()),
  login: (email, senha) => dispatch(AuthActions.login(email,senha)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
