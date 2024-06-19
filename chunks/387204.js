var s, i, l, a, r = n(735250),
  o = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(481060),
  E = n(689938),
  _ = n(405202);
let I = {
  BLOCK: _.block,
  INLINE: _.inline
};
class T extends(a = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = I.BLOCK,
      style: i
    } = this.props;
    return (0, r.jsxs)("div", {
      className: u()(t, s),
      style: i,
      children: [(0, r.jsxs)(d.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: _.pro,
        children: [E.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
      }), (0, r.jsx)(d.Text, {
        className: u()(_.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}
s = T, i = "Types", l = I, i in s ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = T