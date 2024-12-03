n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(442837),
    l = n(160404),
    a = n(314897),
    r = n(131951),
    s = n(496675),
    o = n(979651),
    c = n(981631);
function u(e) {
    return (0, i.cj)([a.default, o.Z, r.Z, s.Z, l.Z], () =>
        (function (e) {
            var t;
            let { channel: n, authenticationStore: i = a.default, voiceStateStore: u = o.Z, mediaEngineStore: d = r.Z, permissionStore: m = s.Z, impersonateStore: f = l.Z } = e,
                p = null != n ? u.getVoiceState(n.getGuildId(), i.getId()) : null,
                g = d.isSelfMute() || d.isSelfMutedTemporarily(),
                h = null == n ? void 0 : n.getGuildId(),
                v = f.isViewingRoles(h) && !m.can(c.Plq.SPEAK, n);
            return {
                selfMute: g,
                suppress: (null == p ? void 0 : p.suppress) || v,
                mute: null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t
            };
        })({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: o.Z,
            mediaEngineStore: r.Z,
            permissionStore: s.Z,
            impersonateStore: l.Z
        })
    );
}
