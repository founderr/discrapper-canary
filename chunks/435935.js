n.d(t, {
  k: function() {
    return g
  }
});
var s, a, i = n(735250),
  l = n(470079),
  r = n(557533),
  o = n.n(r),
  c = n(569252),
  d = n(593334);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {
    VERTICAL: c.flexVertical,
    HORIZONTAL: c.flexHorizontal,
    HORIZONTAL_REVERSE: c.flexHorizontalReverse
  },
  _ = {
    START: c.flexJustifyStart,
    END: c.flexJustifyEnd,
    CENTER: c.flexJustifyCenter,
    BETWEEN: c.flexJustifyBetween,
    AROUND: c.flexJustifyAround
  },
  h = {
    NO_WRAP: c.flexNowrap,
    WRAP: c.flexWrap,
    WRAP_REVERSE: c.flexWrapReverse
  },
  m = {
    START: c.flexAlignStart,
    END: c.flexAlignEnd,
    CENTER: c.flexAlignCenter,
    STRETCH: c.flexAlignStretch
  },
  T = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class C extends(s = l.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: s,
      basis: a,
      style: r,
      wrap: c,
      ...u
    } = this.props, E = {
      style: {
        flexGrow: s,
        flexShrink: n,
        flexBasis: a,
        ...r
      },
      className: t === d.flexChild ? t : o()(d.flexChild, t),
      ...u
    };
    if (!c && "string" != typeof e && 1 === l.Children.count(e)) {
      let n = l.Children.only(e);
      return E.style = {
        ...E.style,
        ...n.props.style
      }, E.className = o()(n.props.className, t), l.cloneElement(n, E)
    }
    return (0, i.jsx)("div", {
      ...E,
      children: e
    })
  }
}
u(C, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class g extends(a = l.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: a,
      wrap: l,
      shrink: r,
      grow: c,
      basis: u,
      style: E,
      gutter: _,
      ...h
    } = this.props, m = {
      flexShrink: r,
      flexGrow: c,
      flexBasis: u,
      ...E
    };
    return (0, i.jsx)("div", {
      style: m,
      className: o()(d.flex, n, s, a, l, _, t),
      ...h,
      children: e
    })
  }
}
u(g, "Child", C), u(g, "Direction", E), u(g, "Align", m), u(g, "Justify", _), u(g, "Wrap", h), u(g, "Gutter", T), u(g, "defaultProps", {
  direction: E.HORIZONTAL,
  justify: _.START,
  align: m.STRETCH,
  wrap: h.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})