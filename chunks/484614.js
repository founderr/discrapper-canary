var n, l = t(735250),
  a = t(470079),
  o = t(120356),
  r = t.n(o),
  i = t(846519),
  d = t(481060),
  u = t(572004),
  c = t(689938),
  E = t(87390);

function C(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class m extends(n = a.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: s,
      text: t,
      className: n,
      inputClassName: a
    } = this.props, {
      mode: o
    } = this.state, i = o === d.CopyInput.Modes.SUCCESS ? c.Z.Messages.COPIED : t;
    return e ? (0, l.jsxs)("div", {
      className: r()(n, o),
      children: [(0, l.jsx)(d.TextInput, {
        value: s,
        inputClassName: a
      }), (0, l.jsx)(d.Button, {
        className: E.button,
        onClick: this.handleCopy,
        size: d.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(o),
        look: d.Button.Looks.FILLED,
        children: i
      })]
    }) : (0, l.jsx)(d.CopyInput, {
      ...this.props,
      onCopy: this.handleCopy,
      mode: o,
      text: i
    })
  }
  handleCopy() {
    let {
      onCopy: e,
      value: s,
      delay: t
    } = this.props, n = (0, u.JG)(s);
    this.setState({
      mode: n ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR
    }), this._timeout.start(t, () => this.setState({
      mode: d.CopyInput.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case d.CopyInput.Modes.SUCCESS:
        return d.Button.Colors.GREEN;
      case d.CopyInput.Modes.ERROR:
        return d.Button.Colors.RED;
      default:
        return d.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), C(this, "_timeout", void 0), this.state = {
      mode: d.CopyInput.Modes.DEFAULT
    }, this._timeout = new i.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
C(m, "defaultProps", {
  isVertical: !1,
  delay: 300
}), s.Z = m