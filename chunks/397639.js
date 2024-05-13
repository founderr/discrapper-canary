"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  useIsVoiceChannelLocked: function() {
    return d
  }
});
var l = n("442837"),
  a = n("430824"),
  u = n("496675"),
  i = n("979651"),
  s = n("934415"),
  r = n("231338");

function d(e) {
  return (0, l.useStateFromStores)([u.default], () => null == e || !u.default.can(r.Permissions.CONNECT, e), [e])
}

function o(e) {
  return (0, l.useStateFromStores)([i.default, a.default], () => (0, s.isChannelFull)(e, i.default, a.default))
}