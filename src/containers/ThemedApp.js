import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import {getTheme} from 'redux/selectors'

const {object} = PropTypes

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    overflow: hidden;
  }
`

const Root = styled.div`
  background-color: #fff;
  color:#000;
  font: 11px sans-serif;
  padding: 8px;
`

const ThemedApp = ({theme, children}) => (
  <ThemeProvider theme={theme}>
    <Root>
      {children}
    </Root>
  </ThemeProvider>
)

ThemedApp.propTypes = {
  theme: object,
  // children: array
}

const mapStateToProps = (state, ownProps) => ({
  theme: getTheme(state)
})

export default connect(mapStateToProps)(ThemedApp)
