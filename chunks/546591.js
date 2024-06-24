var s, i, a, l, r = n(735250),
  c = n(470079),
  o = n(120356),
  d = n.n(o),
  u = n(592804);
class E extends(l = c.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: n,
      className: s,
      forceHover: i,
      ...a
    } = this.props;
    return (0, r.jsxs)("div", {
      ...a,
      className: d()(s, u.hoverRoll, {
        [u.disabled]: null == n,
        [u.forceHover]: i
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
a = {
  tag: "div",
  forceHover: !1
}, (i = "defaultProps") in(s = E) ? Object.defineProperty(s, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = a, t.Z = E