"use strict";
n.r(t), n.d(t, {
  ApplicationIconSize: function() {
    return l
  },
  default: function() {
    return f
  }
});
var i, l, a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  u = n("315102"),
  o = n("271560"),
  c = n("969850");
(i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
let d = {
  40: c.small,
  66: c.medium
};
var f = e => {
  let t, {
    application: n,
    size: i,
    asset: l,
    className: r
  } = e;
  return t = null != l ? (0, o.getAssetURL)(n.id, l, i) : u.default.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    size: i
  }), (0, a.jsx)("img", {
    alt: "",
    src: t,
    className: s(c.icon, d[i], r)
  })
}