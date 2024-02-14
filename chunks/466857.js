"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  u = n("381546"),
  o = n("229915"),
  c = n("782340"),
  d = n("717386");
class f extends i.Component {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: i,
      inputClassName: r,
      className: f,
      onChange: h,
      onFocus: p,
      onBlur: v,
      onKeyPress: I,
      autoComplete: C,
      forwardedRef: m,
      closeIconClassName: A,
      searchIconClassName: E,
      cta: g
    } = this.props, T = null != i && i.length > 0, N = null != m ? m : this._textInputRef;
    return (0, s.jsx)(a.FocusRing, {
      focusTarget: N,
      ringTarget: this._containerRef,
      children: (0, s.jsxs)("div", {
        className: l(d.searchBox, f),
        ref: this._containerRef,
        children: [(0, s.jsx)(a.TextInput, {
          inputRef: N,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: d.searchBoxInputWrapper,
          inputClassName: l(d.searchBoxInput, r),
          onChange: h,
          onFocus: p,
          onBlur: v,
          onKeyPress: I,
          value: T ? i : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: C ? "on" : "off"
        }), null != g ? (0, s.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: d.cta,
          children: g
        }) : null, T ? (0, s.jsx)(a.Clickable, {
          onClick: this.handleClear,
          className: d.clear,
          "aria-label": c.default.Messages.SEARCH_CLEAR,
          children: (0, s.jsx)(u.default, {
            className: l(d.clearIcon, A)
          })
        }) : (0, s.jsx)(o.default, {
          className: l(d.searchIcon, E),
          "aria-label": c.default.Messages.SEARCH
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
        current: n
      } = null != t ? t : this._textInputRef;
      null != n && n.focus(), null != e && e()
    }
  }
}
f.defaultProps = {
  autoComplete: !1
};
var h = i.forwardRef((e, t) => (0, s.jsx)(f, {
  forwardedRef: t,
  ...e
}))