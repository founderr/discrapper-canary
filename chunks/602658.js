"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("509043"),
  l = n("405645"),
  s = n("483093"),
  u = n("339023"),
  o = n("49111");

function a(e) {
  var t;
  let {
    guildId: n,
    role: a,
    size: c,
    className: d
  } = e, f = (0, l.useRoleIcon)({
    guildId: n,
    roleId: a.id,
    size: c
  });
  return null != f ? (0, i.jsx)(s.default, {
    className: d,
    ...f
  }) : (0, i.jsx)(u.default, {
    color: null !== (t = a.colorString) && void 0 !== t ? t : (0, r.int2hex)(o.DEFAULT_ROLE_COLOR),
    className: d,
    size: c
  })
}