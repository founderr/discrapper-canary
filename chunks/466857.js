"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  s = n("414456"),
  l = n.n(s),
  r = n("77078"),
  o = n("381546"),
  u = n("229915"),
  c = n("782340"),
  d = n("717386");
class f extends a.Component {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: a,
      inputClassName: s,
      className: f,
      onChange: p,
      onFocus: m,
      onBlur: h,
      onKeyPress: I,
      autoComplete: g,
      forwardedRef: v,
      closeIconClassName: C,
      searchIconClassName: y,
      cta: A
    } = this.props, T = null != a && a.length > 0, S = null != v ? v : this._textInputRef;
    return (0, i.jsx)(r.FocusRing, {
      focusTarget: S,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: l(d.searchBox, f),
        ref: this._containerRef,
        children: [(0, i.jsx)(r.TextInput, {
          inputRef: S,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: d.searchBoxInputWrapper,
          inputClassName: l(d.searchBoxInput, s),
          onChange: p,
          onFocus: m,
          onBlur: h,
          onKeyPress: I,
          value: T ? a : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: g ? "on" : "off"
        }), null != A ? (0, i.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: d.cta,
          children: A
        }) : null, T ? (0, i.jsx)(r.Clickable, {
          onClick: this.handleClear,
          className: d.clear,
          "aria-label": c.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(o.default, {
            className: l(d.clearIcon, C)
          })
        }) : (0, i.jsx)(u.default, {
          className: l(d.searchIcon, y),
          "aria-label": c.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this._textInputRef = a.createRef(), this._containerRef = a.createRef(), this.handleClear = () => {
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
var p = a.forwardRef((e, t) => (0, i.jsx)(f, {
  forwardedRef: t,
  ...e
}))