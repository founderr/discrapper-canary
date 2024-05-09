"use strict";
a.r(t), a("47120");
var l, n = a("735250"),
  s = a("470079"),
  i = a("120356"),
  r = a.n(i),
  c = a("481060"),
  u = a("696202"),
  o = a("664800"),
  d = a("689938"),
  m = a("273681");

function g(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class p extends(l = s.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: a,
      searchTerm: l,
      inputClassName: s,
      className: i,
      onChange: g,
      onFocus: p,
      onBlur: _,
      onKeyPress: f,
      autoComplete: h,
      forwardedRef: C,
      closeIconClassName: R,
      searchIconClassName: I,
      cta: x
    } = this.props, A = null != l && l.length > 0, T = null != C ? C : this._textInputRef;
    return (0, n.jsx)(c.FocusRing, {
      focusTarget: T,
      ringTarget: this._containerRef,
      children: (0, n.jsxs)("div", {
        className: r()(m.searchBox, i),
        ref: this._containerRef,
        children: [(0, n.jsx)(c.TextInput, {
          inputRef: T,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: m.searchBoxInputWrapper,
          inputClassName: r()(m.searchBoxInput, s),
          onChange: g,
          onFocus: p,
          onBlur: _,
          onKeyPress: f,
          value: A ? l : "",
          placeholder: a,
          autoFocus: e,
          "aria-label": t,
          autoComplete: h ? "on" : "off"
        }), null != x ? (0, n.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: m.cta,
          children: x
        }) : null, A ? (0, n.jsx)(c.Clickable, {
          onClick: this.handleClear,
          className: m.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, n.jsx)(u.default, {
            className: r()(m.clearIcon, R)
          })
        }) : (0, n.jsx)(o.default, {
          className: r()(m.searchIcon, I),
          "aria-label": d.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "_textInputRef", s.createRef()), g(this, "_containerRef", s.createRef()), g(this, "handleClear", () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: a
      } = null != t ? t : this._textInputRef;
      null != a && a.focus(), null != e && e()
    })
  }
}
g(p, "defaultProps", {
  autoComplete: !1
}), t.default = s.forwardRef((e, t) => (0, n.jsx)(p, {
  forwardedRef: t,
  ...e
}))