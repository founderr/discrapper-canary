"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  getCanStartBroadcast: function() {
    return u
  }
});
var a = n("446674"),
  r = n("271938"),
  s = n("42203"),
  i = n("18494"),
  l = n("101125");

function o() {
  let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
    t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId()),
    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]),
    o = (0, a.useStateFromStores)([l.default], () => null != l.default.getBroadcast()),
    u = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
    d = u || null == t;
  return !o && d
}

function u() {
  if (null != l.default.getBroadcast()) return !1;
  let e = i.default.getVoiceChannelId();
  if (null == e) return !0;
  let t = r.default.getId(),
    n = s.default.getChannel(e),
    a = (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel());
  return a
}