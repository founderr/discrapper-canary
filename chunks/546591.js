"use strict";
a.r(t);
var n, s, l, i, r = a("735250"),
  o = a("470079"),
  u = a("120356"),
  d = a.n(u),
  c = a("182493");
class f extends(i = o.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: a,
      className: n,
      forceHover: s,
      ...l
    } = this.props;
    return (0, r.jsxs)("div", {
      ...l,
      className: d()(n, c.hoverRoll, {
        [c.disabled]: null == a,
        [c.forceHover]: s
      }),
      children: [(0, r.jsx)(e, {
        className: c.hovered,
        children: a
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
}, (s = "defaultProps") in(n = f) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = f