"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
}), a("222007");
var n = a("37983"),
  i = a("884691"),
  l = a("414456"),
  s = a.n(l),
  r = a("77078"),
  u = a("381546"),
  o = a("229915"),
  d = a("782340"),
  c = a("913893");
class f extends i.Component {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: a,
      searchTerm: i,
      inputClassName: l,
      className: f,
      onChange: p,
      onFocus: m,
      onBlur: h,
      onKeyPress: I,
      autoComplete: E,
      forwardedRef: v,
      closeIconClassName: C,
      searchIconClassName: A,
      cta: g
    } = this.props, T = null != i && i.length > 0, R = null != v ? v : this._textInputRef;
    return (0, n.jsx)(r.FocusRing, {
      focusTarget: R,
      ringTarget: this._containerRef,
      children: (0, n.jsxs)("div", {
        className: s(c.searchBox, f),
        ref: this._containerRef,
        children: [(0, n.jsx)(r.TextInput, {
          inputRef: R,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: c.searchBoxInputWrapper,
          inputClassName: s(c.searchBoxInput, l),
          onChange: p,
          onFocus: m,
          onBlur: h,
          onKeyPress: I,
          value: T ? i : "",
          placeholder: a,
          autoFocus: e,
          "aria-label": t,
          autoComplete: E ? "on" : "off"
        }), null != g ? (0, n.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: c.cta,
          children: g
        }) : null, T ? (0, n.jsx)(r.Clickable, {
          onClick: this.handleClear,
          className: c.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, n.jsx)(u.default, {
            className: s(c.clearIcon, C)
          })
        }) : (0, n.jsx)(o.default, {
          className: s(c.searchIcon, A),
          "aria-label": d.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this._textInputRef = i.createRef(), this._containerRef = i.createRef(), this.handleClear = () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: a
      } = null != t ? t : this._textInputRef;
      null != a && a.focus(), null != e && e()
    }
  }
}
f.defaultProps = {
  autoComplete: !1
};
var p = i.forwardRef((e, t) => (0, n.jsx)(f, {
  forwardedRef: t,
  ...e
}))