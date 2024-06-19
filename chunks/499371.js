var n = i(735250),
  r = i(470079),
  s = i(120356),
  o = i.n(s),
  l = i(481060),
  a = i(285952),
  c = i(548380),
  u = i(331651);
class d extends r.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: i,
      disagreement: r,
      onAgree: s,
      onDisagree: d,
      imageClassName: h
    } = this.props;
    return (0, n.jsxs)(a.Z, {
      className: c.gatedContent,
      justify: a.Z.Justify.CENTER,
      align: a.Z.Align.CENTER,
      direction: a.Z.Direction.VERTICAL,
      children: [(0, n.jsx)("div", {
        className: o()(c.image, h)
      }), (0, n.jsx)("div", {
        className: o()(c.title, u.marginBottom8),
        children: e
      }), (0, n.jsx)("div", {
        className: o()(c.description, u.marginBottom20),
        children: t
      }), (0, n.jsxs)(a.Z, {
        justify: a.Z.Justify.CENTER,
        align: a.Z.Align.CENTER,
        grow: 0,
        children: [null != r ? (0, n.jsx)(l.Button, {
          className: c.action,
          size: l.ButtonSizes.LARGE,
          color: l.ButtonColors.PRIMARY,
          onClick: d,
          children: r
        }) : null, null != i ? (0, n.jsx)(l.Button, {
          className: c.action,
          color: l.Button.Colors.RED,
          size: l.ButtonSizes.LARGE,
          onClick: s,
          children: i
        }) : null]
      })]
    })
  }
}
t.Z = d