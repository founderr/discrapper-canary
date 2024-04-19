"use strict";
a.r(t), a.d(t, {
  Flex: function() {
    return S
  }
});
var n, s, l = a("735250"),
  i = a("470079"),
  r = a("557533"),
  o = a.n(r),
  u = a("997466"),
  d = a("933658");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = {
    VERTICAL: u.flexVertical,
    HORIZONTAL: u.flexHorizontal,
    HORIZONTAL_REVERSE: u.flexHorizontalReverse
  },
  E = {
    START: u.flexJustifyStart,
    END: u.flexJustifyEnd,
    CENTER: u.flexJustifyCenter,
    BETWEEN: u.flexJustifyBetween,
    AROUND: u.flexJustifyAround
  },
  h = {
    NO_WRAP: u.flexNowrap,
    WRAP: u.flexWrap,
    WRAP_REVERSE: u.flexWrapReverse
  },
  _ = {
    START: u.flexAlignStart,
    END: u.flexAlignEnd,
    CENTER: u.flexAlignCenter,
    STRETCH: u.flexAlignStretch
  },
  C = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class m extends(n = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: a,
      grow: n,
      basis: s,
      style: r,
      wrap: u,
      ...c
    } = this.props, f = {
      style: {
        flexGrow: n,
        flexShrink: a,
        flexBasis: s,
        ...r
      },
      className: t === d.flexChild ? t : o()(d.flexChild, t),
      ...c
    };
    if (!u && "string" != typeof e && 1 === i.Children.count(e)) {
      let a = i.Children.only(e);
      return f.style = {
        ...f.style,
        ...a.props.style
      }, f.className = o()(a.props.className, t), i.cloneElement(a, f)
    }
    return (0, l.jsx)("div", {
      ...f,
      children: e
    })
  }
}
c(m, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class S extends(s = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: a,
      justify: n,
      align: s,
      wrap: i,
      shrink: r,
      grow: u,
      basis: c,
      style: f,
      gutter: E,
      ...h
    } = this.props, _ = {
      flexShrink: r,
      flexGrow: u,
      flexBasis: c,
      ...f
    };
    return (0, l.jsx)("div", {
      style: _,
      className: o()(d.flex, a, n, s, i, E, t),
      ...h,
      children: e
    })
  }
}
c(S, "Child", m), c(S, "Direction", f), c(S, "Align", _), c(S, "Justify", E), c(S, "Wrap", h), c(S, "Gutter", C), c(S, "defaultProps", {
  direction: f.HORIZONTAL,
  justify: E.START,
  align: _.STRETCH,
  wrap: h.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})