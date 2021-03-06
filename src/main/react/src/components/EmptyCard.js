import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%'
  },

  card: {
    backgroundColor: '#fafafa ',
    display: 'flex'
  },

  content: {
    paddingTop: 0
  }
})

class EmptyCard extends Component {
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <div>
            <CardHeader title="Looks like there are no ideas currently" />
            <CardContent className={classes.content}>
              <Typography type="subheading">
                If you have an idea to improve MySail, press the button to the
                bottom right and fill out the form.
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    )
  }
}

EmptyCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { name: 'EmptyCard' })(EmptyCard)
