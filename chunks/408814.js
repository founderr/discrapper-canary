"use strict";
n.r(t), n("47120");
var i, s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  r = n.n(a),
  o = n("481060"),
  u = n("696202"),
  c = n("664800"),
  d = n("689938"),
  f = n("120232");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(i = l.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: i,
      inputClassName: l,
      className: a,
      onChange: p,
      onFocus: h,
      onBlur: _,
      onKeyPress: m,
      autoComplete: I,
      forwardedRef: v,
      closeIconClassName: g,
      searchIconClassName: T,
      cta: C
    } = this.props, A = null != i && i.length > 0, N = null != v ? v : this._textInputRef;
    return (0, s.jsx)(o.FocusRing, {
      focusTarget: N,
      ringTarget: this._containerRef,
      children: (0, s.jsxs)("div", {
        className: r()(f.searchBox, a),
        ref: this._containerRef,
        children: [(0, s.jsx)(o.TextInput, {
          inputRef: N,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: f.searchBoxInputWrapper,
          inputClassName: r()(f.searchBoxInput, l),
          onChange: p,
          onFocus: h,
          onBlur: _,
          onKeyPress: m,
          value: A ? i : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: I ? "on" : "off"
        }), null != C ? (0, s.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.cta,
          children: C
        }) : null, A ? (0, s.jsx)(o.Clickable, {
          onClick: this.handleClear,
          className: f.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, s.jsx)(u.default, {
            className: r()(f.clearIcon, g)
          })
        }) : (0, s.jsx)(c.default, {
          className: r()(f.searchIcon, T),
          "aria-label": d.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "_textInputRef", l.createRef()), p(this, "_containerRef", l.createRef()), p(this, "handleClear", () => {
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
p(h, "defaultProps", {
  autoComplete: !1
}), t.default = l.forwardRef((e, t) => (0, s.jsx)(h, {
  forwardedRef: t,
  ...e
}))