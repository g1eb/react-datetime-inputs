(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["DatetimeInputs"] = factory(require("react"), require("moment"));
	else
		root["DatetimeInputs"] = factory(root["React"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatetimeInput = undefined;

var _datetimeInputComponent = __webpack_require__(1);

var _datetimeInputComponent2 = _interopRequireDefault(_datetimeInputComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DatetimeInput = _datetimeInputComponent2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _datetimeInput = __webpack_require__(4);

var _datetimeInput2 = _interopRequireDefault(_datetimeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatetimeInput = function (_React$Component) {
  _inherits(DatetimeInput, _React$Component);

  function DatetimeInput(props) {
    _classCallCheck(this, DatetimeInput);

    var _this = _possibleConstructorReturn(this, (DatetimeInput.__proto__ || Object.getPrototypeOf(DatetimeInput)).call(this, props));

    _this.current = (0, _moment2.default)();

    var datetime = null;
    if (!!_this.props.datetime) {
      if (!_this.props.datetime._isAMomentObject) {
        datetime = _this.props.datetime.clone();
      } else {
        datetime = (0, _moment2.default)(_this.props.datetime);
      }
    }

    _this.state = {
      active: false,
      calendar: null,
      datetime: datetime
    };

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  _createClass(DatetimeInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.state.active && !this.wrapper.contains(event.target)) {
        this.setState({ active: false }, this.props.onClose);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this2 = this;

      this.setState({
        active: false,
        datetime: null,
        calendar: null
      }, function () {
        return _this2.props.onChange();
      });
    }
  }, {
    key: 'updateCalendar',
    value: function updateCalendar(calendar) {
      this.setState({ calendar: calendar });
    }
  }, {
    key: 'update',
    value: function update(datetime) {
      var _this3 = this;

      if (!!this.state.calendar) {
        this.updateCalendar(datetime.clone());
      }
      this.setState({ datetime: datetime }, function () {
        return _this3.props.onChange(datetime);
      });
    }
  }, {
    key: 'handleOnWheel',
    value: function handleOnWheel(event, upCallback, downCallback) {
      event = event.originalEvent || event;
      var delta = event.wheelDelta || event.deltaY * -1 || 0;
      if (delta < 0) {
        upCallback();
      }
      if (delta > 0) {
        downCallback();
      }
    }
  }, {
    key: 'closeEditPopover',
    value: function closeEditPopover() {
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'toggleEditPopover',
    value: function toggleEditPopover() {
      this.setState({
        active: !this.state.active,
        datetime: this.state.datetime || (0, _moment2.default)()
      });
    }
  }, {
    key: 'toggleCalendar',
    value: function toggleCalendar() {
      if (!!this.state.calendar) {
        this.setState({
          calendar: null
        });
      } else {
        this.setState({
          calendar: this.state.datetime.clone() || (0, _moment2.default)()
        });
      }
    }
  }, {
    key: 'renderDate',
    value: function renderDate() {
      if (this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.date },
          this.props.datetime.format(this.props.dateFormat)
        );
      }
    }
  }, {
    key: 'renderTime',
    value: function renderTime() {
      if (this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.time },
          this.props.datetime.format(this.props.timeFormat)
        );
      }
    }
  }, {
    key: 'renderPlaceholder',
    value: function renderPlaceholder() {
      if (!this.props.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.placeholder },
          this.props.placeholder
        );
      }
    }
  }, {
    key: 'renderCalendarHeader',
    value: function renderCalendarHeader() {
      var _this4 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.calendarHeader,
          onWheel: function onWheel(event) {
            return _this4.handleOnWheel(event, function () {
              return _this4.updateCalendar(_this4.state.calendar.add(1, 'month'));
            }, function () {
              return _this4.updateCalendar(_this4.state.calendar.subtract(1, 'month'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowLeft,
          onClick: function onClick() {
            return _this4.updateCalendar(_this4.state.calendar.subtract(1, 'month'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.calendar.format('YYYY') === this.current.format('YYYY') ? this.state.calendar.format('MMMM') : this.state.calendar.format('MMMM YYYY')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowRight,
          onClick: function onClick() {
            return _this4.updateCalendar(_this4.state.calendar.add(1, 'month'));
          } })
      );
    }
  }, {
    key: 'renderWeekdays',
    value: function renderWeekdays() {
      var _this5 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.weekdays },
        [0, 1, 2, 3, 4, 5, 6].map(function (dayIndex) {
          var date = _this5.state.calendar.clone();
          return React.createElement(
            'span',
            { className: _datetimeInput2.default.weekday },
            date.startOf('week').add(dayIndex, 'days').format('ddd')
          );
        })
      );
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks() {
      var _this6 = this;

      var weekNumberEnd = this.state.calendar.clone().endOf('month').week();
      var weekNumberStart = this.state.calendar.clone().startOf('month').week();
      var numWeeks = Math.abs(weekNumberEnd - weekNumberStart + 1);

      return [0, 1, 2, 3, 4, 5].slice(0, numWeeks).map(function (weekIndex) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.week },
          [0, 1, 2, 3, 4, 5, 6].map(function (dayIndex) {
            var date = _this6.state.calendar.clone().startOf('month').add(weekIndex, 'weeks').weekday(dayIndex).startOf('day');

            var dateStyles = _datetimeInput2.default.date;
            if (date.clone().isSame(_this6.current.clone().startOf('day'))) {
              dateStyles += ' ' + _datetimeInput2.default.current;
            }
            if (date.clone().isSame(_this6.state.datetime.clone().startOf('day'))) {
              dateStyles += ' ' + _datetimeInput2.default.active;
            }
            if (date.clone().month() !== _this6.state.calendar.month()) {
              dateStyles += ' ' + _datetimeInput2.default.inactive;
            }

            var dateFormat = date.format('YYYY-MM-DD');
            var timeFormat = _this6.state.datetime.format('HH:mm:ssZ');
            var datetime = (0, _moment2.default)(dateFormat + 'T' + timeFormat);

            return React.createElement(
              'span',
              { className: dateStyles,
                onClick: function onClick() {
                  return _this6.update(datetime);
                } },
              date.date()
            );
          })
        );
      });
    }
  }, {
    key: 'renderCalendarBody',
    value: function renderCalendarBody() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.calendarBody },
        this.renderWeekdays(),
        this.renderWeeks()
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      if (!!this.state.calendar) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.calendar },
          this.renderCalendarHeader(),
          this.renderCalendarBody()
        );
      }
    }
  }, {
    key: 'renderHours',
    value: function renderHours() {
      var _this7 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerHours,
          onWheel: function onWheel(event) {
            return _this7.handleOnWheel(event, function () {
              return _this7.update(_this7.state.datetime.add(1, 'hours'));
            }, function () {
              return _this7.update(_this7.state.datetime.subtract(1, 'hours'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this7.update(_this7.state.datetime.add(1, 'hours'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('HH')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this7.update(_this7.state.datetime.subtract(1, 'hours'));
          } })
      );
    }
  }, {
    key: 'renderMinutes',
    value: function renderMinutes() {
      var _this8 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerMinutes,
          onWheel: function onWheel(event) {
            return _this8.handleOnWheel(event, function () {
              return _this8.update(_this8.state.datetime.add(1, 'minutes'));
            }, function () {
              return _this8.update(_this8.state.datetime.subtract(1, 'minutes'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this8.update(_this8.state.datetime.add(1, 'minutes'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('mm')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this8.update(_this8.state.datetime.subtract(1, 'minutes'));
          } })
      );
    }
  }, {
    key: 'renderSeconds',
    value: function renderSeconds() {
      var _this9 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timerSeconds,
          onWheel: function onWheel(event) {
            return _this9.handleOnWheel(event, function () {
              return _this9.update(_this9.state.datetime.add(1, 'seconds'));
            }, function () {
              return _this9.update(_this9.state.datetime.subtract(1, 'seconds'));
            });
          } },
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowUp,
          onClick: function onClick() {
            return _this9.update(_this9.state.datetime.add(1, 'seconds'));
          } }),
        React.createElement(
          'span',
          null,
          this.state.datetime.format('ss')
        ),
        React.createElement('div', { className: _datetimeInput2.default.arrow + ' ' + _datetimeInput2.default.arrowDown,
          onClick: function onClick() {
            return _this9.update(_this9.state.datetime.subtract(1, 'seconds'));
          } })
      );
    }
  }, {
    key: 'renderTimer',
    value: function renderTimer() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.timer },
        this.renderHours(),
        React.createElement(
          'div',
          { className: _datetimeInput2.default.timerDivider },
          ':'
        ),
        this.renderMinutes(),
        React.createElement(
          'div',
          { className: _datetimeInput2.default.timerDivider },
          ':'
        ),
        this.renderSeconds()
      );
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      if (this.props.allowClear && !!this.state.datetime) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.clearButton },
          React.createElement(
            'div',
            { onClick: this.clear.bind(this) },
            'Clear'
          )
        );
      }
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      return React.createElement(
        'div',
        { className: _datetimeInput2.default.closeButton },
        React.createElement(
          'div',
          { onClick: this.closeEditPopover.bind(this) },
          'Close'
        )
      );
    }
  }, {
    key: 'renderDisplay',
    value: function renderDisplay() {
      if (!!this.props.customDisplay) {
        return React.cloneElement(this.props.customDisplay, {
          onClick: this.toggleEditPopover.bind(this),
          datetime: this.props.datetime
        });
      } else {
        var displayClassNames = _datetimeInput2.default.display + ' ' + this.props.cssClass + ' ' + (this.state.active ? _datetimeInput2.default.active : '');

        return React.createElement(
          'div',
          { className: displayClassNames,
            onClick: this.toggleEditPopover.bind(this) },
          this.renderDate(),
          this.renderTime(),
          this.renderPlaceholder()
        );
      }
    }
  }, {
    key: 'renderEditPopover',
    value: function renderEditPopover() {
      if (this.state.active) {
        return React.createElement(
          'div',
          { className: _datetimeInput2.default.editPopover },
          React.createElement(
            'div',
            { className: _datetimeInput2.default.header,
              onClick: this.toggleCalendar.bind(this) },
            this.state.datetime.format(this.props.dateFormat)
          ),
          this.renderCalendar(),
          this.renderTimer(),
          this.renderClearButton(),
          this.renderCloseButton()
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      return React.createElement(
        'div',
        { className: _datetimeInput2.default.datetimeInput,
          ref: function ref(node) {
            _this10.wrapper = node;
          } },
        this.renderDisplay(),
        this.renderEditPopover()
      );
    }
  }]);

  return DatetimeInput;
}(React.Component);

DatetimeInput.defaultProps = {
  datetime: undefined,
  dateFormat: 'DD MMMM YYYY',
  timeFormat: 'HH : mm : ss',
  placeholder: 'Set datetime',
  onChange: undefined,
  onClose: undefined,
  allowClear: false,
  cssClass: '',
  customDisplay: undefined
};

exports.default = DatetimeInput;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./datetime-input.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./datetime-input.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Datetime input styles\n */\n.datetime-input__datetimeInput___E_LKs {\n  position: relative;\n  width: 100%;\n  height: auto;\n  min-height: 4em;\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-size: 14px;\n  font-family: sans-serif;\n  text-decoration: none;\n  text-align: center;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n\n\n/**\n * Display datetime object\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 4em;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu:hover {\n  background-color: #ddd;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm {\n  background-color: rgba(255, 54, 46, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu.datetime-input__warning___LN8Vm:hover {\n  background-color: rgba(255, 54, 46, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__date___JuBJT {\n  color: #777;\n  font-size: 1em;\n  line-height: 2em;\n  display: block;\n  overflow: hidden;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__time___2lOBx {\n  font-size: 1.5em;\n  line-height: 1.25em;\n  display: block;\n  overflow: hidden;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__display___10kTu > .datetime-input__placeholder___1nw_d {\n  font-size: 1.5em;\n  line-height: 3em;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n\n/**\n * Edit datetime popover\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 {\n  position: absolute;\n  z-index: 5;\n  top: 4.5em;\n  width: 100%;\n  min-width: 350px;\n  height: auto;\n  padding: 0;\n  background-color: #efefef;\n  border-radius: 0;\n  border: 1px solid #aaa;\n  box-sizing: border-box;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl- {\n  width: 100%;\n  color: #777;\n  font-size: 1.5em;\n  line-height: 2em;\n  cursor: pointer;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #efefef;\n  width: 1em;\n  height: 1em;\n  top: -0.5em;\n  left: 10%;\n  z-index: 2;\n  border-color: #aaa;\n  border-style: solid;\n  border-width: 1px 1px 0 0;\n  box-sizing: border-box;\n  transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__editPopover___1bQE2 .datetime-input__header___6zUl-:hover::before {\n  background-color: #ddd;\n}\n\n\n/**\n * Calendar\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF {\n  cursor: default;\n  background-color: #fff;\n  position: relative;\n  width: 100%;\n  font-size: 1.5em;\n  line-height: 2em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr {\n  display: inline-block;\n  color: #ddd;\n  cursor: pointer;\n  line-height: 1.5em;\n  font-size: 1.5em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy {\n  position: absolute;\n  left: 0;\n  width: 2em;\n  height: 100%;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy::before {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  left: 25%;\n  border-right: 0.75em solid #ddd;\n  border-top: 0.5em solid transparent;\n  border-bottom: 0.5em solid transparent;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowLeft___2QdVy:hover::before {\n  border-right-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A {\n  position: absolute;\n  right: 0;\n  width: 2em;\n  height: 100%;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A::before {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  right: 25%;\n  border-left: 0.75em solid #ddd;\n  border-top: 0.5em solid transparent;\n  border-bottom: 0.5em solid transparent;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarHeader___zF4vF .datetime-input__arrow___3rVXr.datetime-input__arrowRight___3t92A:hover::before {\n  border-left-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 {\n  padding: 0.5em 0;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs {\n  cursor: default;\n  display: flex;\n  justify-content: space-between;\n  color: #777;\n  font-size: 1em;\n  line-height: 2em;\n  text-transform: uppercase;\n  padding: 0 1em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs .datetime-input__weekday___22PUD {\n  display: inline-block;\n  width: 5em;\n  height: 2.5em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__weekdays___36Mhs .datetime-input__weekday___22PUD {\n  display: inline-block;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp {\n  display: flex;\n  justify-content: space-between;\n  color: #777;\n  font-size: 1.25em;\n  line-height: 2.65em;\n  letter-spacing: 1px;\n  padding: 0.5em 1em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT {\n  display: inline-block;\n  cursor: pointer;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__current___1wlcl {\n  color: #555;\n  font-weight: 900;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT:not(.datetime-input__active___35Py3):hover {\n  background-color: #ddd;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__active___35Py3,\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__inactive___12SrF.datetime-input__active___35Py3 {\n  color: #efefef;\n  background-color: rgba(255, 69, 0, 0.75);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__calendar___2_R7X .datetime-input__calendarBody___1ADj2 .datetime-input__week___3lfOp .datetime-input__date___JuBJT.datetime-input__inactive___12SrF {\n  color: #aaa;\n}\n\n\n/**\n * Timer\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fff;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo {\n  cursor: default;\n  width: 3em;\n  display: inline-block;\n  font-size: 3em;\n  line-height: 1.5em;\n  position: relative;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr {\n  position: relative;\n  color: #ddd;\n  cursor: pointer;\n  height: 1em;\n  margin: 0 0.5em;\n  line-height: 1em;\n  font-size: 0.75em;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 35%;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-bottom: 0.5em solid #ddd;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowUp___10W_B:hover::before {\n  border-bottom-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 35%;\n  border-left: 0.5em solid transparent;\n  border-right: 0.5em solid transparent;\n  border-top: 0.5em solid #ddd;\n  transition: border 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerHours___304MH .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerMinutes___3iZOD .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before,\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerSeconds___5IRMo .datetime-input__arrow___3rVXr.datetime-input__arrowDown___3WUDf:hover::before {\n  border-top-color: #999;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__timer___1BCUZ .datetime-input__timerDivider___5u9y8 {\n  font-size: 3em;\n  line-height: 3em;\n  -webkit-animation-name: datetime-input__blinker___3tc5B;\n  -webkit-animation-duration: 5s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: datetime-input__blinker___3tc5B;\n  -moz-animation-duration: 5s;\n  -moz-animation-timing-function: linear;\n  -moz-animation-iteration-count: infinite;\n  animation-name: datetime-input__blinker___3tc5B;\n  animation-duration: 5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n@-moz-keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n@-webkit-keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n@keyframes datetime-input__blinker___3tc5B {\n  0% { opacity: 0.0; }\n  5% { opacity: 1.0; }\n  95% { opacity: 1.0; }\n  100% { opacity: 0.0; }\n}\n\n\n/**\n * Clear button\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm {\n  position: absolute;\n  z-index: 5;\n  bottom: -2.5em;\n  right: -1px;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #aaa;\n  border-right: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n  color: #777;\n  width: 25%;\n  height: auto;\n  font-size: 1.5em;\n  line-height: 2em;\n  box-sizing: border-box;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm::before {\n  content: \"\";\n  position: absolute;\n  left: -0.5em;\n  top: -1px;\n  width: 1em;\n  height: 2em;\n  background: #efefef;\n  border-top: 1px solid #aaa;\n  border-left: 1px solid #aaa;\n  transition: background 0.25s ease-out;\n  transform: skewX(25deg);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__clearButton___1F9Zm:hover::before {\n  background: #ddd;\n}\n\n\n/**\n * Close button\n */\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7 {\n  position: absolute;\n  z-index: 5;\n  left: -1px;\n  bottom: -2.5em;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #aaa;\n  border-left: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n  color: #777;\n  width: 25%;\n  height: auto;\n  margin-top: 10px;\n  font-size: 1.5em;\n  line-height: 2em;\n  box-sizing: border-box;\n  background-color: #efefef;\n  transition: background-color 0.25s ease-out;\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7::before {\n  content: \"\";\n  position: absolute;\n  right: -0.5em;\n  top: -1px;\n  width: 1em;\n  height: 2em;\n  background: #efefef;\n  border-top: 1px solid #aaa;\n  border-right: 1px solid #aaa;\n  transition: background 0.25s ease-out;\n  transform: skewX(-26deg);\n}\n\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7:hover,\n.datetime-input__datetimeInput___E_LKs .datetime-input__closeButton___1BwV7:hover::before {\n  background: #ddd;\n}\n", ""]);

// exports
exports.locals = {
	"datetimeInput": "datetime-input__datetimeInput___E_LKs",
	"display": "datetime-input__display___10kTu",
	"active": "datetime-input__active___35Py3",
	"warning": "datetime-input__warning___LN8Vm",
	"date": "datetime-input__date___JuBJT",
	"time": "datetime-input__time___2lOBx",
	"placeholder": "datetime-input__placeholder___1nw_d",
	"editPopover": "datetime-input__editPopover___1bQE2",
	"header": "datetime-input__header___6zUl-",
	"calendar": "datetime-input__calendar___2_R7X",
	"calendarHeader": "datetime-input__calendarHeader___zF4vF",
	"arrow": "datetime-input__arrow___3rVXr",
	"arrowLeft": "datetime-input__arrowLeft___2QdVy",
	"arrowRight": "datetime-input__arrowRight___3t92A",
	"calendarBody": "datetime-input__calendarBody___1ADj2",
	"weekdays": "datetime-input__weekdays___36Mhs",
	"weekday": "datetime-input__weekday___22PUD",
	"week": "datetime-input__week___3lfOp",
	"current": "datetime-input__current___1wlcl",
	"inactive": "datetime-input__inactive___12SrF",
	"timer": "datetime-input__timer___1BCUZ",
	"timerHours": "datetime-input__timerHours___304MH",
	"timerMinutes": "datetime-input__timerMinutes___3iZOD",
	"timerSeconds": "datetime-input__timerSeconds___5IRMo",
	"arrowUp": "datetime-input__arrowUp___10W_B",
	"arrowDown": "datetime-input__arrowDown___3WUDf",
	"timerDivider": "datetime-input__timerDivider___5u9y8",
	"blinker": "datetime-input__blinker___3tc5B",
	"clearButton": "datetime-input__clearButton___1F9Zm",
	"closeButton": "datetime-input__closeButton___1BwV7"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=datetime-inputs.js.map