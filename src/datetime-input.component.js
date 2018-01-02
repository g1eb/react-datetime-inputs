import * as React from 'react'
import moment from 'moment'

import styles from './datetime-input.css'


class DatetimeInput extends React.Component {

  constructor(props) {
    super(props)

    this.current = moment()

    let datetime = null
    if ( !!this.props.datetime ) {
      if ( !this.props.datetime._isAMomentObject ) {
        datetime = this.props.datetime.clone()
      } else {
        datetime = moment(this.props.datetime)
      }
    }

    this.state = {
      active: false,
      warning: false,
      calendar: null,
      datetime,
    }

    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside(event) {
    if ( this.state.active && !this.wrapper.contains(event.target) ) {
      this.setState({active: false}, this.props.onClose)
    }
  }

  clear() {
    this.setState({
      active: false,
      datetime: null,
      calendar: null,
    }, () => this.props.onChange())
  }

  updateCalendar(calendar) {
    this.setState({calendar})
  }

  checkBounds(datetime) {
    return (
      (!this.props.minDate || datetime > this.props.minDate)
      && (!this.props.maxDate || datetime < this.props.maxDate)
    )
  }

  update(datetime) {
    if ( !!this.state.calendar ) {
      this.updateCalendar(datetime.clone())
    }

    if ( this.checkBounds(datetime) ) {
      this.setState({datetime}, () => this.props.onChange(datetime))
    } else {
      this.setState({warning: true}, () => {
        setTimeout(() => {
          this.setState({warning: false})
        }, 250)
      })
    }
  }

  handleOnWheel(event, upCallback, downCallback) {
    event = event.originalEvent || event
    let delta = event.wheelDelta || (event.deltaY * -1) || 0
    if ( delta < 0 ) {
      upCallback()
    }
    if ( delta > 0 ) {
      downCallback()
    }
  }

  closeEditPopover() {
    this.setState({active: false}, this.props.onClose)
  }

  toggleEditPopover() {
    this.setState({
      active: !this.state.active,
      datetime: this.state.datetime || moment(),
    })
  }

  toggleCalendar() {
    if ( !!this.state.calendar ) {
      this.setState({
        calendar: null,
      })
    } else {
      this.setState({
        calendar: this.state.datetime.clone() || moment(),
      })
    }
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
      <div className={styles.calendarHeader}
        onWheel={(event) => this.handleOnWheel(event,
          () => this.updateCalendar(this.state.calendar.add(1, 'month')),
          () => this.updateCalendar(this.state.calendar.subtract(1, 'month')),
        )}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={
            () => this.updateCalendar(this.state.calendar.subtract(1, 'month'))
          }>
        </div>
        <span>
          { this.state.calendar.format('YYYY') === this.current.format('YYYY')
            ? this.state.calendar.format('MMMM')
            : this.state.calendar.format('MMMM YYYY')
          }
        </span>
        <div className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={
            () => this.updateCalendar(this.state.calendar.add(1, 'month'))
          }>
        </div>
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
            if ( date.clone().isSame(this.state.datetime.clone().startOf('day')) ) {
              dateStyles += ` ${styles.active}`
            }
            if ( date.clone().month() !== this.state.calendar.month() ) {
              dateStyles += ` ${styles.inactive}`
            }

            let dateFormat = date.format('YYYY-MM-DD')
            let timeFormat = this.state.datetime.format('HH:mm:ssZ')
            let datetime = moment(`${dateFormat}T${timeFormat}`)

            return (
              <span className={dateStyles}
                onClick={() => this.update(datetime)}>
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
      <div className={styles.timerHours}
        onWheel={(event) => this.handleOnWheel(event,
          () => this.update(this.state.datetime.clone().add(1, 'hours')),
          () => this.update(this.state.datetime.clone().subtract(1, 'hours')),
        )}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() => this.update(this.state.datetime.clone().add(1, 'hours'))}>
        </div>
        <span>{this.state.datetime.format('HH')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() => this.update(this.state.datetime.clone().subtract(1, 'hours'))}>
        </div>
      </div>
    )
  }

  renderMinutes() {
    return (
      <div className={styles.timerMinutes}
        onWheel={(event) => this.handleOnWheel(event,
          () => this.update(this.state.datetime.clone().add(1, 'minutes')),
          () => this.update(this.state.datetime.clone().subtract(1, 'minutes')),
        )}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() => this.update(this.state.datetime.clone().add(1, 'minutes'))}>
        </div>
        <span>{this.state.datetime.format('mm')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() => this.update(this.state.datetime.clone().subtract(1, 'minutes'))}>
        </div>
      </div>
    )
  }

  renderSeconds() {
    return (
      <div className={styles.timerSeconds}
        onWheel={(event) => this.handleOnWheel(event,
          () => this.update(this.state.datetime.clone().add(1, 'seconds')),
          () => this.update(this.state.datetime.clone().subtract(1, 'seconds')),
        )}>
        <div className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() => this.update(this.state.datetime.clone().add(1, 'seconds'))}>
        </div>
        <span>{this.state.datetime.format('ss')}</span>
        <div className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() => this.update(this.state.datetime.clone().subtract(1, 'seconds'))}>
        </div>
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

  renderClearButton() {
    if ( this.props.allowClear && !!this.state.datetime ) {
      return (
        <div className={styles.clearButton}>
          <div onClick={this.clear.bind(this)}>Clear</div>
        </div>
      )
    }
  }

  renderCloseButton() {
    return (
      <div className={styles.closeButton}>
        <div onClick={this.closeEditPopover.bind(this)}>Close</div>
      </div>
    )
  }

  renderDisplay() {
    if ( !!this.props.customDisplay ) {
      return React.cloneElement(this.props.customDisplay, {
        onClick: this.toggleEditPopover.bind(this),
        datetime: this.props.datetime,
        warning: this.state.warning,
        active: this.state.active,
      })
    } else {
      let displayClassNames = `${styles.display}
        ${this.state.active ? styles.active : ''}
        ${this.state.warning ? styles.warning : ''}
      `
      return (
        <div className={displayClassNames}
          onClick={this.toggleEditPopover.bind(this)}>
          {this.renderDate()}
          {this.renderTime()}
          {this.renderPlaceholder()}
        </div>
      )
    }
  }

  renderEditPopover() {
    if ( this.state.active ) {
      return (
        <div className={styles.editPopover}>
          <div className={styles.header}
            onClick={this.toggleCalendar.bind(this)}>
            {this.state.datetime.format(this.props.dateFormat)}
          </div>
          {this.renderCalendar()}
          {this.renderTimer()}
          {this.renderClearButton()}
          {this.renderCloseButton()}
        </div>
      )
    }
  }

  render() {
    return (
      <div className={styles.datetimeInput}
        ref={node => {this.wrapper = node}}>
        {this.renderDisplay()}
        {this.renderEditPopover()}
      </div>
    )
  }
}

DatetimeInput.defaultProps = {
  datetime: undefined,
  dateFormat: 'DD MMMM YYYY',
  timeFormat: 'HH : mm : ss',
  placeholder: 'Set datetime',
  onChange: undefined,
  onClose: undefined,
  allowClear: false,
  customDisplay: undefined,
  minDate: undefined,
  maxDate: undefined,
}

export default DatetimeInput
