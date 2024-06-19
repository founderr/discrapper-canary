var s, a, i, l, r = n(735250),
  o = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(592804);
class E extends(l = o.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: n,
      className: s,
      forceHover: a,
      ...i
    } = this.props;
    return (0, r.jsxs)("div", {
      ...i,
      className: d()(s, u.hoverRoll, {
        [u.disabled]: null == n,
        [u.forceHover]: a
      }),
      children: [(0, r.jsx)(e, {
        className: u.hovered,
        children: n
      }), (0, r.jsx)(e, {
        className: u.default,
        children: t
      })]
    })
  }
}
i = {
  tag: "div",
  forceHover: !1
}, (a = "defaultProps") in(s = E) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i, t.Z = E