var r, t, a, i, l = n(735250),
  c = n(470079),
  o = n(120356),
  d = n.n(o),
  u = n(592804);
class h extends(i = c.PureComponent) {
  render() {
    let {
      tag: e,
      children: s,
      hoverText: n,
      className: r,
      forceHover: t,
      ...a
    } = this.props;
    return (0, l.jsxs)("div", {
      ...a,
      className: d()(r, u.hoverRoll, {
        [u.disabled]: null == n,
        [u.forceHover]: t
      }),
      children: [(0, l.jsx)(e, {
        className: u.hovered,
        children: n
      }), (0, l.jsx)(e, {
        className: u.default,
        children: s
      })]
    })
  }
}
a = {
  tag: "div",
  forceHover: !1
}, (t = "defaultProps") in(r = h) ? Object.defineProperty(r, t, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[t] = a, s.Z = h