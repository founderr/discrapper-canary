t(47120), t(757143);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(218872);

function r(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let o = /[^0-9]/g;
class c extends i.PureComponent {
  componentDidUpdate(e) {
    let s = this._inputRef;
    e.value !== this.props.value && null != s && s.setSelectionRange(this.selectionStart, this.selectionStart)
  }
  render() {
    return (0, n.jsx)(a.TextInput, {
      ...this.props,
      inputMode: "numeric",
      onChange: this.handleChange,
      inputRef: this.setRef
    })
  }
  constructor(...e) {
    super(...e), r(this, "_inputRef", void 0), r(this, "selectionStart", 0), r(this, "setRef", e => {
      let {
        inputRef: s
      } = this.props;
      this._inputRef = e, null != s && s(e)
    }), r(this, "handleChange", (e, s) => {
      let {
        value: t,
        onChange: n
      } = this.props, i = this._inputRef;
      if (e === t || null == i || null == t) return;
      let a = (0, l.M)(e),
        r = i.selectionStart;
      a === t && a.length <= 3 && t.includes("/") && !e.includes("/") ? a = a.replace(o, "") : a === t && e.includes("/") && !t.includes("/") && (a += "/"), a.length > e.length && (r += a.length - e.length), this.selectionStart = r, null != n && n(a, s)
    })
  }
}
s.Z = c