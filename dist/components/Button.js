"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  const {
    label = '',
    className = '',
    type = 'button',
    disabled = false,
    onClick
  } = props;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: className,
    type: type,
    disabled: disabled,
    onClick: onClick
  }, label);
};

var _default = Button;
exports.default = _default;