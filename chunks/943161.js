"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  o = n.n(i),
  a = n("83910"),
  r = n("93393"),
  s = n("317041"),
  u = n("749296");
let c = e => {
  switch (e.id) {
    case s.BuiltInSectionId.BUILT_IN:
      return a.default;
    case s.BuiltInSectionId.FRECENCY:
      return r.default;
    default:
      return
  }
};

function d(e) {
  let {
    section: t,
    className: n,
    width: i,
    height: a,
    padding: r,
    isSelected: s,
    selectable: d = !1,
    ...p
  } = e, m = c(t);
  return (0, l.jsx)("div", {
    className: o(u.wrapper, n, {
      [u.selectable]: d,
      [u.selected]: d && s
    }),
    style: {
      width: i,
      height: a,
      padding: null != r ? r : 0
    },
    children: null != m ? (0, l.jsx)(m, {
      className: u.icon,
      width: i,
      height: a,
      ...p
    }) : null
  })
}