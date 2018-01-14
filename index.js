import React from 'react';
import './index.css'

export default class HighlightText extends React.Component {
  varructor() {
    super();
    this.instance = null;
  }
  addSpan() {
    var {
      className,
      highlightTextClsName,
      text,
      keyword,
    } = this.props;
    var container = document.createElement('span');
    container.className = 'HighlightText_normal';
    var highlightTextCls = 'HighlightText_highlight';
    if (highlightTextClsName) {
      highlightTextCls = [highlightTextCls, highlightTextClsName].join(' ');
    }
    var spanHtml = text.replace(new RegExp(keyword, 'gi'), '<span class=' + highlightTextCls + '>$&</span>');
    container.innerHTML = spanHtml;
    this.instance.appendChild(container);
  }
  removeSpan() {
    var children = this.instance.childNodes;
    for (var i = 0; i < children.length; i++) {
      this.instance.removeChild(children[i]);
    }
  }
  componentDidMount() {
    this.addSpan();
  }
  componentWillUnmount() {
    this.removeSpan();
  }
  componentDidUpdate() {
    this.removeSpan();
    this.addSpan();
  }
  updateRef(ele) {
    this.instance = ele;
  }
  render() {
    return <div ref = { this.updateRef.bind(this) }
    />;
  }
}