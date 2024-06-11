"use strict";
s.r(t), s("47120"), s("757143");
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  l = s("218872");

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let o = /[^0-9]/g;
class d extends n.PureComponent {
  componentDidUpdate(e) {
    let t = this._inputRef;
    e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart)
  }
  render() {
    return (0, a.jsx)(i.TextInput, {
      ...this.props,
      inputMode: "numeric",
      onChange: this.handleChange,
      inputRef: this.setRef
    })
  }
  constructor(...e) {
    super(...e), r(this, "_inputRef", void 0), r(this, "selectionStart", 0), r(this, "setRef", e => {
      let {
        inputRef: t
      } = this.props;
      this._inputRef = e, null != t && t(e)
    }), r(this, "handleChange", (e, t) => {
      let {
        value: s,
        onChange: a
      } = this.props, n = this._inputRef;
      if (e === s || null == n || null == s) return;
      let i = (0, l.formatExpiration)(e),
        r = n.selectionStart;
      i === s && i.length <= 3 && s.includes("/") && !e.includes("/") ? i = i.replace(o, "") : i === s && e.includes("/") && !s.includes("/") && (i += "/"), i.length > e.length && (r += i.length - e.length), this.selectionStart = r, null != a && a(i, t)
    })
  }
}
t.default = d