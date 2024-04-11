"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("733860");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("215569"),
  r = n("762914"),
  o = n("592125"),
  u = n("358652"),
  d = n("19780"),
  c = n("919436");

function f() {
  (0, s.useStateFromStores)([o.default], () => o.default.getPrivateChannelsVersion());
  let e = o.default.getMutablePrivateChannels(),
    t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: f
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      selectedVoiceGuildId: d.default.getGuildId(),
      selectedVoiceChannelId: d.default.getChannelId()
    })),
    h = t.map(t => {
      let n = e[t];
      return null == n || n.id === f || n.isBroadcastChannel() ? null : (0, l.jsx)(c.default, {
        channel: n
      }, n.id)
    }),
    p = null == n && null != f ? e[f] : null,
    m = (0, r.useIsBroadcastingGDM)(null == p ? void 0 : p.id);
  return null != p && !m && h.unshift((0, l.jsx)(c.default, {
    channel: p
  }, p.id)), (0, l.jsx)(i.TransitionGroup, {
    component: a.Fragment,
    children: h
  })
}