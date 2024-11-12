n.d(t, {
    O: function () {
        return c;
    },
    Z: function () {
        return u;
    }
});
var r = n(442837),
    i = n(763296),
    a = n(944486),
    s = n(606304),
    o = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function u(e) {
    var t, n, l;
    let { userId: u, checkSoundSharing: c = !1, checkSoundboardSounds: d = !0, checkIsMuted: f = !1, context: _ } = e,
        p = (0, r.e7)([o.Z, a.Z], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? o.Z.getVoiceStateForChannel(e, u) : null;
        }),
        h = f && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
        m = (0, r.e7)([s.Z], () => s.Z.isSpeaking(u, _) && !h),
        g = (0, r.e7)([s.Z], () => s.Z.isSoundSharing(u) && c),
        E = (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(u) && d);
    return (t = m), (n = E), (l = g), t || n || l;
}
function c(e) {
    var t, n, r;
    let { userId: l, checkSoundSharing: u = !1, checkSoundboardSounds: c = !0, checkIsMuted: d = !1, context: f } = e,
        _ = a.Z.getVoiceChannelId(),
        p = null != _ ? o.Z.getVoiceStateForChannel(_, l) : null,
        h = d && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
        m = s.Z.isSpeaking(l, f) && !h,
        g = s.Z.isSoundSharing(l) && u,
        E = i.Z.isUserPlayingSounds(l) && c;
    return (t = m), (n = E), (r = g), t || n || r;
}
