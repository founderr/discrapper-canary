r.d(n, {
    O: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(763296),
    s = r(944486),
    o = r(606304),
    l = r(979651);
function u(e, n, r) {
    return e || n || r;
}
function c(e) {
    let { userId: n, checkSoundSharing: r = !1, checkSoundboardSounds: c = !0, checkIsMuted: d = !1, context: f } = e,
        _ = (0, i.e7)([l.Z, s.Z], () => {
            let e = s.Z.getVoiceChannelId();
            return null != e ? l.Z.getVoiceStateForChannel(e, n) : null;
        }),
        h = d && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)),
        p = (0, i.e7)([o.Z], () => o.Z.isSpeaking(n, f) && !h),
        m = (0, i.e7)([o.Z], () => o.Z.isSoundSharing(n) && r);
    return u(
        p,
        (0, i.e7)([a.Z], () => a.Z.isUserPlayingSounds(n) && c),
        m
    );
}
function d(e) {
    let { userId: n, checkSoundSharing: r = !1, checkSoundboardSounds: i = !0, checkIsMuted: c = !1, context: d } = e,
        f = s.Z.getVoiceChannelId(),
        _ = null != f ? l.Z.getVoiceStateForChannel(f, n) : null,
        h = c && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)),
        p = o.Z.isSpeaking(n, d) && !h,
        m = o.Z.isSoundSharing(n) && r;
    return u(p, a.Z.isUserPlayingSounds(n) && i, m);
}
