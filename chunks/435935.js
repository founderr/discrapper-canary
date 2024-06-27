n.d(t, {
  k: function() {
    return g
  }
});
var s, a, i = n(735250),
  r = n(470079),
  l = n(557533),
  o = n.n(l),
  c = n(569252),
  d = n(593334);

function _(e, t, n) {
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
  u = {
    START: c.flexJustifyStart,
    END: c.flexJustifyEnd,
    CENTER: c.flexJustifyCenter,
    BETWEEN: c.flexJustifyBetween,
    AROUND: c.flexJustifyAround
  },
  T = {
    NO_WRAP: c.flexNowrap,
    WRAP: c.flexWrap,
    WRAP_REVERSE: c.flexWrapReverse
  },
  I = {
    START: c.flexAlignStart,
    END: c.flexAlignEnd,
    CENTER: c.flexAlignCenter,
    STRETCH: c.flexAlignStretch
  },
  R = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class C extends(s = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: s,
      basis: a,
      style: l,
      wrap: c,
      ..._
    } = this.props, E = {
      style: {
        flexGrow: s,
        flexShrink: n,
        flexBasis: a,
        ...l
      },
      className: t === d.flexChild ? t : o()(d.flexChild, t),
      ..._
    };
    if (!c && "string" != typeof e && 1 === r.Children.count(e)) {
      let n = r.Children.only(e);
      return E.style = {
        ...E.style,
        ...n.props.style
      }, E.className = o()(n.props.className, t), r.cloneElement(n, E)
    }
    return (0, i.jsx)("div", {
      ...E,
      children: e
    })
  }
}
_(C, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class g extends(a = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: a,
      wrap: r,
      shrink: l,
      grow: c,
      basis: _,
      style: E,
      gutter: u,
      ...T
    } = this.props, I = {
      flexShrink: l,
      flexGrow: c,
      flexBasis: _,
      ...E
    };
    return (0, i.jsx)("div", {
      style: I,
      className: o()(d.flex, n, s, a, r, u, t),
      ...T,
      children: e
    })
  }
}
_(g, "Child", C), _(g, "Direction", E), _(g, "Align", I), _(g, "Justify", u), _(g, "Wrap", T), _(g, "Gutter", R), _(g, "defaultProps", {
  direction: E.HORIZONTAL,
  justify: u.START,
  align: I.STRETCH,
  wrap: T.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})