t.d(n, {
    F: function () {
        return s;
    }
});
var l = t(512722),
    i = t.n(l),
    u = t(846027),
    r = t(287734),
    a = t(131951),
    d = t(254238),
    o = t(893387);
function s(e, n) {
    var t;
    let l = null !== (t = e.sessionId) && void 0 !== t ? t : '';
    (0, d._)(l), (0, d.s6)();
    let s = null != n ? n : e.channelId;
    i()(null != s, 'attempted to transfer to unknown channel'), e.selfMute !== a.Z.isSelfMute() && u.Z.toggleSelfMute(), e.selfDeaf !== a.Z.isSelfDeaf() && u.Z.toggleSelfDeaf(), (0, o.Z)(s, 'discord_client', l), r.default.selectVoiceChannel(s, !1);
}
