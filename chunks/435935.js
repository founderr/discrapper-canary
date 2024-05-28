"use strict";
s.r(t), s.d(t, {
  Flex: function() {
    return C
  }
});
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("557533"),
  u = s.n(r),
  o = s("424591"),
  d = s("40036");

function c(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let E = {
    VERTICAL: o.flexVertical,
    HORIZONTAL: o.flexHorizontal,
    HORIZONTAL_REVERSE: o.flexHorizontalReverse
  },
  _ = {
    START: o.flexJustifyStart,
    END: o.flexJustifyEnd,
    CENTER: o.flexJustifyCenter,
    BETWEEN: o.flexJustifyBetween,
    AROUND: o.flexJustifyAround
  },
  f = {
    NO_WRAP: o.flexNowrap,
    WRAP: o.flexWrap,
    WRAP_REVERSE: o.flexWrapReverse
  },
  h = {
    START: o.flexAlignStart,
    END: o.flexAlignEnd,
    CENTER: o.flexAlignCenter,
    STRETCH: o.flexAlignStretch
  },
  m = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class T extends(a = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: s,
      grow: a,
      basis: n,
      style: r,
      wrap: o,
      ...c
    } = this.props, E = {
      style: {
        flexGrow: a,
        flexShrink: s,
        flexBasis: n,
        ...r
      },
      className: t === d.flexChild ? t : u()(d.flexChild, t),
      ...c
    };
    if (!o && "string" != typeof e && 1 === i.Children.count(e)) {
      let s = i.Children.only(e);
      return E.style = {
        ...E.style,
        ...s.props.style
      }, E.className = u()(s.props.className, t), i.cloneElement(s, E)
    }
    return (0, l.jsx)("div", {
      ...E,
      children: e
    })
  }
}
c(T, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class C extends(n = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: s,
      justify: a,
      align: n,
      wrap: i,
      shrink: r,
      grow: o,
      basis: c,
      style: E,
      gutter: _,
      ...f
    } = this.props, h = {
      flexShrink: r,
      flexGrow: o,
      flexBasis: c,
      ...E
    };
    return (0, l.jsx)("div", {
      style: h,
      className: u()(d.flex, s, a, n, i, _, t),
      ...f,
      children: e
    })
  }
}
c(C, "Child", T), c(C, "Direction", E), c(C, "Align", h), c(C, "Justify", _), c(C, "Wrap", f), c(C, "Gutter", m), c(C, "defaultProps", {
  direction: E.HORIZONTAL,
  justify: _.START,
  align: h.STRETCH,
  wrap: f.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})