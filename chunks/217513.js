"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  getDisplayProfile: function() {
    return s
  }
}), n("222007");
var l = n("446674"),
  i = n("697218"),
  u = n("117362"),
  r = n("811907"),
  a = n("713135");

function o(e, t) {
  return (0, l.useStateFromStores)([i.default, a.default], () => s(e, t, [i.default, a.default]))
}
let d = (0, u.cachedFunction)((e, t) => new r.default(e, t));

function s(e, t) {
  let [n, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, a.default], u = n.getUser(e), r = l.getUserProfile(e), o = l.getGuildMemberProfile(e, t);
  return null == u || null == r ? null : d(r, o)
}