var r, t, i, a, l = s(735250),
  c = s(470079),
  o = s(120356),
  d = s.n(o),
  u = s(592804);
class h extends(a = c.PureComponent) {
  render() {
    let {
      tag: e,
      children: n,
      hoverText: s,
      className: r,
      forceHover: t,
      ...i
    } = this.props;
    return (0, l.jsxs)("div", {
      ...i,
      className: d()(r, u.hoverRoll, {
        [u.disabled]: null == s,
        [u.forceHover]: t
      }),
      children: [(0, l.jsx)(e, {
        className: u.hovered,
        children: s
      }), (0, l.jsx)(e, {
        className: u.default,
        children: n
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
}) : r[t] = i, n.Z = h