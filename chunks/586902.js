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
    o = n(606304),
    s = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: u = !0, checkIsMuted: c = !1, context: d } = e,
        _ = (0, r.e7)([s.Z, a.Z], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? s.Z.getVoiceStateForChannel(e, t) : null;
        }),
        E = c && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)),
        f = (0, r.e7)([o.Z], () => o.Z.isSpeaking(t, d) && !E),
        h = (0, r.e7)([o.Z], () => o.Z.isSoundSharing(t) && n);
    return l(
        f,
        (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && u),
        h
    );
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: u = !1, context: c } = e,
        d = a.Z.getVoiceChannelId(),
        _ = null != d ? s.Z.getVoiceStateForChannel(d, t) : null,
        E = u && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)),
        f = o.Z.isSpeaking(t, c) && !E,
        h = o.Z.isSoundSharing(t) && n;
    return l(f, i.Z.isUserPlayingSounds(t) && r, h);
}
