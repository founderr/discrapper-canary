"use strict";
n.r(t), n.d(t, {
  ApplicationIconSize: function() {
    return l
  }
});
var i, l, r = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  o = n("768581"),
  u = n("73346"),
  d = n("326702");
(i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
let c = {
  40: d.small,
  66: d.medium
};
t.default = e => {
  let t, {
    application: n,
    size: i,
    asset: l,
    className: a
  } = e;
  return t = null != l ? (0, u.getAssetURL)(n.id, l, i) : o.default.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    size: i
  }), (0, r.jsx)("img", {
    alt: "",
    src: t,
    className: s()(d.icon, c[i], a)
  })
}