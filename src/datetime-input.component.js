import * as React from 'react'
import moment from 'moment'

import styles from './datetime-input.css'


class DatetimeInput extends React.Component {

  renderDate() {
    let format = this.props.dateFormat || 'DD MMMM YYYY'
    if ( this.props.datetime ) {
      return (
        <div className={styles.date}>
          {this.props.datetime.format(format)}
        </div>
      )
    }
  }

  renderTime() {
    let format = this.props.timeFormat || 'HH : mm : ss'
    if ( this.props.datetime ) {
      return (
        <div className={styles.time}>
          {this.props.datetime.format(format)}
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

  render() {
    return (
      <div className={styles.datetimeInput}>
        <div className={styles.display}>
          {this.renderDate()}
          {this.renderTime()}
          {this.renderPlaceholder()}
        </div>
      </div>
    )
  }
}

export default DatetimeInput
