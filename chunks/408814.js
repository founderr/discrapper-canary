"use strict";
n.r(t), n("47120");
var s, i = n("735250"),
  l = n("470079"),
  r = n("120356"),
  a = n.n(r),
  o = n("481060"),
  u = n("696202"),
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
      className: r,
      onChange: p,
      onFocus: h,
      onBlur: v,
      onKeyPress: m,
      autoComplete: I,
      forwardedRef: _,
      closeIconClassName: g,
      searchIconClassName: C,
      cta: T
    } = this.props, A = null != s && s.length > 0, N = null != _ ? _ : this._textInputRef;
    return (0, i.jsx)(o.FocusRing, {
      focusTarget: N,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: a()(f.searchBox, r),
        ref: this._containerRef,
        children: [(0, i.jsx)(o.TextInput, {
          inputRef: N,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: f.searchBoxInputWrapper,
          inputClassName: a()(f.searchBoxInput, l),
          onChange: p,
          onFocus: h,
          onBlur: v,
          onKeyPress: m,
          value: A ? s : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: I ? "on" : "off"
        }), null != T ? (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.cta,
          children: T
        }) : null, A ? (0, i.jsx)(o.Clickable, {
          onClick: this.handleClear,
          className: f.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(u.default, {
            className: a()(f.clearIcon, g)
          })
        }) : (0, i.jsx)(c.default, {
          className: a()(f.searchIcon, C),
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