"use strict";
s.r(t);
var l, n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  o = s.n(r),
  i = s("846519"),
  u = s("481060"),
  d = s("581874"),
  c = s("572004"),
  f = s("689938"),
  C = s("124444");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class R extends(l = a.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: t,
      text: s,
      className: l,
      inputClassName: a
    } = this.props, {
      mode: r
    } = this.state, i = r === d.default.Modes.SUCCESS ? f.default.Messages.COPIED : s;
    return e ? (0, n.jsxs)("div", {
      className: o()(l, r),
      children: [(0, n.jsx)(u.TextInput, {
        value: t,
        inputClassName: a
      }), (0, n.jsx)(u.Button, {
        className: C.button,
        onClick: this.handleCopy,
        size: u.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(r),
        look: u.Button.Looks.FILLED,
        children: i
      })]
    }) : (0, n.jsx)(d.default, {
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
    } = this.props, l = (0, c.copy)(t);
    this.setState({
      mode: l ? d.default.Modes.SUCCESS : d.default.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: d.default.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case d.default.Modes.SUCCESS:
        return u.Button.Colors.GREEN;
      case d.default.Modes.ERROR:
        return u.Button.Colors.RED;
      default:
        return u.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), h(this, "_timeout", void 0), this.state = {
      mode: d.default.Modes.DEFAULT
    }, this._timeout = new i.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
h(R, "defaultProps", {
  isVertical: !1,
  delay: 300
}), t.default = R