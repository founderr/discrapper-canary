"use strict";
l.r(t), l.d(t, {
  useIsVoiceChannelLocked: function() {
    return i
  },
  default: function() {
    return d
  }
});
var n = l("446674"),
  a = l("305961"),
  s = l("957255"),
  u = l("800762"),
  r = l("404008"),
  o = l("843455");

function i(e) {
  return (0, n.useStateFromStores)([s.default], () => null == e || !s.default.can(o.Permissions.CONNECT, e), [e])
}

function d(e) {
  return (0, n.useStateFromStores)([u.default, a.default], () => (0, r.isChannelFull)(e, u.default, a.default))
}