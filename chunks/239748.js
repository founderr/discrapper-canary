t.d(n, {
    F: function () {
        return r;
    }
});
var l = t(925549),
    i = t(475468),
    o = t(19780),
    a = t(944486),
    u = t(981631);
let r = {
    binds: ['mod+alt+left'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!o.Z.isConnected()) return !1;
        let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : u.ME,
            t = a.Z.getChannelId(n);
        return (0, i.K)(n, t), l.Z.channelListScrollTo(n, o.Z.getChannelId()), !1;
    }
};
