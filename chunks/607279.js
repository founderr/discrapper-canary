"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(689938),
  _ = n(572791);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends(i = s.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: i,
      inputClassName: s,
      className: o,
      onChange: c,
      onFocus: d,
      onBlur: E,
      onKeyPress: I,
      autoComplete: T,
      forwardedRef: h,
      closeIconClassName: S,
      searchIconClassName: f,
      cta: N
    } = this.props, A = null != i && i.length > 0, m = null != h ? h : this._textInputRef;
    return (0, r.jsx)(l.FocusRing, {
      focusTarget: m,
      ringTarget: this._containerRef,
      children: (0, r.jsxs)("div", {
        className: a()(_.searchBox, o),
        ref: this._containerRef,
        children: [(0, r.jsx)(l.TextInput, {
          inputRef: m,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: _.searchBoxInputWrapper,
          inputClassName: a()(_.searchBoxInput, s),
          onChange: c,
          onFocus: d,
          onBlur: E,
          onKeyPress: I,
          value: A ? i : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: T ? "on" : "off"
        }), null != N ? (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: _.cta,
          children: N
        }) : null, A ? (0, r.jsx)(l.Clickable, {
          onClick: this.handleClear,
          className: _.clear,
          "aria-label": u.Z.Messages.SEARCH_CLEAR,
          children: (0, r.jsx)(l.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: a()(_.clearIcon, S)
          })
        }) : (0, r.jsx)(l.MagnifyingGlassIcon, {
          size: "md",
          color: "currentColor",
          className: a()(_.searchIcon, f),
          "aria-label": u.Z.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "_textInputRef", s.createRef()), c(this, "_containerRef", s.createRef()), c(this, "handleClear", () => {
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
c(d, "defaultProps", {
  autoComplete: !1
}), t.Z = s.forwardRef((e, t) => (0, r.jsx)(d, {
  forwardedRef: t,
  ...e
}))