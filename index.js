import React from 'react';
import './index.css'

export default class HighlightText extends React.Component {
  constructor() {
    super();
    this.instance = null;
  }
  addSpan() {
    const {
      className,
      highlightTextClsName,
      text,
      keyword,
    } = this.props;
    const container = document.createElement('span');
    container.className = 'HighlightText_normal';
    let highlightTextCls = 'HighlightText_highlight';
    if (highlightTextClsName) {
      highlightTextCls = [highlightTextCls, highlightTextClsName].join(' ');
    }
    const spanHtml = text.replace(new RegExp(keyword, 'gi'), `<span class=${highlightTextCls}>$&</span>`);
    container.innerHTML = spanHtml;
    this.instance.appendChild(container);
  }
  removeSpan() {
    const children = this.instance.childNodes;
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
  render() {
    return <div ref = {
      el => (this.instance = el)
    }
    />;
  }
}