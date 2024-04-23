"use strict";
n.r(t);
var s, l, a, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("481060"),
  f = n("689938"),
  E = n("522363");
let _ = {
  BLOCK: E.block,
  INLINE: E.inline
};
class m extends(i = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = _.BLOCK,
      style: l
    } = this.props;
    return (0, r.jsxs)("div", {
      className: d()(t, s),
      style: l,
      children: [(0, r.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: E.pro,
        children: [f.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, r.jsx)(c.Text, {
        className: d()(E.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
s = m, l = "Types", a = _, l in s ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = m