"use strict";
n.r(t), n.d(t, {
  ApplicationIconSize: function() {
    return r
  },
  default: function() {
    return f
  }
});
var i, r, l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  u = n("315102"),
  o = n("271560"),
  c = n("969850");
(i = r || (r = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
let d = {
  40: c.small,
  66: c.medium
};
var f = e => {
  let t, {
    application: n,
    size: i,
    asset: r,
    className: a
  } = e;
  return t = null != r ? (0, o.getAssetURL)(n.id, r, i) : u.default.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    size: i
  }), (0, l.jsx)("img", {
    alt: "",
    src: t,
    className: s(c.icon, d[i], a)
  })
}