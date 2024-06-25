var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(285952),
  c = n(548380),
  u = n(331651);
class d extends i.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: i,
      onAgree: s,
      onDisagree: d,
      imageClassName: h
    } = this.props;
    return (0, l.jsxs)(o.Z, {
      className: c.gatedContent,
      justify: o.Z.Justify.CENTER,
      align: o.Z.Align.CENTER,
      direction: o.Z.Direction.VERTICAL,
      children: [(0, l.jsx)("div", {
        className: a()(c.image, h)
      }), (0, l.jsx)("div", {
        className: a()(c.title, u.marginBottom8),
        children: e
      }), (0, l.jsx)("div", {
        className: a()(c.description, u.marginBottom20),
        children: t
      }), (0, l.jsxs)(o.Z, {
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        grow: 0,
        children: [null != i ? (0, l.jsx)(r.Button, {
          className: c.action,
          size: r.ButtonSizes.LARGE,
          color: r.ButtonColors.PRIMARY,
          onClick: d,
          children: i
        }) : null, null != n ? (0, l.jsx)(r.Button, {
          className: c.action,
          color: r.Button.Colors.RED,
          size: r.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null]
      })]
    })
  }
}
t.Z = d