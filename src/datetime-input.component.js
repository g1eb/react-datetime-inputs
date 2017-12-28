import * as React from 'react'
import moment from 'moment'

import styles from './datetime-input.css'


class DatetimeInput extends React.Component {

  constructor(props) {
    super(props)

    this.current = moment()

    this.state = {
      active: false,
      calendar: null,
    }
  }

  closeEditPopover() {
    this.setState({active: false})
  }

  toggleEditPopover() {
    this.setState({
      active: !this.state.active,
    })
  }

  toggleCalendar() {
    this.setState({
      calendar: this.props.datetime.clone() || moment(),
    })
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

  renderCalendarHeader() {
    return (
      <div className={styles.calendarHeader}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`}></div>
        <span>
          { this.props.datetime.format('YYYY') === this.current.format('YYYY')
            ? this.props.datetime.format('MMMM')
            : this.props.datetime.format('MMMM YYYY')
          }
        </span>
        <div className={`${styles.arrow} ${styles.arrowRight}`}></div>
      </div>
    )
  }

  renderWeekdays() {
    return (
      <div className={styles.weekdays}>
        {[0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
          let date = this.state.calendar.clone()
          return (
            <span className={styles.weekday}>
              {date.startOf('week').add(dayIndex, 'days').format('ddd')}
            </span>
          )
        })}
      </div>
    )
  }

  renderWeeks() {
    let weekNumberEnd = this.state.calendar.clone().endOf('month').week()
    let weekNumberStart = this.state.calendar.clone().startOf('month').week()
    let numWeeks = Math.abs(weekNumberEnd - weekNumberStart + 1)

    return [0, 1, 2, 3, 4, 5].slice(0, numWeeks).map(weekIndex => {
      return (
        <div className={styles.week}>
          {[0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
            let date = this.state.calendar.clone()
              .startOf('month')
              .add(weekIndex, 'weeks')
              .weekday(dayIndex)
              .startOf('day')

            let dateStyles = styles.date
            if ( date.clone().isSame(this.current.clone().startOf('day')) ) {
              dateStyles += ` ${styles.current}`
            }
            if ( date.clone().isSame(this.props.datetime.clone().startOf('day')) ) {
              dateStyles += ` ${styles.active}`
            }
            if ( date.clone().month() !== this.state.calendar.month() ) {
              dateStyles += ` ${styles.inactive}`
            }

            return (
              <span className={dateStyles}>
                {date.date()}
              </span>
            )
          })}
        </div>
      )
    })
  }

  renderCalendarBody() {
    return (
      <div className={styles.calendarBody}>
        {this.renderWeekdays()}
        {this.renderWeeks()}
      </div>
    )
  }

  renderCalendar() {
    if ( !!this.state.calendar ) {
      return (
        <div className={styles.calendar}>
          {this.renderCalendarHeader()}
          {this.renderCalendarBody()}
        </div>
      )
    }
  }

  renderHours() {
    return (
      <div className={styles.timerHours}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}></div>
        <span>{this.props.datetime.format('HH')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}></div>
      </div>
    )
  }

  renderMinutes() {
    return (
      <div className={styles.timerMinutes}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}></div>
        <span>{this.props.datetime.format('mm')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}></div>
      </div>
    )
  }

  renderSeconds() {
    return (
      <div className={styles.timerSeconds}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}></div>
        <span>{this.props.datetime.format('ss')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}></div>
      </div>
    )
  }

  renderTimer() {
    return (
      <div className={styles.timer}>
        {this.renderHours()}
        <div className={styles.timerDivider}>:</div>
        {this.renderMinutes()}
        <div className={styles.timerDivider}>:</div>
        {this.renderSeconds()}
      </div>
    )
  }

  renderCloseButton() {
    return (
      <div className={styles.closeButton}>
        <div onClick={this.closeEditPopover.bind(this)}>Close</div>
      </div>
    )
  }

  renderEditPopover() {
    if ( this.state.active ) {
      return (
        <div className={styles.editPopover}>
          <div className={styles.header}
            onClick={this.toggleCalendar.bind(this)}>
            {this.props.datetime.format(this.props.dateFormat)}
          </div>
          {this.renderCalendar()}
          {this.renderTimer()}
          {this.renderCloseButton()}
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
