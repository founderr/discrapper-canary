"use strict";
s.r(t);
var l, a = s("735250"),
  n = s("470079"),
  r = s("120356"),
  o = s.n(r),
  i = s("846519"),
  d = s("481060"),
  u = s("581874"),
  c = s("572004"),
  f = s("689938"),
  C = s("932207");

function m(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class h extends(l = n.PureComponent) {
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
    } = this.state, i = r === u.default.Modes.SUCCESS ? f.default.Messages.COPIED : s;
    return e ? (0, a.jsxs)("div", {
      className: o()(l, r),
      children: [(0, a.jsx)(d.TextInput, {
        value: t,
        inputClassName: n
      }), (0, a.jsx)(d.Button, {
        className: C.button,
        onClick: this.handleCopy,
        size: d.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(r),
        look: d.Button.Looks.FILLED,
        children: i
      })]
    }) : (0, a.jsx)(u.default, {
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
      mode: l ? u.default.Modes.SUCCESS : u.default.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: u.default.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case u.default.Modes.SUCCESS:
        return d.Button.Colors.GREEN;
      case u.default.Modes.ERROR:
        return d.Button.Colors.RED;
      default:
        return d.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), m(this, "_timeout", void 0), this.state = {
      mode: u.default.Modes.DEFAULT
    }, this._timeout = new i.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
m(h, "defaultProps", {
  isVertical: !1,
  delay: 300
}), t.default = h