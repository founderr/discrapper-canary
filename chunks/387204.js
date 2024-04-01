"use strict";
n.r(t);
var a, l, s, i, r = n("735250"),
  o = n("470079"),
  u = n("803997"),
  d = n.n(u),
  c = n("481060"),
  f = n("689938"),
  h = n("522363");
let E = {
  BLOCK: h.block,
  INLINE: h.inline
};
class m extends(i = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: a = E.BLOCK,
      style: l
    } = this.props;
    return (0, r.jsxs)("div", {
      className: d()(t, a),
      style: l,
      children: [(0, r.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: h.pro,
        children: [f.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, r.jsx)(c.Text, {
        className: d()(h.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
a = m, l = "Types", s = E, l in a ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = m