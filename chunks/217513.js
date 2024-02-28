"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  },
  getDisplayProfile: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  l = n("697218"),
  r = n("117362"),
  u = n("811907"),
  a = n("713135");

function s(e, t) {
  return (0, i.useStateFromStores)([l.default, a.default], () => d(e, t, [l.default, a.default]))
}
let o = (0, r.cachedFunction)((e, t) => new u.default(e, t));

function d(e, t) {
  let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, a.default], r = n.getUser(e), u = i.getUserProfile(e), s = i.getGuildMemberProfile(e, t);
  return null == r || null == u ? null : o(u, s)
}