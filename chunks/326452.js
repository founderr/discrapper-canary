"use strict";
n.d(t, {
  E: function() {
    return S
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(1561),
  u = n(84735),
  _ = n(922770),
  c = n(481060),
  d = n(689938),
  E = n(464526);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = Object.freeze({
    SMALL: E.small,
    MEDIUM: E.medium,
    LARGE: E.large
  }),
  h = e => {
    let {
      hasContent: t,
      onClear: n,
      className: i,
      isLoading: o,
      size: u = T.SMALL
    } = e;
    return (0, r.jsx)(l.P, {
      className: a()(i, E.iconLayout, u, {
        [E.pointer]: t
      }),
      onClick: e => {
        e.stopPropagation(), null != n && n(e)
      },
      tabIndex: t ? 0 : -1,
      "aria-hidden": !t,
      onMouseDown: e => {
        e.preventDefault(), e.stopPropagation()
      },
      children: (0, r.jsx)("div", {
        className: E.iconContainer,
        children: o ? (0, r.jsx)(_.$, {
          type: _.$.Type.SPINNING_CIRCLE,
          className: a()(E.icon, E.visible)
        }) : (0, r.jsxs)(s.Fragment, {
          children: [(0, r.jsx)(c.MagnifyingGlassIcon, {
            size: "md",
            color: "currentColor",
            className: a()(E.icon, {
              [E.visible]: !t
            }),
            "aria-label": d.Z.Messages.SEARCH
          }), (0, r.jsx)(c.CloseSmallIcon, {
            size: "md",
            color: "currentColor",
            className: a()(E.clear, {
              [E.visible]: t
            }),
            "aria-label": d.Z.Messages.CLEAR
          })]
        })
      })
    })
  };
h.Sizes = T;
class S extends(i = s.PureComponent) {
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
      className: i,
      placeholder: s = d.Z.Messages.SEARCH,
      iconClassName: o,
      onKeyDown: l,
      onKeyUp: _,
      onKeyPress: c,
      isLoading: I,
      size: T,
      disabled: S,
      onChange: f,
      onBlur: N,
      onFocus: A,
      autoComplete: m,
      inputProps: O,
      hideSearchIcon: R,
      "aria-label": p = d.Z.Messages.SEARCH,
      ...g
    } = this.props;
    return (0, r.jsx)(u.t, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        className: a()(i, E.container, T, {
          [E.disabled]: S
        }),
        ref: this.containerRef,
        ...g,
        children: (0, r.jsxs)("div", {
          className: E.inner,
          children: [(0, r.jsx)("input", {
            ...O,
            onFocus: A,
            onBlur: N,
            className: E.input,
            value: e,
            onChange: this.handleOnChange,
            onKeyDown: l,
            onKeyUp: _,
            onKeyPress: c,
            placeholder: s,
            disabled: S,
            autoFocus: t,
            autoComplete: m,
            "aria-label": p,
            ref: this.inputRef
          }), !R && (0, r.jsx)(h, {
            size: T,
            hasContent: e.length > 0,
            onClear: n,
            className: o,
            isLoading: I
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "inputRef", s.createRef()), I(this, "containerRef", s.createRef()), I(this, "handleOnChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
I(S, "Sizes", T), I(S, "defaultProps", {
  size: T.SMALL,
  isLoading: !1,
  disabled: !1
})