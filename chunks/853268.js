n.d(t, {
  Z: function() {
    return d
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  i = n.n(s),
  a = n(481060),
  o = n(285952),
  l = n(388905),
  c = n(148995),
  u = n(331651);

function d(e) {
  let {
    value: t,
    onChange: n,
    subText: s,
    muted: d,
    marginTopStyle: h
  } = e;
  return (0, r.jsx)(o.Z, {
    className: null != h ? h : u.marginTop20,
    align: o.Z.Align.CENTER,
    children: (0, r.jsx)(a.Checkbox, {
      value: t,
      type: a.Checkbox.Types.INVERTED,
      onChange: (e, t) => n(t),
      className: c.checkbox,
      children: (0, r.jsx)(l.i_, {
        className: i()({
          [c.subText]: !d
        }),
        children: s
      })
    })
  })
}