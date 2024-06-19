var l = t(735250);
t(470079);
var n = t(120356),
  i = t.n(n),
  a = t(692547),
  r = t(481060),
  o = t(285952),
  d = t(294333);
s.Z = e => {
  let {
    className: s,
    icon: t,
    noticeText: n,
    buttonText: c,
    onClick: u,
    canSync: h
  } = e;
  return (0, l.jsx)(r.Card, {
    className: i()(s, d.card),
    children: (0, l.jsxs)(o.Z, {
      justify: o.Z.Justify.BETWEEN,
      align: o.Z.Align.CENTER,
      children: [(0, l.jsx)(t, {
        width: 20,
        height: 20,
        size: "custom",
        color: a.Z.unsafe_rawColors.YELLOW_300.css
      }), (0, l.jsx)("div", {
        className: d.label,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: n
        })
      }), h && (0, l.jsx)(r.Button, {
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: u,
        children: c
      })]
    })
  })
}