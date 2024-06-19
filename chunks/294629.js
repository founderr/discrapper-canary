n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(442837),
  i = n(160404),
  s = n(314897),
  a = n(131951),
  r = n(496675),
  o = n(979651),
  c = n(981631);

function u(e) {
  return (0, l.cj)([s.default, o.Z, a.Z, r.Z, i.Z], () => (function(e) {
    var t;
    let {
      channel: n,
      authenticationStore: l = s.default,
      voiceStateStore: u = o.Z,
      mediaEngineStore: d = a.Z,
      permissionStore: h = r.Z,
      impersonateStore: m = i.Z
    } = e, p = null != n ? u.getVoiceState(n.getGuildId(), l.getId()) : null, E = d.isSelfMute() || d.isSelfMutedTemporarily(), g = null == n ? void 0 : n.getGuildId(), f = m.isViewingRoles(g) && !h.can(c.Plq.SPEAK, n);
    return {
      selfMute: E,
      suppress: (null == p ? void 0 : p.suppress) || f,
      mute: null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t
    }
  })({
    channel: e,
    authenticationStore: s.default,
    voiceStateStore: o.Z,
    mediaEngineStore: a.Z,
    permissionStore: r.Z,
    impersonateStore: i.Z
  }))
}