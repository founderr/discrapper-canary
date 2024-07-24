var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(481060),
  o = n(285952),
  c = n(7422),
  d = n(224499);
class u extends a.PureComponent {
  render() {
let {
  title: e,
  description: t,
  agreement: n,
  disagreement: a,
  onAgree: s,
  onDisagree: u,
  imageClassName: h
} = this.props;
return (0, i.jsxs)(o.Z, {
  className: c.gatedContent,
  justify: o.Z.Justify.CENTER,
  align: o.Z.Align.CENTER,
  direction: o.Z.Direction.VERTICAL,
  children: [
    (0, i.jsx)('div', {
      className: l()(c.image, h)
    }),
    (0, i.jsx)('div', {
      className: l()(c.title, d.marginBottom8),
      children: e
    }),
    (0, i.jsx)('div', {
      className: l()(c.description, d.marginBottom20),
      children: t
    }),
    (0, i.jsxs)(o.Z, {
      justify: o.Z.Justify.CENTER,
      align: o.Z.Align.CENTER,
      grow: 0,
      children: [
        null != a ? (0, i.jsx)(r.Button, {
          className: c.action,
          size: r.ButtonSizes.LARGE,
          color: r.ButtonColors.PRIMARY,
          onClick: u,
          children: a
        }) : null,
        null != n ? (0, i.jsx)(r.Button, {
          className: c.action,
          color: r.Button.Colors.RED,
          size: r.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null
      ]
    })
  ]
});
  }
}
t.Z = u;