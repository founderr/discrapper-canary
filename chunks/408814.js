"use strict";
n.r(t), n("47120");
var s, i = n("735250"),
  l = n("470079"),
  a = n("803997"),
  r = n.n(a),
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
class h extends(s = l.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: s,
      inputClassName: l,
      className: a,
      onChange: p,
      onFocus: h,
      onBlur: I,
      onKeyPress: _,
      autoComplete: v,
      forwardedRef: m,
      closeIconClassName: C,
      searchIconClassName: g,
      cta: T
    } = this.props, A = null != s && s.length > 0, E = null != m ? m : this._textInputRef;
    return (0, i.jsx)(u.FocusRing, {
      focusTarget: E,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: r()(f.searchBox, a),
        ref: this._containerRef,
        children: [(0, i.jsx)(u.TextInput, {
          inputRef: E,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: f.searchBoxInputWrapper,
          inputClassName: r()(f.searchBoxInput, l),
          onChange: p,
          onFocus: h,
          onBlur: I,
          onKeyPress: _,
          value: A ? s : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: v ? "on" : "off"
        }), null != T ? (0, i.jsx)(u.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.cta,
          children: T
        }) : null, A ? (0, i.jsx)(u.Clickable, {
          onClick: this.handleClear,
          className: f.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(o.default, {
            className: r()(f.clearIcon, C)
          })
        }) : (0, i.jsx)(c.default, {
          className: r()(f.searchIcon, g),
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
}), t.default = l.forwardRef((e, t) => (0, i.jsx)(h, {
  forwardedRef: t,
  ...e
}))