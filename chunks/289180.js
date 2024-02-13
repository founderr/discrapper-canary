"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  getVideoPermission: function() {
    return u
  }
});
var a = n("446674"),
  r = n("223913"),
  i = n("305961"),
  s = n("957255");

function l(e) {
  let t = (0, a.useStateFromStores)([i.default, s.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, i.default, s.default, !1), [e]);
  return t
}

function u(e) {
  return e.isPrivate() || (0, r.canStreamInChannel)(e, i.default, s.default, !1)
}