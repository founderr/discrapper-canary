"use strict";
n.r(t), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  a = n("120356"),
  o = n.n(a),
  l = n("481060"),
  u = n("696202"),
  d = n("664800"),
  _ = n("689938"),
  c = n("318096");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends(i = s.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: i,
      inputClassName: s,
      className: a,
      onChange: E,
      onFocus: I,
      onBlur: T,
      onKeyPress: f,
      autoComplete: S,
      forwardedRef: h,
      closeIconClassName: A,
      searchIconClassName: m,
      cta: N
    } = this.props, p = null != i && i.length > 0, O = null != h ? h : this._textInputRef;
    return (0, r.jsx)(l.FocusRing, {
      focusTarget: O,
      ringTarget: this._containerRef,
      children: (0, r.jsxs)("div", {
        className: o()(c.searchBox, a),
        ref: this._containerRef,
        children: [(0, r.jsx)(l.TextInput, {
          inputRef: O,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: c.searchBoxInputWrapper,
          inputClassName: o()(c.searchBoxInput, s),
          onChange: E,
          onFocus: I,
          onBlur: T,
          onKeyPress: f,
          value: p ? i : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: S ? "on" : "off"
        }), null != N ? (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: c.cta,
          children: N
        }) : null, p ? (0, r.jsx)(l.Clickable, {
          onClick: this.handleClear,
          className: c.clear,
          "aria-label": _.default.Messages.SEARCH_CLEAR,
          children: (0, r.jsx)(u.default, {
            className: o()(c.clearIcon, A)
          })
        }) : (0, r.jsx)(d.default, {
          className: o()(c.searchIcon, m),
          "aria-label": _.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "_textInputRef", s.createRef()), E(this, "_containerRef", s.createRef()), E(this, "handleClear", () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: n
      } = null != t ? t : this._textInputRef;
      null != n && n.focus(), null != e && e()
    })
  }
}
E(I, "defaultProps", {
  autoComplete: !1
}), t.default = s.forwardRef((e, t) => (0, r.jsx)(I, {
  forwardedRef: t,
  ...e
}))