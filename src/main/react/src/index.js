import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IdeaSoffit from './IdeaSoffit'
import ErrorPage from './components/ErrorPage'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-arimo'
import AdminIdeas from './AdminIdeas'
import { red } from 'material-ui/colors'
import { adminCheck, isListEmpty } from './api/api'

/* global token */

const oakland = {
  50: '#f1eee9',
  100: '#dbd4c8',
  200: '#c3b8a4',
  300: '#ab9c7f',
  400: '#b89f74',
  500: '#877148',
  600: '#7f6941',
  700: '#745e38',
  800: '#6a5430',
  900: '#574221',
  A100: '#0074b7',
  A200: '#0074b7',
  A400: '#0074b7',
  A700: '#0074b7',
  contrastDefaultColor: 'light'
}

const oaklandAccent = {
  50: '#eo33f6',
  100: '#b3d5e9',
  200: '#80badb',
  300: '#4d9ecd',
  400: '#2689c2',
  500: '#007467',
  600: '#006c60',
  700: '#0061a7',
  800: '#00579f',
  900: '#004490',
  A100: '#bcd6ff',
  A200: '#0074b7',
  A400: '#5699ff',
  A700: '#3c8aff',
  contrastDefaultColor: 'light'
}

const theme = createMuiTheme({
  palette: {
    primary: oakland,
    secondary: oaklandAccent,
    error: red,
    type: 'light'
  },
  typography: {
    fontFamily: 'Arimo',
    fontSize: '16px'
  },
  overrides: {
    Input: {
      textFieldInput: {
        fontSize: '16px'
      }
    },
    Checkbox: {
      fontSize: '16px'
    }
  }
})

class ParentElement extends Component {
  state = {
    isAdmin: false,
    isEmpty: false
  }

  componentDidMount() {
    adminCheck(token).then(isAdmin => {
      this.setState({ isAdmin })
    })
    isListEmpty().then(isEmpty => {
      this.setState({ isEmpty })
    })
  }

  showError = () => {
    this.setState({ isAdmin: 'error' })
  }

  render() {
    const { isAdmin, isEmpty } = this.state
    if (isAdmin === 'error') {
      return <ErrorPage />
    } else if (isAdmin) {
      return <AdminIdeas showError={this.showError} token={token} />
    } else {
      return (
        <IdeaSoffit
          showError={this.showError}
          isEmpty={isEmpty}
          token={token}
        />
      )
    }
  }
}
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ParentElement />
  </MuiThemeProvider>,
  document.getElementById('idea-root')
)
