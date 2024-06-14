"use strict";
s.r(t);
var n, a, l, i, r = s("735250"),
  o = s("470079"),
  u = s("120356"),
  d = s.n(u),
  c = s("818969");
class E extends(i = o.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: s,
      className: n,
      forceHover: a,
      ...l
    } = this.props;
    return (0, r.jsxs)("div", {
      ...l,
      className: d()(n, c.hoverRoll, {
        [c.disabled]: null == s,
        [c.forceHover]: a
      }),
      children: [(0, r.jsx)(e, {
        className: c.hovered,
        children: s
      }), (0, r.jsx)(e, {
        className: c.default,
        children: t
      })]
    })
  }
}
l = {
  tag: "div",
  forceHover: !1
}, (a = "defaultProps") in(n = E) ? Object.defineProperty(n, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = l, t.default = E