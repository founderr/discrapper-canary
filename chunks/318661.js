"use strict";
n.d(t, {
  Of: function() {
    return _
  },
  ZP: function() {
    return l
  }
}), n(47120), n(470079);
var i = n(442837),
  r = n(594174),
  s = n(251625),
  o = n(255564),
  a = n(621853);

function l(e, t) {
  return (0, i.e7)([r.default, a.Z], () => _(e, t, [r.default, a.Z]))
}
n(484459);
let u = (0, s.oH)((e, t) => new o.Z(e, t));

function _(e, t) {
  let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, a.Z], s = n.getUser(e), o = i.getUserProfile(e), l = i.getGuildMemberProfile(e, t);
  return null == s || null == o ? null : u(o, l)
}