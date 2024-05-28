"use strict";
s.r(t);
var a, n, l, i, r = s("735250"),
  u = s("470079"),
  o = s("120356"),
  d = s.n(o),
  c = s("818969");
class E extends(i = u.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      hoverText: s,
      className: a,
      forceHover: n,
      ...l
    } = this.props;
    return (0, r.jsxs)("div", {
      ...l,
      className: d()(a, c.hoverRoll, {
        [c.disabled]: null == s,
        [c.forceHover]: n
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
}, (n = "defaultProps") in(a = E) ? Object.defineProperty(a, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = l, t.default = E