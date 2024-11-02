n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(442837),
    l = n(160404),
    r = n(314897),
    a = n(131951),
    s = n(496675),
    o = n(979651),
    c = n(981631);
function u(e) {
    return (0, i.cj)([r.default, o.Z, a.Z, s.Z, l.Z], () =>
        (function (e) {
            var t;
            let { channel: n, authenticationStore: i = r.default, voiceStateStore: u = o.Z, mediaEngineStore: d = a.Z, permissionStore: h = s.Z, impersonateStore: m = l.Z } = e,
                p = null != n ? u.getVoiceState(n.getGuildId(), i.getId()) : null,
                f = d.isSelfMute() || d.isSelfMutedTemporarily(),
                g = null == n ? void 0 : n.getGuildId(),
                C = m.isViewingRoles(g) && !h.can(c.Plq.SPEAK, n);
            return {
                selfMute: f,
                suppress: (null == p ? void 0 : p.suppress) || C,
                mute: null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t
            };
        })({
            channel: e,
            authenticationStore: r.default,
            voiceStateStore: o.Z,
            mediaEngineStore: a.Z,
            permissionStore: s.Z,
            impersonateStore: l.Z
        })
    );
}
