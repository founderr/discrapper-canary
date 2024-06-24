var r, t, i, a, l = n(735250),
  c = n(470079),
  o = n(120356),
  d = n.n(o),
  u = n(592804);
class h extends(a = c.PureComponent) {
  render() {
    let {
      tag: e,
      children: s,
      hoverText: n,
      className: r,
      forceHover: t,
      ...i
    } = this.props;
    return (0, l.jsxs)("div", {
      ...i,
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
i = {
  tag: "div",
  forceHover: !1
}, (t = "defaultProps") in(r = h) ? Object.defineProperty(r, t, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[t] = i, s.Z = h