"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("509043"),
  u = n("405645"),
  a = n("483093"),
  l = n("339023"),
  s = n("49111");

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    size: c,
    className: d
  } = e, E = (0, u.useRoleIcon)({
    guildId: n,
    roleId: o.id,
    size: c
  });
  return null != E ? (0, i.jsx)(a.default, {
    className: d,
    ...E
  }) : (0, i.jsx)(l.default, {
    color: null !== (t = o.colorString) && void 0 !== t ? t : (0, r.int2hex)(s.DEFAULT_ROLE_COLOR),
    className: d,
    size: c
  })
}