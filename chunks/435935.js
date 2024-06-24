n.d(t, {
  k: function() {
    return g
  }
});
var l, a, i = n(735250),
  r = n(470079),
  s = n(557533),
  o = n.n(s),
  c = n(569252),
  u = n(593334);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = {
    VERTICAL: c.flexVertical,
    HORIZONTAL: c.flexHorizontal,
    HORIZONTAL_REVERSE: c.flexHorizontalReverse
  },
  p = {
    START: c.flexJustifyStart,
    END: c.flexJustifyEnd,
    CENTER: c.flexJustifyCenter,
    BETWEEN: c.flexJustifyBetween,
    AROUND: c.flexJustifyAround
  },
  m = {
    NO_WRAP: c.flexNowrap,
    WRAP: c.flexWrap,
    WRAP_REVERSE: c.flexWrapReverse
  },
  N = {
    START: c.flexAlignStart,
    END: c.flexAlignEnd,
    CENTER: c.flexAlignCenter,
    STRETCH: c.flexAlignStretch
  },
  k = {
    SMALL: u.flexGutterSmall,
    LARGE: u.flexGutterLarge
  };
class x extends(l = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: l,
      basis: a,
      style: s,
      wrap: c,
      ...d
    } = this.props, h = {
      style: {
        flexGrow: l,
        flexShrink: n,
        flexBasis: a,
        ...s
      },
      className: t === u.flexChild ? t : o()(u.flexChild, t),
      ...d
    };
    if (!c && "string" != typeof e && 1 === r.Children.count(e)) {
      let n = r.Children.only(e);
      return h.style = {
        ...h.style,
        ...n.props.style
      }, h.className = o()(n.props.className, t), r.cloneElement(n, h)
    }
    return (0, i.jsx)("div", {
      ...h,
      children: e
    })
  }
}
d(x, "defaultProps", {
  className: u.flexChild,
  style: {},
  wrap: !1
});
class g extends(a = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: l,
      align: a,
      wrap: r,
      shrink: s,
      grow: c,
      basis: d,
      style: h,
      gutter: p,
      ...m
    } = this.props, N = {
      flexShrink: s,
      flexGrow: c,
      flexBasis: d,
      ...h
    };
    return (0, i.jsx)("div", {
      style: N,
      className: o()(u.flex, n, l, a, r, p, t),
      ...m,
      children: e
    })
  }
}
d(g, "Child", x), d(g, "Direction", h), d(g, "Align", N), d(g, "Justify", p), d(g, "Wrap", m), d(g, "Gutter", k), d(g, "defaultProps", {
  direction: h.HORIZONTAL,
  justify: p.START,
  align: N.STRETCH,
  wrap: m.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})