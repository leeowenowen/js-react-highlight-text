import React from 'react';

export default class HighlightText extends React.Component {
  constructor() {
    super();
    this.instance = null;
  }
  addSpan() {
    var {
      normalTextClsName,
      highlightTextClsName,
      text,
      keyword,
      ignoreCase,
      highlightAllMatch,
    } = this.props;
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
    return (<span ref = { this.updateRef.bind(this) } />);
  }
}