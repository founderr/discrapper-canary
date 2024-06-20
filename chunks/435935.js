n.d(t, {
  k: function() {
    return N
  }
});
var s, a, i = n(735250),
  l = n(470079),
  r = n(557533),
  c = n.n(r),
  o = n(569252),
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
  h = {
    NO_WRAP: o.flexNowrap,
    WRAP: o.flexWrap,
    WRAP_REVERSE: o.flexWrapReverse
  },
  T = {
    START: o.flexAlignStart,
    END: o.flexAlignEnd,
    CENTER: o.flexAlignCenter,
    STRETCH: o.flexAlignStretch
  },
  I = {
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
      wrap: o,
      ...u
    } = this.props, E = {
      style: {
        flexGrow: s,
        flexShrink: n,
        flexBasis: a,
        ...r
      },
      className: t === d.flexChild ? t : c()(d.flexChild, t),
      ...u
    };
    if (!o && "string" != typeof e && 1 === l.Children.count(e)) {
      let n = l.Children.only(e);
      return E.style = {
        ...E.style,
        ...n.props.style
      }, E.className = c()(n.props.className, t), l.cloneElement(n, E)
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
class N extends(a = l.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: a,
      wrap: l,
      shrink: r,
      grow: o,
      basis: u,
      style: E,
      gutter: _,
      ...h
    } = this.props, T = {
      flexShrink: r,
      flexGrow: o,
      flexBasis: u,
      ...E
    };
    return (0, i.jsx)("div", {
      style: T,
      className: c()(d.flex, n, s, a, l, _, t),
      ...h,
      children: e
    })
  }
}
u(N, "Child", C), u(N, "Direction", E), u(N, "Align", T), u(N, "Justify", _), u(N, "Wrap", h), u(N, "Gutter", I), u(N, "defaultProps", {
  direction: E.HORIZONTAL,
  justify: _.START,
  align: T.STRETCH,
  wrap: h.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})