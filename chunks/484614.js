"use strict";
s.r(t);
var l, a = s("735250"),
  n = s("470079"),
  r = s("120356"),
  o = s.n(r),
  i = s("846519"),
  u = s("481060"),
  d = s("572004"),
  c = s("689938"),
  C = s("124444");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class m extends(l = n.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: t,
      text: s,
      className: l,
      inputClassName: n
    } = this.props, {
      mode: r
    } = this.state, i = r === u.CopyInput.Modes.SUCCESS ? c.default.Messages.COPIED : s;
    return e ? (0, a.jsxs)("div", {
      className: o()(l, r),
      children: [(0, a.jsx)(u.TextInput, {
        value: t,
        inputClassName: n
      }), (0, a.jsx)(u.Button, {
        className: C.button,
        onClick: this.handleCopy,
        size: u.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(r),
        look: u.Button.Looks.FILLED,
        children: i
      })]
    }) : (0, a.jsx)(u.CopyInput, {
      ...this.props,
      onCopy: this.handleCopy,
      mode: r,
      text: i
    })
  }
  handleCopy() {
    let {
      onCopy: e,
      value: t,
      delay: s
    } = this.props, l = (0, d.copy)(t);
    this.setState({
      mode: l ? u.CopyInput.Modes.SUCCESS : u.CopyInput.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: u.CopyInput.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case u.CopyInput.Modes.SUCCESS:
        return u.Button.Colors.GREEN;
      case u.CopyInput.Modes.ERROR:
        return u.Button.Colors.RED;
      default:
        return u.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), f(this, "_timeout", void 0), this.state = {
      mode: u.CopyInput.Modes.DEFAULT
    }, this._timeout = new i.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
f(m, "defaultProps", {
  isVertical: !1,
  delay: 300
}), t.default = m