/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/DatePicker");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcon = __webpack_require__(25);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _RefreshIndicator = __webpack_require__(27);

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

    container: {
        position: 'relative'
    },

    refresh: {
        position: 'relative',
        display: 'inline-block'
        // left: '700',
        // top: '350',
        // zIndex: 999,
        // opacity: '1'
    }
};

var Refresh = function (_Component) {
    _inherits(Refresh, _Component);

    function Refresh(props, context) {
        _classCallCheck(this, Refresh);

        var _this = _possibleConstructorReturn(this, (Refresh.__proto__ || Object.getPrototypeOf(Refresh)).call(this, props, context));

        _this.state = {
            show: null
        };
        return _this;
    }

    _createClass(Refresh, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'col-md-12 refresh-container' },
                _react2.default.createElement(_RefreshIndicator2.default, {
                    size: 50,
                    status: 'loading',
                    top: 0,
                    left: 0,
                    style: styles.refresh
                })
            );
        }
    }]);

    return Refresh;
}(_react.Component);

exports.default = Refresh;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(33);

var _history = __webpack_require__(21);

var _Main = __webpack_require__(18);

var _Main2 = _interopRequireDefault(_Main);

var _Refresh = __webpack_require__(8);

var _Refresh2 = _interopRequireDefault(_Refresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: (0, _history.createBrowserHistory)() },
    _react2.default.createElement(
      _reactRouter.Switch,
      null,
      _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Main2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/Refresh', component: _Refresh2.default })
    )
  );
};

exports.default = AppRouter;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.css");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(4);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(1);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(2);

var _SelectField = __webpack_require__(6);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(5);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(3);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    underlineStyle: {
        borderColor: _colors.green800
    },

    floatingLabelFocusStyle: {
        color: _colors.green800
    },

    customWidth: {
        width: '100%'
    }
};

var NewModal = function (_Component) {
    _inherits(NewModal, _Component);

    function NewModal(props, context) {
        _classCallCheck(this, NewModal);

        var _this = _possibleConstructorReturn(this, (NewModal.__proto__ || Object.getPrototypeOf(NewModal)).call(this, props, context));

        _this.handleChange = function () {
            _this.setState({ value: _this.state.value === 1 ? 2 : 1 });
        };

        _this.handleClose = function () {
            _this.setState({ open: false });
        };

        _this.handleSubmitButton = _this.handleSubmitButton.bind(_this);

        _this.state = {
            open: _this.props.open,
            value: 1,
            dob: ''
        };
        return _this;
    }

    _createClass(NewModal, [{
        key: 'setDate',
        value: function setDate(event, date) {
            var dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            var dobUTC = dateUTC.toISOString().slice(0, 10);
            this.setState({ dob: dobUTC });
        }
    }, {
        key: 'handleSubmitButton',
        value: function handleSubmitButton(event) {
            event.preventDefault();

            var firstnameValue = this.refs.firstnameField.getValue();
            var lastnameValue = this.refs.lastnameField.getValue();
            var sexValue = this.state.value === 1 ? 'Male' : 'Female';
            var dobValue = this.state.dob;
            var regnoValue = this.refs.regnoField.getValue();
            var classValue = this.refs.classField.getValue();

            var requestValue = 'firstname=' + firstnameValue + '&' + 'lastname=' + lastnameValue + '&' + 'sex=' + sexValue + '&' + 'dob=' + dobValue + '&' + 'regno=' + regnoValue + '&' + 'class=' + classValue;

            console.log(requestValue);

            this.props.handleSubmitButton(requestValue);
            this.setState({ open: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: 'Cancel',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: 'Submit',
                primary: true,
                disabled: false,
                onClick: this.handleSubmitButton
            })];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        title: 'Add New',
                        actions: actions,
                        modal: true,
                        open: this.state.open
                    },
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Firstname',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'firstnameField'
                    }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Lastname',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'lastnameField'
                    }),
                    _react2.default.createElement(
                        _SelectField2.default,
                        {
                            floatingLabelText: 'Sex',
                            value: this.state.value,
                            onChange: this.handleChange,
                            style: styles.customWidth
                        },
                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Male' }),
                        _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Female' })
                    ),
                    _react2.default.createElement(_DatePicker2.default, { textFieldStyle: styles.customWidth,
                        hintText: 'Date Of Birth',
                        onChange: function onChange(event, date) {
                            return _this2.setDate(event, date);
                        } }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Registration Number',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'regnoField'
                    }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Class',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'classField'
                    })
                )
            );
        }
    }]);

    return NewModal;
}(_react.Component);

exports.default = NewModal;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(23);

var _FlatButton = __webpack_require__(1);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
    marginLeft: 20,
    fontSize: '16px'
};

var CardItem = function (_Component) {
    _inherits(CardItem, _Component);

    function CardItem(props, context) {
        _classCallCheck(this, CardItem);

        var _this = _possibleConstructorReturn(this, (CardItem.__proto__ || Object.getPrototypeOf(CardItem)).call(this, props, context));

        _this.handleEditButton = _this.handleEditButton.bind(_this);
        _this.handleDeleteButton = _this.handleDeleteButton.bind(_this);

        _this.state = {

            _id: _this.props._id,
            regno: _this.props.regno,
            firstname: _this.props.firstname,
            lastname: _this.props.lastname,
            dob: _this.props.dob,
            sex: _this.props.sex,
            class: _this.props.class

        };
        return _this;
    }

    _createClass(CardItem, [{
        key: 'handleEditButton',
        value: function handleEditButton(event) {
            event.preventDefault();

            var _idValue = this.state._id;
            var firstnameValue = this.state.firstname;
            var lastnameValue = this.state.lastname;
            var sexValue = this.state.sex;
            var dobValue = this.state.dob;
            var regnoValue = this.state.regno;;
            var classValue = this.state.class;

            this.props.handleEditButton(_idValue, firstnameValue, lastnameValue, sexValue, dobValue, regnoValue, classValue);
        }
    }, {
        key: 'handleDeleteButton',
        value: function handleDeleteButton(event) {
            event.preventDefault();

            var _idValue = this.state._id;
            var firstnameValue = this.state.firstname;
            var lastnameValue = this.state.lastname;
            var sexValue = this.state.sex;
            var dobValue = this.state.dob;
            var regnoValue = this.state.regno;;
            var classValue = this.state.class;

            this.props.handleDeleteButton(_idValue, firstnameValue, lastnameValue, sexValue, dobValue, regnoValue, classValue);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Card.Card,
                null,
                _react2.default.createElement(_Card.CardTitle, { title: this.state.firstname + " " + this.state.lastname, subtitle: this.state.regno }),
                _react2.default.createElement(
                    'div',
                    { style: style },
                    _react2.default.createElement(
                        'p',
                        null,
                        this.state.sex,
                        ' ',
                        _react2.default.createElement('br', null),
                        this.state.dob,
                        ' ',
                        _react2.default.createElement('br', null),
                        this.state.class
                    )
                ),
                _react2.default.createElement(
                    _Card.CardActions,
                    null,
                    _react2.default.createElement(_FlatButton2.default, { label: 'Edit', onClick: this.handleEditButton }),
                    _react2.default.createElement(_FlatButton2.default, { label: 'Delete', onClick: this.handleDeleteButton })
                )
            );
        }
    }]);

    return CardItem;
}(_react.Component);

exports.default = CardItem;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(4);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(1);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(2);

var _SelectField = __webpack_require__(6);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(5);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(3);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    underlineStyle: {
        borderColor: _colors.green800
    },

    floatingLabelFocusStyle: {
        color: _colors.green800
    },

    customWidth: {
        width: '100%'
    }
};

var DeleteModal = function (_Component) {
    _inherits(DeleteModal, _Component);

    function DeleteModal(props, context) {
        _classCallCheck(this, DeleteModal);

        var _this = _possibleConstructorReturn(this, (DeleteModal.__proto__ || Object.getPrototypeOf(DeleteModal)).call(this, props, context));

        _this.handleClose = function () {
            _this.setState({ open: false });
        };

        _this.handleDeleteButton = _this.handleDeleteButton.bind(_this);

        _this.state = {
            open: _this.props.open,

            _id: _this.props._id,
            firstname: _this.props.firstname,
            lastname: _this.props.lastname,
            regno: _this.props.regno
        };
        return _this;
    }

    _createClass(DeleteModal, [{
        key: 'handleDeleteButton',
        value: function handleDeleteButton(event) {
            event.preventDefault();

            var _idValue = this.state._id;
            var firstnameValue = this.state.firstname;
            var lastnameValue = this.state.lastname;
            var regnoValue = this.state.regno;

            var deleteValue = '_idValue=' + _idValue + 'firstnameValue=' + firstnameValue + 'lastnameValue=' + lastnameValue + 'regnoValue=' + regnoValue;

            //console.log(deleteValue);

            this.props.handleDeleteButton(regnoValue);
            this.setState({ open: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: 'Cancel',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: 'Delete',
                primary: true,
                disabled: false,
                onClick: this.handleDeleteButton
            })];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        title: 'Delete',
                        actions: actions,
                        modal: true,
                        open: this.state.open
                    },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Are you sure you want to delete'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        this.state.firstname + " " + this.state.lastname
                    )
                )
            );
        }
    }]);

    return DeleteModal;
}(_react.Component);

exports.default = DeleteModal;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dialog = __webpack_require__(4);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(1);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(7);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(2);

var _SelectField = __webpack_require__(6);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(5);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(3);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    underlineStyle: {
        borderColor: _colors.green800
    },

    floatingLabelFocusStyle: {
        color: _colors.green800
    },

    customWidth: {
        width: '100%'
    }
};

var EditModal = function (_Component) {
    _inherits(EditModal, _Component);

    function EditModal(props, context) {
        _classCallCheck(this, EditModal);

        var _this = _possibleConstructorReturn(this, (EditModal.__proto__ || Object.getPrototypeOf(EditModal)).call(this, props, context));

        _this.handleChange = function () {
            _this.setState({ value: _this.state.value === 1 ? 2 : 1 });
        };

        _this.handleClose = function () {
            _this.setState({ open: false });
        };

        _this.handleSubmitButton = _this.handleSubmitButton.bind(_this);

        _this.state = {
            open: _this.props.open,

            value: _this.props.sex === 'Male' ? 1 : 2,
            _id: _this.props._id,
            firstname: _this.props.firstname,
            lastname: _this.props.lastname,
            sex: _this.props.sex,
            dob: _this.props.dob,
            regno: _this.props.regno,
            class: _this.props.class
        };
        return _this;
    }

    _createClass(EditModal, [{
        key: 'setDate',
        value: function setDate(event, date) {
            var dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            var dobUTC = dateUTC.toISOString().slice(0, 10);
            this.setState({ dob: dobUTC });
        }
    }, {
        key: 'handleSubmitButton',
        value: function handleSubmitButton(event) {
            event.preventDefault();

            var firstnameValue = this.refs.firstnameField.getValue();
            var lastnameValue = this.refs.lastnameField.getValue();
            var sexValue = this.state.value === 1 ? 'Male' : 'Female';
            var dobValue = this.state.dob;
            var regnoValue = this.refs.regnoField.getValue();
            var classValue = this.refs.classField.getValue();

            // const requestValue = 
            // '{ \n \"firstname\": \"'+firstnameValue+'\" \n'+
            // '\"lastname\": \"'+lastnameValue+'\" \n'+
            // '\"sex\": \"'+sexValue+'\" \n'+
            // '\"dob\": \"'+dobValue+'\" \n'+
            // '\"regno\": \"'+regnoValue+'\" \n'+
            // '\"class\": \"'+classValue+'\" \n }'

            var requestValue = { 'firstname': firstnameValue,
                'lastname': lastnameValue,
                'sex': sexValue,
                'dob': dobValue,
                'regno': regnoValue,
                'class': classValue };

            console.log(requestValue);

            this.props.handleSubmitButton(regnoValue, requestValue);
            this.setState({ open: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: 'Cancel',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: 'Submit',
                primary: true,
                disabled: false,
                onClick: this.handleSubmitButton
            })];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        title: 'Edit',
                        actions: actions,
                        modal: true,
                        open: this.state.open
                    },
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Firstname',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'firstnameField',
                        defaultValue: this.state.firstname
                    }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Lastname',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'lastnameField',
                        defaultValue: this.state.lastname
                    }),
                    _react2.default.createElement(
                        _SelectField2.default,
                        {
                            floatingLabelText: 'Sex',
                            value: this.state.value,
                            onChange: this.handleChange,
                            style: styles.customWidth
                        },
                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Male' }),
                        _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Female' })
                    ),
                    _react2.default.createElement(_DatePicker2.default, { textFieldStyle: styles.customWidth,
                        hintText: 'Date Of Birth',
                        defaultDate: new Date(this.state.dob),
                        onChange: function onChange(event, date) {
                            return _this2.setDate(event, date);
                        } }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Registration Number',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'regnoField',
                        defaultValue: this.state.regno
                    }),
                    _react2.default.createElement(_TextField2.default, { style: styles.customWidth,
                        floatingLabelText: 'Class',
                        underlineFocusStyle: styles.underlineStyle,
                        floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                        ref: 'classField',
                        defaultValue: this.state.class
                    })
                )
            );
        }
    }]);

    return EditModal;
}(_react.Component);

exports.default = EditModal;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _getMuiTheme = __webpack_require__(31);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(30);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _AppBar = __webpack_require__(22);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _GridList = __webpack_require__(26);

var _Subheader = __webpack_require__(29);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _FloatingActionButton = __webpack_require__(24);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = __webpack_require__(32);

var _add2 = _interopRequireDefault(_add);

var _Snackbar = __webpack_require__(28);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

var _CardItem = __webpack_require__(15);

var _CardItem2 = _interopRequireDefault(_CardItem);

var _Refresh = __webpack_require__(8);

var _Refresh2 = _interopRequireDefault(_Refresh);

var _AddModal = __webpack_require__(14);

var _AddModal2 = _interopRequireDefault(_AddModal);

var _EditModal = __webpack_require__(17);

var _EditModal2 = _interopRequireDefault(_EditModal);

var _DeleteModal = __webpack_require__(16);

var _DeleteModal2 = _interopRequireDefault(_DeleteModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {

    container: (_container = {
        display: '-webkit-flex'
    }, _defineProperty(_container, 'display', 'flex'), _defineProperty(_container, 'alignItems', 'center'), _defineProperty(_container, 'justifyContent', 'center'), _defineProperty(_container, 'backgroundColor', '#FAFAFA'), _defineProperty(_container, 'minHeight', '100vh'), _container),

    gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    }
};

var muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        primary1Color: _colors.green800,
        accent1Color: _colors.blue50
    }
});

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main(props, context) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, context));

        _this.handleAdd = function () {

            _this.setState({
                addmodal: {
                    show: true
                }
            }, function () {});
        };

        _this.handleRequestClose = function () {
            _this.setState({
                snackopen: false
            });
        };

        _this.handleSubmitAdd = _this.handleSubmitAdd.bind(_this);
        _this.handleSubmitEdit = _this.handleSubmitEdit.bind(_this);
        _this.handleSubmitDelete = _this.handleSubmitDelete.bind(_this);

        _this.handleEdit = _this.handleEdit.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);

        _this.state = {

            refreshIndicator: {
                show: false
            },

            addmodal: {
                show: false
            },

            editmodal: {
                show: false
            },

            deletemodal: {
                show: false
            },

            students: [],
            response: {
                _id: '',
                regno: '',
                firstname: '',
                lastname: '',
                dob: '',
                sex: '',
                class: ''
            },

            edit_id: '',
            editfirstname: '',
            editlastname: '',
            editsex: '',
            editdob: '',
            editregno: '',
            editclass: '',

            regno: '',

            autoHideDuration: 4000,
            message: 'Event added to your calendar',
            snackopen: false
        };
        return _this;
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadStudent();
        }
    }, {
        key: 'addStudent',
        value: function addStudent(requestValue) {
            var _this2 = this;

            this.toggleRefreshIndicator(true);
            _axios2.default.post('https://scrud-server.herokuapp.com/students?' + requestValue).then(function (response) {
                _this2.toggleRefreshIndicator(false);
                console.log("response", response);

                if (response.data != null) {

                    _this2.setState({
                        response: response.data,
                        snackopen: true,
                        message: response.data.firstname + ' ' + response.data.lastname + ' added sucessfully'
                    }, function () {});

                    _this2.loadStudent();
                } else {
                    _this2.setState({
                        snackopen: true,
                        message: 'Unable to add Student Resource'
                    }, function () {});
                }
            }).catch(function (error) {
                _this2.toggleRefreshIndicator(false);
                console.log(error);
                _this2.setState({
                    snackopen: true,
                    message: 'Unable to add Student Resource'
                }, function () {});
            });
        }
    }, {
        key: 'loadStudent',
        value: function loadStudent() {
            var _this3 = this;

            this.toggleRefreshIndicator(true);
            _axios2.default.get('https://scrud-server.herokuapp.com/students').then(function (response) {
                _this3.toggleRefreshIndicator(false);
                console.log("response", response);

                if (response.data != null) {

                    _this3.setState({
                        students: response.data,
                        snackopen: true,
                        message: 'Student Resource loaded sucessfully'
                    }, function () {});
                } else {
                    _this3.setState({
                        snackopen: true,
                        message: 'Unable to load Student Resource'
                    }, function () {});
                }
            }).catch(function (error) {
                _this3.toggleRefreshIndicator(false);
                console.log(error);
                _this3.setState({
                    snackopen: true,
                    message: 'Unable to load Student Resource'
                }, function () {});
            });
        }
    }, {
        key: 'editStudent',
        value: function editStudent(editRegNo, editValue) {
            var _this4 = this;

            this.toggleRefreshIndicator(true);
            _axios2.default.put('https://scrud-server.herokuapp.com/students/' + editRegNo, editValue).then(function (response) {
                _this4.toggleRefreshIndicator(false);
                console.log("response", response);

                if (response.data != null) {

                    _this4.setState({
                        response: response.data,
                        snackopen: true,
                        message: response.data.firstname + ' ' + response.data.lastname + ' edited sucessfully'
                    }, function () {});

                    _this4.loadStudent();
                } else {
                    _this4.setState({
                        snackopen: true,
                        message: 'Unable to edit Student Resource'
                    }, function () {});
                }
            }).catch(function (error) {
                _this4.toggleRefreshIndicator(false);
                console.log(error);
                _this4.setState({
                    snackopen: true,
                    message: 'Unable to edit Student Resource'
                }, function () {});
            });
        }
    }, {
        key: 'deleteStudent',
        value: function deleteStudent(deleteValue) {
            var _this5 = this;

            this.toggleRefreshIndicator(true);
            _axios2.default.delete('https://scrud-server.herokuapp.com/students/' + deleteValue).then(function (response) {
                _this5.toggleRefreshIndicator(false);
                console.log("response", response);

                if (response.data != null) {

                    _this5.setState({
                        snackopen: true,
                        message: 'Student Resource deleted sucessfully'
                    }, function () {});

                    _this5.loadStudent();
                } else {
                    _this5.setState({
                        snackopen: true,
                        message: 'Unable to delete Student Resource'
                    }, function () {});
                }
            }).catch(function (error) {
                _this5.toggleRefreshIndicator(false);
                console.log(error);
                _this5.setState({
                    snackopen: true,
                    message: 'Unable to delete Student Resource'
                }, function () {});
            });
        }
    }, {
        key: 'toggleRefreshIndicator',
        value: function toggleRefreshIndicator(state) {
            this.setState({
                refreshIndicator: {
                    show: state
                }
            }, function () {});
        }
    }, {
        key: 'handleSubmitAdd',
        value: function handleSubmitAdd(requestValue) {
            this.setState({
                addmodal: {
                    show: false
                }, function: function _function() {}
            });

            this.addStudent(requestValue);
        }
    }, {
        key: 'handleSubmitEdit',
        value: function handleSubmitEdit(editRegNo, editValue) {
            this.setState({
                editmodal: {
                    show: false
                }, function: function _function() {}
            });

            this.editStudent(editRegNo, editValue);
        }
    }, {
        key: 'handleSubmitDelete',
        value: function handleSubmitDelete(deleteValue) {
            this.setState({
                deletemodal: {
                    show: false
                }, function: function _function() {}
            });

            this.deleteStudent(deleteValue);
        }
    }, {
        key: 'handleEdit',
        value: function handleEdit(edit_id, editfirstname, editlastname, editsex, editdob, editregno, editclass) {
            this.setState({
                editmodal: {
                    show: true
                },

                edit_id: edit_id,
                editfirstname: editfirstname,
                editlastname: editlastname,
                editsex: editsex,
                editdob: editdob,
                editregno: editregno,
                editclass: editclass,

                function: function _function() {}
            });
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(edit_id, editfirstname, editlastname, editsex, editdob, editregno, editclass) {
            this.setState({
                deletemodal: {
                    show: true
                },

                edit_id: edit_id,
                editfirstname: editfirstname,
                editlastname: editlastname,
                editsex: editsex,
                editdob: editdob,
                editregno: editregno,
                editclass: editclass,

                function: function _function() {}
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: muiTheme },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_AppBar2.default, {
                        title: 'SCRUD',
                        ClassNameRight: 'miconuidocs-icon-navigation-expand-more'
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12', style: styles.container },
                        _react2.default.createElement(
                            _GridList.GridList,
                            {
                                cellHeight: 'auto',
                                cols: 4,
                                style: styles.gridList },
                            _react2.default.createElement(
                                _Subheader2.default,
                                null,
                                'Student Resource'
                            ),
                            this.state.students.map(function (student) {
                                return _react2.default.createElement(_CardItem2.default, { key: student._id,
                                    _id: student._id, regno: student.regno,
                                    firstname: student.firstname, lastname: student.lastname,
                                    dob: student.dob, sex: student.sex, 'class': student.class,
                                    handleEditButton: _this6.handleEdit,
                                    handleDeleteButton: _this6.handleDelete });
                            })
                        ),
                        _react2.default.createElement(
                            _FloatingActionButton2.default,
                            { onClick: this.handleAdd },
                            _react2.default.createElement(_add2.default, null)
                        )
                    ),
                    this.state.addmodal.show ? _react2.default.createElement(_AddModal2.default, { open: true, handleSubmitButton: this.handleSubmitAdd }) : '',
                    this.state.editmodal.show ? _react2.default.createElement(_EditModal2.default, { open: true,
                        _id: this.state.edit_id,
                        firstname: this.state.editfirstname,
                        lastname: this.state.editlastname,
                        sex: this.state.editsex,
                        dob: this.state.editdob,
                        regno: this.state.editregno,
                        'class': this.state.editclass,
                        handleSubmitButton: this.handleSubmitEdit }) : '',
                    this.state.deletemodal.show ? _react2.default.createElement(_DeleteModal2.default, { open: true,
                        _id: this.state.edit_id,
                        firstname: this.state.editfirstname,
                        lastname: this.state.editlastname,
                        regno: this.state.editregno,
                        handleDeleteButton: this.handleSubmitDelete }) : '',
                    this.state.refreshIndicator.show ? _react2.default.createElement(_Refresh2.default, null) : '',
                    _react2.default.createElement(_Snackbar2.default, {
                        open: this.state.snackopen,
                        message: this.state.message,
                        autoHideDuration: this.state.autoHideDuration,
                        onRequestClose: this.handleRequestClose
                    })
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactTapEventPlugin = __webpack_require__(13);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _bootstrap = __webpack_require__(11);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _Router = __webpack_require__(10);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Needed for onTouchTap
(0, _reactTapEventPlugin2.default)();

// Render the main app react component into the app div.
(0, _reactDom.render)(_react2.default.createElement(_Router2.default, null), document.getElementById('app'));

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FloatingActionButton");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FontIcon");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui/GridList");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RefreshIndicator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Subheader");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/add");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ })
/******/ ]);