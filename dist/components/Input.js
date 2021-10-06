"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = props => {
  const {
    name,
    label = '',
    onChange,
    value = '',
    onBlur,
    type = 'text',
    disabled = false,
    placeholder = '',
    required = false,
    className = ""
  } = props;
  return /*#__PURE__*/_react.default.createElement("label", null, label && /*#__PURE__*/_react.default.createElement("span", null, label), /*#__PURE__*/_react.default.createElement("input", {
    className: className,
    placeholder: placeholder,
    onChange: onChange,
    onBlur: onBlur,
    required: required,
    name: name,
    type: type,
    value: value,
    disabled: disabled
  }));
};

var _default = Input;
exports.default = _default;