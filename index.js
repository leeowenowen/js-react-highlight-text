'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HighlightText = function (_React$Component) {
  _inherits(HighlightText, _React$Component);

  function HighlightText() {
    _classCallCheck(this, HighlightText);

    var _this = _possibleConstructorReturn(this, (HighlightText.__proto__ || Object.getPrototypeOf(HighlightText)).call(this));

    _this.instance = null;
    return _this;
  }

  _createClass(HighlightText, [{
    key: 'addSpan',
    value: function addSpan() {
      var _props = this.props,
          normalTextClsName = _props.normalTextClsName,
          highlightTextClsName = _props.highlightTextClsName,
          text = _props.text,
          keyword = _props.keyword,
          ignoreCase = _props.ignoreCase,
          highlightAllMatch = _props.highlightAllMatch;

      var container = document.createElement('span');
      container.className = 'HighlightText_normal';
      if (normalTextClsName) {
        container.className = normalTextClsName;
      }
      var highlightTextCls = 'HighlightText_highlight';
      if (highlightTextClsName) {
        highlightTextCls = highlightTextClsName;
      }
      var params = '';
      if (ignoreCase) {
        params = params + 'i';
      }
      if (highlightAllMatch) {
        params = params + 'g';
      }
      var spanHtml = text.replace(new RegExp(keyword, params), '<span class=' + highlightTextCls + '>$&</span>');
      container.innerHTML = spanHtml;
      this.instance.appendChild(container);
    }
  }, {
    key: 'removeSpan',
    value: function removeSpan() {
      var children = this.instance.childNodes;
      for (var i = 0; i < children.length; i++) {
        this.instance.removeChild(children[i]);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addSpan();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeSpan();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.removeSpan();
      this.addSpan();
    }
  }, {
    key: 'updateRef',
    value: function updateRef(ele) {
      this.instance = ele;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { ref: this.updateRef.bind(this) });
    }
  }]);

  return HighlightText;
}(_react2.default.Component);

exports.default = HighlightText;
