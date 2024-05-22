"use strict";
n.r(t), n.d(t, {
  Flex: function() {
    return f
  }
});
var s, l, i = n("735250"),
  a = n("470079"),
  r = n("557533"),
  o = n.n(r),
  c = n("424591"),
  u = n("40036");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
    VERTICAL: c.flexVertical,
    HORIZONTAL: c.flexHorizontal,
    HORIZONTAL_REVERSE: c.flexHorizontalReverse
  },
  h = {
    START: c.flexJustifyStart,
    END: c.flexJustifyEnd,
    CENTER: c.flexJustifyCenter,
    BETWEEN: c.flexJustifyBetween,
    AROUND: c.flexJustifyAround
  },
  N = {
    NO_WRAP: c.flexNowrap,
    WRAP: c.flexWrap,
    WRAP_REVERSE: c.flexWrapReverse
  },
  g = {
    START: c.flexAlignStart,
    END: c.flexAlignEnd,
    CENTER: c.flexAlignCenter,
    STRETCH: c.flexAlignStretch
  },
  m = {
    SMALL: u.flexGutterSmall,
    LARGE: u.flexGutterLarge
  };
class k extends(s = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: s,
      basis: l,
      style: r,
      wrap: c,
      ...d
    } = this.props, p = {
      style: {
        flexGrow: s,
        flexShrink: n,
        flexBasis: l,
        ...r
      },
      className: t === u.flexChild ? t : o()(u.flexChild, t),
      ...d
    };
    if (!c && "string" != typeof e && 1 === a.Children.count(e)) {
      let n = a.Children.only(e);
      return p.style = {
        ...p.style,
        ...n.props.style
      }, p.className = o()(n.props.className, t), a.cloneElement(n, p)
    }
    return (0, i.jsx)("div", {
      ...p,
      children: e
    })
  }
}
d(k, "defaultProps", {
  className: u.flexChild,
  style: {},
  wrap: !1
});
class f extends(l = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: l,
      wrap: a,
      shrink: r,
      grow: c,
      basis: d,
      style: p,
      gutter: h,
      ...N
    } = this.props, g = {
      flexShrink: r,
      flexGrow: c,
      flexBasis: d,
      ...p
    };
    return (0, i.jsx)("div", {
      style: g,
      className: o()(u.flex, n, s, l, a, h, t),
      ...N,
      children: e
    })
  }
}
d(f, "Child", k), d(f, "Direction", p), d(f, "Align", g), d(f, "Justify", h), d(f, "Wrap", N), d(f, "Gutter", m), d(f, "defaultProps", {
  direction: p.HORIZONTAL,
  justify: h.START,
  align: g.STRETCH,
  wrap: N.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})