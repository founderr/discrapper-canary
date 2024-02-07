"use strict";
n.r(e), n.d(e, {
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
  u = n.n(r),
  s = n("315102"),
  o = n("271560"),
  c = n("969850");
(i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
let d = {
  40: c.small,
  66: c.medium
};
var f = t => {
  let e, {
    application: n,
    size: i,
    asset: l,
    className: r
  } = t;
  return e = null != l ? (0, o.getAssetURL)(n.id, l, i) : s.default.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    size: i
  }), (0, a.jsx)("img", {
    alt: "",
    src: e,
    className: u(c.icon, d[i], r)
  })
}