"use strict";
n.r(t);
var a, s, i, l, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("818969");
class f extends(l = o.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: n,
      className: a,
      forceHover: s,
      ...i
    } = this.props;
    return (0, r.jsxs)("div", {
      ...i,
      className: d()(a, c.hoverRoll, {
        [c.disabled]: null == n,
        [c.forceHover]: s
      }),
      children: [(0, r.jsx)(e, {
        className: c.hovered,
        children: n
      }), (0, r.jsx)(e, {
        className: c.default,
        children: t
      })]
    })
  }
}
i = {
  tag: "div",
  forceHover: !1
}, (s = "defaultProps") in(a = f) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = f