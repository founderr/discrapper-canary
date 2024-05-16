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
  i = n("496675"),
  u = n("979651"),
  s = n("934415"),
  r = n("231338");

function d(e) {
  return (0, l.useStateFromStores)([i.default], () => null == e || !i.default.can(r.Permissions.CONNECT, e), [e])
}

function o(e) {
  return (0, l.useStateFromStores)([u.default, a.default], () => (0, s.isChannelFull)(e, u.default, a.default))
}