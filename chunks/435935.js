s.d(t, {
  k: function() {
    return N
  }
});
var n, a, i = s(735250),
  r = s(470079),
  l = s(557533),
  o = s.n(l),
  c = s(569252),
  E = s(593334);

function _(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let u = {
    VERTICAL: c.flexVertical,
    HORIZONTAL: c.flexHorizontal,
    HORIZONTAL_REVERSE: c.flexHorizontalReverse
  },
  d = {
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
    SMALL: E.flexGutterSmall,
    LARGE: E.flexGutterLarge
  };
class A extends(n = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: s,
      grow: n,
      basis: a,
      style: l,
      wrap: c,
      ..._
    } = this.props, u = {
      style: {
        flexGrow: n,
        flexShrink: s,
        flexBasis: a,
        ...l
      },
      className: t === E.flexChild ? t : o()(E.flexChild, t),
      ..._
    };
    if (!c && "string" != typeof e && 1 === r.Children.count(e)) {
      let s = r.Children.only(e);
      return u.style = {
        ...u.style,
        ...s.props.style
      }, u.className = o()(s.props.className, t), r.cloneElement(s, u)
    }
    return (0, i.jsx)("div", {
      ...u,
      children: e
    })
  }
}
_(A, "defaultProps", {
  className: E.flexChild,
  style: {},
  wrap: !1
});
class N extends(a = r.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: s,
      justify: n,
      align: a,
      wrap: r,
      shrink: l,
      grow: c,
      basis: _,
      style: u,
      gutter: d,
      ...T
    } = this.props, I = {
      flexShrink: l,
      flexGrow: c,
      flexBasis: _,
      ...u
    };
    return (0, i.jsx)("div", {
      style: I,
      className: o()(E.flex, s, n, a, r, d, t),
      ...T,
      children: e
    })
  }
}
_(N, "Child", A), _(N, "Direction", u), _(N, "Align", I), _(N, "Justify", d), _(N, "Wrap", T), _(N, "Gutter", R), _(N, "defaultProps", {
  direction: u.HORIZONTAL,
  justify: d.START,
  align: I.STRETCH,
  wrap: T.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})