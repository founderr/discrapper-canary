e.d(n, {
    F: function () {
        return o;
    }
});
var i = e(512722),
    l = e.n(i),
    r = e(846027),
    a = e(287734),
    d = e(131951),
    u = e(254238),
    s = e(893387);
function o(t, n) {
    var e;
    let i = null !== (e = t.sessionId) && void 0 !== e ? e : '';
    (0, u._)(i), (0, u.s6)();
    let o = null != n ? n : t.channelId;
    l()(null != o, 'attempted to transfer to unknown channel'), t.selfMute !== d.Z.isSelfMute() && r.Z.toggleSelfMute(), t.selfDeaf !== d.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(), (0, s.Z)(o, 'discord_client', i), a.default.selectVoiceChannel(o, !1);
}
