# React component for datetime input

This component is designed to provide easy and intuitive input of moment.js datetime objects.

Desgined to be as simple as possible in order to afford intuitive interactions.


## Demo
Click <a href="https://rawgit.com/g1eb/react-datetime-inputs/master/" target="_blank">here</a> for a live demo.


### Datetime input
[<img src="https://raw.githubusercontent.com/g1eb/react-datetime-inputs/master/images/datetime.png" alt="React component for datetime inpt" width="300px">](https://rawgit.com/g1eb/react-datetime-inputs/master/)


## Install

1) Install 'react-datetime-inputs' with npm

```
npm install react-datetime-inputs --save
```

or with yarn

```
yarn add react-datetime-inputs
```

2) Import DatetimeInput component


```javascript
import { DatetimeInput } from 'react-datetime-inputs'
```

3) Render DatetimeInput component

```javascript
render() {
  return (
    <DatetimeInput
      datetime={this.state.datetime}
      onChange={this.handleOnChange.bind(this)}>
    </DatetimeInput>
  )
}
```


### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| datetime | moment.js datetime object or a datetime string | none | no |
| date-format | [moment.js compatible date format](https://momentjs.com/docs/#/displaying/format/) used for display in date and datetime input directives | 'DD MMMM YYYY' | no |
| time-format | [moment.js compatible time format](https://momentjs.com/docs/#/displaying/format/) used for display in time and datetime input directives | 'HH : mm : ss' | no |
| placeholder | Placeholder is shown when input object is undefined | none | no |
| allowClear | Allow users to clear selected datetime value | false | no |
| clearText | Clear text shown in the button to clear date object | Clear | no |
| onChange | Handler function that is fired on change of datetime object | none | no |
| onClose | Handler function that is fired on close of the edit popover | none | no |
| cssClass | custom css class name for datetime presentation | none | no |
| customDisplay | custom display component for presentation | none | no |

Note that when custom display component is provided it is up to the implementation to format display value and include a button to toggle datetime editor/popover.
For example:
```javascript
<h1 onClick={this.props.onClick}>
  {this.props.datetime.format('DD MMM HH:mm')}
</h1>
```

## Dependencies

* [react.js](https://reactjs.org/)
* [moment.js](http://momentjs.com/)
