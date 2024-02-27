"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  a = n("38654"),
  s = n("271938"),
  i = n("42887"),
  r = n("957255"),
  u = n("800762"),
  o = n("49111");

function d(e) {
  return (0, l.useStateFromStoresObject)([s.default, u.default, i.default, r.default, a.default], () => (function(e) {
    var t;
    let {
      channel: n,
      authenticationStore: l = s.default,
      voiceStateStore: d = u.default,
      mediaEngineStore: c = i.default,
      permissionStore: f = r.default,
      impersonateStore: h = a.default
    } = e, m = null != n ? d.getVoiceState(n.getGuildId(), l.getId()) : null, p = c.isSelfMute() || c.isSelfMutedTemporarily(), E = null == n ? void 0 : n.getGuildId(), g = h.isViewingRoles(E) && !f.can(o.Permissions.SPEAK, n);
    return {
      selfMute: p,
      suppress: (null == m ? void 0 : m.suppress) || g,
      mute: null !== (t = null == m ? void 0 : m.mute) && void 0 !== t && t
    }
  })({
    channel: e,
    authenticationStore: s.default,
    voiceStateStore: u.default,
    mediaEngineStore: i.default,
    permissionStore: r.default,
    impersonateStore: a.default
  }))
}