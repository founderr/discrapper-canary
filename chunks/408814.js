"use strict";
n.r(t), n("47120");
var s, i = n("735250"),
  l = n("470079"),
  r = n("120356"),
  a = n.n(r),
  u = n("481060"),
  o = n("696202"),
  c = n("664800"),
  d = n("689938"),
  f = n("273681");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends(s = l.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: s,
      inputClassName: l,
      className: r,
      onChange: p,
      onFocus: I,
      onBlur: h,
      onKeyPress: m,
      autoComplete: C,
      forwardedRef: _,
      closeIconClassName: g,
      searchIconClassName: v,
      cta: A
    } = this.props, R = null != s && s.length > 0, x = null != _ ? _ : this._textInputRef;
    return (0, i.jsx)(u.FocusRing, {
      focusTarget: x,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: a()(f.searchBox, r),
        ref: this._containerRef,
        children: [(0, i.jsx)(u.TextInput, {
          inputRef: x,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: f.searchBoxInputWrapper,
          inputClassName: a()(f.searchBoxInput, l),
          onChange: p,
          onFocus: I,
          onBlur: h,
          onKeyPress: m,
          value: R ? s : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: C ? "on" : "off"
        }), null != A ? (0, i.jsx)(u.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: f.cta,
          children: A
        }) : null, R ? (0, i.jsx)(u.Clickable, {
          onClick: this.handleClear,
          className: f.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(o.default, {
            className: a()(f.clearIcon, g)
          })
        }) : (0, i.jsx)(c.default, {
          className: a()(f.searchIcon, v),
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
p(I, "defaultProps", {
  autoComplete: !1
}), t.default = l.forwardRef((e, t) => (0, i.jsx)(I, {
  forwardedRef: t,
  ...e
}))