t.d(s, {
  Z: function() {
    return r
  }
});
var l = t(735250);
t(470079);
var n = t(481060),
  i = t(285952),
  a = t(785102);

function r(e) {
  let {
    description: s,
    icon: t,
    id: r,
    label: o,
    onChange: d,
    value: c
  } = e;
  return (0, l.jsxs)("div", {
    className: a.cardContent,
    children: [(0, l.jsxs)(i.Z, {
      justify: i.Z.Justify.BETWEEN,
      align: i.Z.Align.CENTER,
      children: [t, (0, l.jsx)(i.Z.Child, {
        grow: 1,
        children: (0, l.jsx)(n.Text, {
          variant: "text-md/semibold",
          children: o
        })
      }), null != d && null != c ? (0, l.jsx)(n.Switch, {
        id: r,
        checked: c,
        onChange: d
      }) : null]
    }), (0, l.jsx)(n.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      className: a.cardDescription,
      children: s
    })]
  })
}