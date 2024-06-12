"use strict";
s.r(t), s.d(t, {
  Flex: function() {
    return T
  }
});
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("557533"),
  o = s.n(r),
  u = s("424591"),
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
    VERTICAL: u.flexVertical,
    HORIZONTAL: u.flexHorizontal,
    HORIZONTAL_REVERSE: u.flexHorizontalReverse
  },
  _ = {
    START: u.flexJustifyStart,
    END: u.flexJustifyEnd,
    CENTER: u.flexJustifyCenter,
    BETWEEN: u.flexJustifyBetween,
    AROUND: u.flexJustifyAround
  },
  f = {
    NO_WRAP: u.flexNowrap,
    WRAP: u.flexWrap,
    WRAP_REVERSE: u.flexWrapReverse
  },
  h = {
    START: u.flexAlignStart,
    END: u.flexAlignEnd,
    CENTER: u.flexAlignCenter,
    STRETCH: u.flexAlignStretch
  },
  C = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class m extends(a = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: s,
      grow: a,
      basis: n,
      style: r,
      wrap: u,
      ...c
    } = this.props, E = {
      style: {
        flexGrow: a,
        flexShrink: s,
        flexBasis: n,
        ...r
      },
      className: t === d.flexChild ? t : o()(d.flexChild, t),
      ...c
    };
    if (!u && "string" != typeof e && 1 === i.Children.count(e)) {
      let s = i.Children.only(e);
      return E.style = {
        ...E.style,
        ...s.props.style
      }, E.className = o()(s.props.className, t), i.cloneElement(s, E)
    }
    return (0, l.jsx)("div", {
      ...E,
      children: e
    })
  }
}
c(m, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class T extends(n = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: s,
      justify: a,
      align: n,
      wrap: i,
      shrink: r,
      grow: u,
      basis: c,
      style: E,
      gutter: _,
      ...f
    } = this.props, h = {
      flexShrink: r,
      flexGrow: u,
      flexBasis: c,
      ...E
    };
    return (0, l.jsx)("div", {
      style: h,
      className: o()(d.flex, s, a, n, i, _, t),
      ...f,
      children: e
    })
  }
}
c(T, "Child", m), c(T, "Direction", E), c(T, "Align", h), c(T, "Justify", _), c(T, "Wrap", f), c(T, "Gutter", C), c(T, "defaultProps", {
  direction: E.HORIZONTAL,
  justify: _.START,
  align: h.STRETCH,
  wrap: f.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})