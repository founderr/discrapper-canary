"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("718776"),
  u = n("242670"),
  c = n("945330"),
  d = n("229915"),
  p = n("782340"),
  h = n("706381");
let f = Object.freeze({
    SMALL: h.small,
    MEDIUM: h.medium,
    LARGE: h.large
  }),
  E = e => {
    let {
      hasContent: t,
      onClear: n,
      className: s,
      isLoading: l,
      size: E = f.SMALL
    } = e;
    return (0, i.jsx)(o.Clickable, {
      className: a(s, h.iconLayout, E, {
        [h.pointer]: t
      }),
      onClick: e => {
        e.stopPropagation(), null != n && n(e)
      },
      tabIndex: t ? 0 : -1,
      "aria-hidden": !t,
      onMouseDown: e => {
        e.preventDefault(), e.stopPropagation()
      },
      children: (0, i.jsx)("div", {
        className: h.iconContainer,
        children: l ? (0, i.jsx)(u.Spinner, {
          type: u.Spinner.Type.SPINNING_CIRCLE,
          className: a(h.icon, h.visible)
        }) : (0, i.jsxs)(r.Fragment, {
          children: [(0, i.jsx)(d.default, {
            className: a(h.icon, {
              [h.visible]: !t
            }),
            "aria-label": p.default.Messages.SEARCH
          }), (0, i.jsx)(c.default, {
            className: a(h.clear, {
              [h.visible]: t
            }),
            "aria-label": p.default.Messages.CLEAR
          })]
        })
      })
    })
  };
E.Sizes = f;
class _ extends r.PureComponent {
  focus() {
    let {
      current: e
    } = this.inputRef;
    null == e || e.focus()
  }
  blur() {
    let {
      current: e
    } = this.inputRef;
    null == e || e.blur()
  }
  render() {
    let {
      query: e,
      autoFocus: t,
      onClear: n,
      className: r,
      placeholder: s = p.default.Messages.SEARCH,
      iconClassName: o,
      onKeyDown: u,
      onKeyUp: c,
      onKeyPress: d,
      isLoading: f,
      size: _,
      disabled: m,
      onChange: S,
      onBlur: g,
      onFocus: T,
      autoComplete: I,
      inputProps: v,
      hideSearchIcon: C,
      "aria-label": A = p.default.Messages.SEARCH,
      ...R
    } = this.props;
    return (0, i.jsx)(l.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, i.jsx)("div", {
        className: a(r, h.container, _, {
          [h.disabled]: m
        }),
        ref: this.containerRef,
        ...R,
        children: (0, i.jsxs)("div", {
          className: h.inner,
          children: [(0, i.jsx)("input", {
            ...v,
            onFocus: T,
            onBlur: g,
            className: h.input,
            value: e,
            onChange: this.handleOnChange,
            onKeyDown: u,
            onKeyUp: c,
            onKeyPress: d,
            placeholder: s,
            disabled: m,
            autoFocus: t,
            autoComplete: I,
            "aria-label": A,
            ref: this.inputRef
          }), !C && (0, i.jsx)(E, {
            size: _,
            hasContent: e.length > 0,
            onClear: n,
            className: o,
            isLoading: f
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleOnChange = e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    }
  }
}
_.Sizes = f, _.defaultProps = {
  size: f.SMALL,
  isLoading: !1,
  disabled: !1
};
var m = _