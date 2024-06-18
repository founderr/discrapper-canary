"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(689079),
  l = n(524737);
let u = e => {
  switch (e.id) {
    case a.bi.BUILT_IN:
      return o.SlashBoxIcon;
    case a.bi.FRECENCY:
      return o.ClockIcon;
    default:
      return
  }
};

function _(e) {
  let {
    section: t,
    className: n,
    width: r,
    height: o,
    padding: a,
    isSelected: _,
    selectable: c = !1,
    ...d
  } = e, E = u(t);
  return (0, i.jsx)("div", {
    className: s()(l.wrapper, n, {
      [l.selectable]: c,
      [l.selected]: c && _
    }),
    style: {
      width: r,
      height: o,
      padding: null != a ? a : 0
    },
    children: null != E ? (0, i.jsx)(E, {
      className: l.icon,
      color: "currentColor",
      size: "custom",
      width: r,
      height: o,
      ...d
    }) : null
  })
}