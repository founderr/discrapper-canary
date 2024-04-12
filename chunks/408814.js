"use strict";
n.r(t), n("47120");
var s, i = n("735250"),
  a = n("470079"),
  l = n("803997"),
  r = n.n(l),
  u = n("481060"),
  o = n("696202"),
  c = n("664800"),
  d = n("689938"),
  f = n("782613");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(s = a.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: s,
      inputClassName: a,
      className: l,
      onChange: p,
      onFocus: h,
      onBlur: I,
      onKeyPress: _,
      autoComplete: m,
      forwardedRef: v,
      closeIconClassName: A,
      searchIconClassName: T,
      cta: C
    } = this.props, g = null != s && s.length > 0, E = null != v ? v : this._textInputRef;
    return (0, i.jsx)(u.FocusRing, {
      focusTarget: E,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: r()(f.searchBox, l),
        ref: this._containerRef,
        children: [(0, i.jsx)(u.TextInput, {
          inputRef: E,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: f.searchBoxInputWrapper,
          inputClassName: r()(f.searchBoxInput, a),
          onChange: p,
          onFocus: h,
          onBlur: I,
          onKeyPress: _,
          value: g ? s : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: m ? "on" : "off"
        }), null != C ? (0, i.jsx)(u.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.cta,
          children: C
        }) : null, g ? (0, i.jsx)(u.Clickable, {
          onClick: this.handleClear,
          className: f.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(o.default, {
            className: r()(f.clearIcon, A)
          })
        }) : (0, i.jsx)(c.default, {
          className: r()(f.searchIcon, T),
          "aria-label": d.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "_textInputRef", a.createRef()), p(this, "_containerRef", a.createRef()), p(this, "handleClear", () => {
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
}), t.default = a.forwardRef((e, t) => (0, i.jsx)(h, {
  forwardedRef: t,
  ...e
}))