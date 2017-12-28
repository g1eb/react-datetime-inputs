import * as React from 'react'
import moment from 'moment'

import styles from './datetime-input.css'


class DatetimeInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  toggleEditPopover() {
    this.setState({active: !this.state.active})
  }

  renderDate() {
    if ( this.props.datetime ) {
      return (
        <div className={styles.date}>
          {this.props.datetime.format(this.props.dateFormat)}
        </div>
      )
    }
  }

  renderTime() {
    if ( this.props.datetime ) {
      return (
        <div className={styles.time}>
          {this.props.datetime.format(this.props.timeFormat)}
        </div>
      )
    }
  }

  renderPlaceholder() {
    if ( !this.props.datetime ) {
      return (
        <div className={styles.placeholder}>
          {this.props.placeholder}
        </div>
      )
    }
  }

  renderEditPopover() {
    if ( this.state.active ) {
      return (
        <div className={styles.editPopover}>
          <div className={styles.header}>
            {this.props.datetime.format(this.props.dateFormat)}
          </div>
        </div>
      )
    }
  }

  render() {

    let displayClassNames = styles.display
    if ( this.state.active ) {
      displayClassNames += ` ${styles.active}`
    }

    return (
      <div className={styles.datetimeInput}>
        <div className={displayClassNames}
          onClick={this.toggleEditPopover.bind(this)}>
          {this.renderDate()}
          {this.renderTime()}
          {this.renderPlaceholder()}
          {this.renderEditPopover()}
        </div>
      </div>
    )
  }
}

DatetimeInput.defaultProps = {
  datetime: undefined,
  dateFormat: 'DD MMMM YYYY',
  timeFormat: 'HH : mm : ss',
  placeholder: 'Set datetime',
}

export default DatetimeInput
