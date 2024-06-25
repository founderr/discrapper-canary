var i, l, s = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(481060),
  d = t(285952),
  u = t(876700);

function I(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
class N extends(i = a.PureComponent) {
  render() {
    let {
      scrollable: e,
      ...n
    } = this.props;
    return e ? (0, s.jsx)("aside", {
      className: u.sidebarScrollable,
      children: (0, s.jsx)(c.Scroller, {
        fade: !0,
        className: u.scroller,
        children: (0, s.jsx)(d.Z.Child, {
          ...n,
          wrap: !0
        })
      })
    }) : (0, s.jsx)(d.Z.Child, {
      ...n,
      wrap: !0
    })
  }
}
I(N, "defaultProps", {
  basis: 232,
  grow: 0,
  shrink: 0,
  className: u.sidebar
});
class E extends a.PureComponent {
  render() {
    let {
      className: e,
      ...n
    } = this.props;
    return (0, s.jsx)(d.Z.Child, {
      className: o()(u.content, e),
      wrap: !0,
      ...n
    })
  }
}
class T extends(l = a.PureComponent) {
  render() {
    return (0, s.jsx)(d.Z, {
      ...this.props
    })
  }
}
I(T, "defaultProps", {
  className: u.layout,
  direction: d.Z.Direction.HORIZONTAL,
  justify: d.Z.Justify.START,
  align: d.Z.Align.START,
  wrap: d.Z.Wrap.NO_WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto"
}), I(T, "Direction", d.Z.Direction), I(T, "Justify", d.Z.Justify), I(T, "Align", d.Z.Align), I(T, "Wrap", d.Z.Wrap), I(T, "Sidebar", N), I(T, "Content", E), n.ZP = T